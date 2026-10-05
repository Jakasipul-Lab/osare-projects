import { NextResponse } from 'next/server'
import { query } from '@/lib/db'
import { mapVendorRow } from '@/lib/vendorData'

const STOP_WORDS = new Set(['to','from','and','the','a','an','in','at','of','for','on','with','trip','trips','tour','tours','package','packages','day','days','night','nights','safari','safaris','itinerary','best','cheap','near','me','book'])

const NUMBER_WORDS = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10 }

// Spellings a visitor might type, compacted (no spaces) so "masai mara",
// "maasai-mara" and "masaimara" all compare the same way.
const DESTINATION_TERMS = {
  'maasai-mara': ['maasaimara', 'masaimara', 'mara'],
  serengeti: ['serengeti'],
  ngorongoro: ['ngorongoro'],
  amboseli: ['amboseli'],
  tsavo: ['tsavo'],
  kilimanjaro: ['kilimanjaro', 'kili'],
  zanzibar: ['zanzibar', 'unguja'],
  'lake-nakuru': ['nakuru', 'lakenakuru'],
  'diani-coast': ['diani', 'mombasa', 'malindi'],
  'uganda-gorillas': ['bwindi', 'gorilla', 'gorillas', 'murchison', 'queenelizabeth'],
  'tarangire-manyara': ['tarangire', 'manyara'],
}

// How many typos we forgive depends on word length (short words must match exactly).
function allowedTypos(len) {
  if (len >= 9) return 2
  if (len >= 5) return 1
  return 0
}

// Edit distance that gives up early once it exceeds `max`.
function editDistance(a, b, max) {
  if (Math.abs(a.length - b.length) > max) return max + 1
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i)
  for (let i = 1; i <= a.length; i++) {
    const cur = [i]
    let rowMin = i
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost)
      if (cur[j] < rowMin) rowMin = cur[j]
    }
    if (rowMin > max) return max + 1
    prev = cur
  }
  return prev[b.length]
}

function matchesTerm(candidate, term) {
  const max = allowedTypos(term.length)
  return editDistance(candidate, term, max) <= max
}

function parseSearch(raw) {
  let rest = String(raw || '').toLowerCase().replace(/[^a-z0-9\s]+/g, ' ').replace(/\s+/g, ' ').trim()
  rest = rest.replace(/\b(one|two|three|four|five|six|seven|eight|nine|ten)\b(?=\s*(day|days|night|nights)\b)/g, (w) => NUMBER_WORDS[w])

  let days = null
  const dm = rest.match(/\b(\d{1,2})\s*(?:day|days|d|night|nights)\b/)
  if (dm) {
    days = Number(dm[1])
    rest = rest.replace(dm[0], ' ')
  }

  let tokens = rest.split(/\s+/).filter(Boolean)
  const destinations = []

  // Try two-word pairs first ("masai marra"), then single words ("serengetti").
  for (const [slug, terms] of Object.entries(DESTINATION_TERMS)) {
    let found = false
    for (let i = 0; i < tokens.length - 1 && !found; i++) {
      const pair = tokens[i] + tokens[i + 1]
      if (terms.some((t) => t.length >= 8 && matchesTerm(pair, t))) {
        found = true
        tokens.splice(i, 2)
      }
    }
    for (let i = 0; i < tokens.length && !found; i++) {
      if (terms.some((t) => matchesTerm(tokens[i], t))) {
        found = true
        tokens.splice(i, 1)
      }
    }
    if (found) destinations.push(slug)
  }

  const words = tokens.filter((w) => w.length > 1 && !STOP_WORDS.has(w))
  return { days, destinations, words }
}

const lower = (v) => String(v || '').toLowerCase()

// Exact patterns used on listing text (vendors spell things both ways).
const DESTINATION_TEXT = {
  'maasai-mara': /\bma+sai\s*mara\b|\bmara\b/,
  serengeti: /serengeti/,
  ngorongoro: /ngorongoro/,
  amboseli: /amboseli/,
  tsavo: /tsavo/,
  kilimanjaro: /kilimanjaro|\bkili\b/,
  zanzibar: /zanzibar|\bunguja\b/,
  'lake-nakuru': /nakuru/,
  'diani-coast': /diani|mombasa|malindi/,
  'uganda-gorillas': /bwindi|gorilla|murchison|queen elizabeth/,
  'tarangire-manyara': /tarangire|manyara/,
}

function fuzzyHit(word, tokenSet) {
  const max = allowedTypos(word.length)
  if (max === 0) return false
  for (const t of tokenSet) {
    if (editDistance(word, t, max) <= max) return true
  }
  return false
}

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
    if (tagged.includes(slug)) score += 10
    else if (DESTINATION_TEXT[slug] && DESTINATION_TEXT[slug].test(allText)) score += 4
  }

  let titleTokens = null
  let allTokens = null
  for (const w of intent.words) {
    if (title.includes(w)) score += 3
    else if (vendor.includes(w) || category.includes(w) || keywords.includes(w)) score += 2
    else if (location.includes(w) || description.includes(w)) score += 1
    else {
      // Typo tolerance: compare against the actual words in the listing.
      if (!titleTokens) {
        titleTokens = new Set(title.split(/[^a-z0-9]+/).filter((t) => t.length >= 4))
        allTokens = new Set(allText.split(/[^a-z0-9]+/).filter((t) => t.length >= 4 && t.length <= 20))
      }
      if (fuzzyHit(w, titleTokens)) score += 2
      else if (fuzzyHit(w, allTokens)) score += 1
    }
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
