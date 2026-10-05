// Phone number checking by country. No external packages.
// Checks the country code and the length/shape of the number for the
// countries most visitors and partners use. It catches typos and invented
// numbers that cannot exist; it cannot prove the number belongs to the person.

// code -> regex for the national number (digits after the country code, without a leading 0)
const COUNTRIES = {
  '254': /^[17]\d{8}$/,          // Kenya
  '255': /^[67]\d{8}$/,          // Tanzania
  '256': /^7\d{8}$/,             // Uganda
  '250': /^7\d{8}$/,             // Rwanda
  '257': /^[67]\d{7}$/,          // Burundi
  '251': /^9\d{8}$/,             // Ethiopia
  '27': /^[6-8]\d{8}$/,          // South Africa
  '20': /^1\d{9}$/,              // Egypt
  '971': /^5\d{8}$/,             // UAE
  '966': /^5\d{8}$/,             // Saudi Arabia
  '974': /^[3-7]\d{7}$/,         // Qatar
  '1': /^[2-9]\d{2}[2-9]\d{6}$/, // USA / Canada
  '44': /^7\d{9}$/,              // United Kingdom (mobile)
  '353': /^8\d{8}$/,             // Ireland (mobile)
  '49': /^1\d{9,10}$/,           // Germany (mobile)
  '33': /^[67]\d{8}$/,           // France (mobile)
  '31': /^6\d{8}$/,              // Netherlands (mobile)
  '32': /^4\d{8}$/,              // Belgium (mobile)
  '41': /^7\d{8}$/,              // Switzerland (mobile)
  '43': /^6\d{8,11}$/,           // Austria (mobile)
  '39': /^3\d{8,9}$/,            // Italy (mobile)
  '34': /^[67]\d{8}$/,           // Spain (mobile)
  '46': /^7\d{8}$/,              // Sweden (mobile)
  '47': /^[49]\d{7}$/,           // Norway (mobile)
  '45': /^[2-9]\d{7}$/,          // Denmark
  '358': /^4\d{8,9}$/,           // Finland (mobile)
  '48': /^[5-8]\d{8}$/,          // Poland (mobile)
  '7': /^9\d{9}$/,               // Russia (mobile)
  '90': /^5\d{9}$/,              // Turkey (mobile)
  '91': /^[6-9]\d{9}$/,          // India (mobile)
  '86': /^1\d{10}$/,             // China (mobile)
  '81': /^[789]0\d{8}$/,         // Japan (mobile)
  '82': /^1\d{8,9}$/,            // South Korea (mobile)
  '65': /^[89]\d{7}$/,           // Singapore
  '61': /^4\d{8}$/,              // Australia (mobile)
  '64': /^2\d{7,9}$/,            // New Zealand (mobile)
  '52': /^\d{10}$/,              // Mexico
  '55': /^[1-9]\d{10}$/,         // Brazil (mobile)
}

const CODES_LONGEST_FIRST = Object.keys(COUNTRIES).sort((a, b) => b.length - a.length)

export const PHONE_HELP = 'Please enter a valid phone number with your country code, for example +254 712 345 678'

// Returns { ok: true, e164: '+254712345678', digits: '254712345678' }
// or { ok: false, error: '...' }
export function validatePhone(raw) {
  const text = String(raw || '').trim()
  if (!text) return { ok: false, error: PHONE_HELP }
  if (/[^0-9+\s().-]/.test(text)) return { ok: false, error: PHONE_HELP }

  let digits = text.replace(/[^0-9]/g, '')
  let international = false

  if (text.startsWith('+')) {
    international = true
  } else if (digits.startsWith('00')) {
    digits = digits.slice(2)
    international = true
  } else if (digits.startsWith('0')) {
    // local Kenyan format, e.g. 0712 345 678
    digits = '254' + digits.slice(1)
    international = true
  } else {
    // digits only: must begin with a known country code
    international = true
  }

  if (!international || digits.length < 8 || digits.length > 15) return { ok: false, error: PHONE_HELP }

  for (const code of CODES_LONGEST_FIRST) {
    if (digits.startsWith(code)) {
      let national = digits.slice(code.length)
      // people often write +254 0712... — drop the extra leading 0
      if (national.startsWith('0')) national = national.slice(1)
      if (COUNTRIES[code].test(national)) {
        return { ok: true, e164: '+' + code + national, digits: code + national }
      }
    }
  }
  return { ok: false, error: PHONE_HELP }
}
