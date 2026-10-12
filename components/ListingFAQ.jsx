'use client'

const HOW_TO_BOOK = {
  q: 'How do I book with this partner?',
  a: 'Tap "Enquire via WhatsApp" to chat directly with the partner. You agree dates, price and payment with them. OSARE adds no fee to your price.',
}

const PARK_FEES = {
  q: 'Are park fees included in the quote?',
  a: 'It depends. Park entry fees differ by park and by whether you are a citizen, resident or non-resident. In your WhatsApp chat, ask whether park fees, vehicle fees, guide fees, meals and accommodation are included.',
}

const FARES = {
  q: 'Is the fare fixed?',
  a: 'Fares can change with the season, the time of day and your luggage. Confirm the price, pick-up point and departure time in your WhatsApp chat before you travel.',
}

const PAY_SAFELY = {
  q: 'How can I pay safely?',
  a: 'Payment methods vary by operator and may include mobile money, bank transfer or card. Ask for a written invoice first, and pay only to an official business account or business number that matches it.',
}

const TRACKING = {
  q: 'How are enquiries tracked?',
  a: 'Your WhatsApp message includes the listing name and a reference code (for example OSARE0017). Quote it in your chat so the partner knows which listing you mean.',
}

export default function ListingFAQ({ type }) {
  const items =
    type === 'local'
      ? [HOW_TO_BOOK, FARES, PAY_SAFELY, TRACKING]
      : [HOW_TO_BOOK, PARK_FEES, PAY_SAFELY, TRACKING]

  return (
    <div className="mt-5 border-t border-slate-100 pt-4">
      <h3 className="text-sm font-bold text-slate-900">Before you enquire</h3>
      <div className="mt-2 divide-y divide-slate-100">
        {items.map((it) => (
          <details key={it.q} className="group py-2">
            <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-slate-800 [&::-webkit-details-marker]:hidden">
              {it.q}
              <span className="ml-2 text-slate-400 transition-transform group-open:rotate-180">▾</span>
            </summary>
            <p className="mt-2 text-sm text-slate-600">{it.a}</p>
          </details>
        ))}
      </div>
    </div>
  )
}
