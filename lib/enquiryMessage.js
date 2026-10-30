// Builds the WhatsApp enquiry text sent to a vendor.
// The questions depend on the listing category, so each message fits the business.

const DEFAULT_QUESTIONS = [
  'Your current price',
  'Available dates',
  'What is included and not included',
  'How I can book',
]

const BUS_QUESTIONS = [
  'Departure times',
  'Fare',
  'Boarding point',
  'Luggage rules',
]

const QUESTIONS = {
  'Safari Package': [
    'Price per person',
    'Available dates',
    'Accommodation (lodges or camps)',
    'What is included and not included',
  ],
  'Kilimanjaro Climb': [
    'Route and number of days',
    'Price per person',
    'Available departure dates',
    'What is included (park fees, crew, hotel nights)',
  ],
  'Hotel & Resort': [
    'Room availability',
    'Rate per night',
    'Meals included',
    'Exact location and how to get there',
  ],
  'Sightseeing': [
    'Duration of the tour',
    'Price per person',
    'Start time and pickup point',
    'What is included',
  ],
  'Light Aircraft Charter': [
    'Route and flight time',
    'Price per seat or per charter',
    'Luggage allowance',
    'Available dates',
  ],
  'Car & Caravan Hire': [
    'Vehicle type',
    'Daily rate',
    'Insurance included',
    'Vehicle availability',
  ],
  'Taxi / Car Hire': [
    'Vehicle type',
    'Price for my trip',
    'Pickup point and time',
    'Availability',
  ],
  'Airport Transfer': [
    'Pickup location',
    'Destination',
    'Transfer price',
    'Vehicle size and luggage',
  ],
  'Bus / Coach': BUS_QUESTIONS,
  'Matatu / Shuttle': BUS_QUESTIONS,
  'Train (SGR)': [
    'Departure times',
    'Fare and class',
    'Boarding station',
    'Luggage rules',
  ],
}

function clean(value, max) {
  return String(value || '').replace(/\s+/g, ' ').trim().slice(0, max)
}

export function buildEnquiryMessage({ title, category, code, month, travelers }) {
  const questions = QUESTIONS[category] || DEFAULT_QUESTIONS
  const lines = [
    `Hello, I found your listing "${title}" on EA SafariRoutes (OSARE) and I would like to enquire.`,
    '',
    'Could you please tell me:',
    ...questions.map((q, i) => `${i + 1}. ${q}`),
  ]

  const m = clean(month, 40)
  const t = clean(travelers, 10)
  if (m || t) {
    lines.push('')
    if (m) lines.push(`Travel month: ${m}`)
    if (t) lines.push(`Travelers: ${t}`)
  }

  lines.push('', `Thank you. (Ref: ${code})`)
  return lines.join('\n')
}
