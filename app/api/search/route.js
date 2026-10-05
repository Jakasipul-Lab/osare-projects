import { NextResponse } from 'next/server'
import { query } from '@/lib/db'
import { mapVendorRow } from '@/lib/vendorData'

const STOP_WORDS = new Set(['to','from','and','the','a','an','in','at','of','for','on','with','trip','trips','tour','tours','package','packages','day','days','night','nights','safari','safaris','itinerary','best','cheap','near','me','book'])

const DESTINATIONS = {
  'maasai-mara': /\bma+sai\s*mara\b|\bmara\b/g,
  serengeti: /serengeti/g,
  ngorongoro: /ngorongoro/g,
  amboseli: /amboseli/g,
  tsavo: /tsavo/g,
  kilimanjaro: /kilimanjaro|\bkili\b/g,
  zanzibar: /zanzibar|\bunguja\b/g,
  'lake-nakuru': /nakuru/g,
  'diani-coast': /diani|mombasa|malindi/g,
  'uganda-gorillas': /bwindi|gorilla|murchison|queen elizabeth/g,
  'tarangire-manyara': /tarangire|manyara/g,
}

const NUMBER_WORDS = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10 }

function parseSearch(raw) {
  let rest = String(raw || '').toLowerCase().replace(/[^a-z0-9\s]+/g, ' ').replace(/\s+/g, ' ').trim()
  rest = rest.replace(/\b(one|two|three|four|five|six|seven|eight|nine|ten)\b(?=\s*(day|days|night|nights)\b)/g, (w) => NUMBER_WORDS[w])

  let days = null
  const dm = rest.match(/\b(\d{1,2})\s*(?:day|days|d|night|nights)\b/)
  if (dm) {
    days = Number(dm[1])
    rest = rest.replace(dm[0], ' ')
  }

  const destinations = []
  for (const [slug, re] of Object.entries(DESTINATIONS)) {
    re.lastIndex = 0
    if (re.test(rest)) {
      destinations.push(slug)
      re.lastIndex = 0
      rest = rest.replace(re, ' ')
    }
  }

  const words = rest.split(/\s+/).filter((w) => w.length > 1 && !STOP_WORDS.has(w))
  return { days, destinations, words }
}

const lower = (v) => String(v || '').toLowerCase()

function scoreRow(row, intent) {
  const title = lower(row.title)
  const vendor = lower(row.vendor)
  const location = lower(row.location)
  const description = lower(row.description)
  const category = lower(row.category)
  const keywords = lower(JSON.stringify(row.keywords || []))
  const allText = `${title} ${vendor} ${location} ${description} ${category} ${keywords}`
  const tagged = Array.isArray(row.destinations) ? row.destinations : []

  let score = 0
  for (const slug of intent.destinations) {
    const re = DESTINATIONS[slug]
    re.lastIndex = 0
    if (tagged.includes(slug)) score += 10
    else if (re.test(allText)) score += 4
    re.lastIndex = 0
  }
  for (const w of intent.words) {
    if (title.includes(w)) score += 3
    else if (vendor.includes(w) || category.includes(w) || keywords.includes(w)) score += 2
    else if (location.includes(w) || description.includes(w)) score += 1
  }
  if (intent.days && score > 0) {
    const dayRe = new RegExp(`\\b${intent.days}\\s*-?\\s*(day|days)\\b`)
    if (dayRe.test(allText)) score += 3
  }
  if (score > 0) {
    if (row.is_verified) score += 3
    if (row.image) score += 1
  }
  return score
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type')
    const search = searchParams.get('q')
    const category = searchParams.get('category')
    const limit = Number(searchParams.get('limit')) || 0

    let sql = 'SELECT * FROM listings WHERE 1=1'
    const params = []
    if (type && type !== 'All') {
      params.push(type)
      sql += ` AND type = $${params.length}`
    }
    if (category && category !== 'All') {
      params.push(category)
      sql += ` AND category = $${params.length}`
    }

    const result = await query(`${sql} ORDER BY created_at DESC`, params)
    let rows = result.rows
    let totalMatches = rows.length

    if (search) {
      const intent = parseSearch(search)
      const hasIntent = intent.days || intent.destinations.length > 0 || intent.words.length > 0
      if (hasIntent) {
        rows = rows
          .map((row) => ({ row, score: scoreRow(row, intent) }))
          .filter((x) => x.score > 0)
          .sort((a, b) => b.score - a.score || new Date(b.row.created_at) - new Date(a.row.created_at))
          .map((x) => x.row)
        totalMatches = rows.length
      }
    }

    if (limit > 0) rows = rows.slice(0, limit)

    return NextResponse.json(rows.map(mapVendorRow), {
      headers: { 'Access-Control-Allow-Origin': '*', 'X-Total-Matches': String(totalMatches) },
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
