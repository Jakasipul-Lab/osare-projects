'use client'

import { useState } from 'react'

const NUMBERS = [
  { label: '+254 758 378 729', wa: '254758378729' },
  { label: '+254 710 428 814', wa: '254710428814' },
]
import { useState } from 'react'

const NUMBERS = [
  { label: '+254 758 378 729', wa: '254758378729' },
  { label: '+254 710 428 814', wa: '254710428814' },
]
const MESSAGE = 'Hello OSARE, I would like help planning a trip in East Africa.'

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false)
  const text = encodeURIComponent(MESSAGE)

  return (
    <div className="fixed bottom-4 left-4 z-40">
      {open && (
        <div className="mb-2 w-60 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">
          <p className="mb-2 text-xs font-semibold text-slate-600">Chat with OSARE on WhatsApp</p>
          {NUMBERS.map((n) => (
            <a
              key={n.wa}
              href={`https://wa.me/${n.wa}?text=${text}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 block rounded-xl bg-[#25D366] px-3 py-2 text-center text-sm font-semibold text-white hover:bg-[#1ebe5b]"
            >
              {n.label}
            </a>
          ))}
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label="Chat with OSARE on WhatsApp"
        aria-expanded={open}
        className="flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg hover:bg-[#1ebe5b]"
      >
        <svg viewBox="0 0 32 32" width="22" height="22" fill="currentColor" aria-hidden="true">
          <path d="M16.04 3C9.4 3 4 8.4 4 15.04c0 2.12.55 4.19 1.6 6.02L4 29l8.1-1.57a12 12 0 0 0 3.94.66C22.68 28.09 28 22.69 28 16.05 28 9.4 22.68 3 16.04 3zm0 22.07c-1.2 0-2.38-.32-3.4-.93l-.24-.15-4.8.93.95-4.68-.16-.25a9.95 9.95 0 0 1-1.52-5.3c0-5.5 4.48-9.98 9.99-9.98 5.5 0 9.97 4.48 9.97 9.98 0 5.5-4.47 9.38-9.99 9.38zm5.47-7.46c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.41-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/>
        </svg>
        <span className="hidden sm:inline">WhatsApp us</span>
      </button>
    </div>
  )
}' },
]
const MESSAGE = 'Hello OSARE, I would like help planning a trip in East Africa.'

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false)
  const text = encodeURIComponent(MESSAGE)

  return (
    <div className="fixed bottom-4 left-4 z-40">
      {open && (
        <div className="mb-2 w-60 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">
          <p className="mb-2 text-xs font-semibold text-slate-600">Chat with OSARE on WhatsApp</p>
          {NUMBERS.map((n) => (
            <a
              key={n.wa}
              href={`https://wa.me/${n.wa}?text=${text}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 block rounded-xl bg-[#25D366] px-3 py-2 text-center text-sm font-semibold text-white hover:bg-[#1ebe5b]"
            >
              {n.label}
            </a>
          ))}
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label="Chat with OSARE on WhatsApp"
        aria-expanded={open}
        className="flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg hover:bg-[#1ebe5b]"
      >
        <svg viewBox="0 0 32 32" width="22" height="22" fill="currentColor" aria-hidden="true">
          <path d="M16.04 3C9.4 3 4 8.4 4 15.04c0 2.12.55 4.19 1.6 6.02L4 29l8.1-1.57a12 12 0 0 0 3.94.66C22.68 28.09 28 22.69 28 16.05 28 9.4 22.68 3 16.04 3zm0 22.07c-1.2 0-2.38-.32-3.4-.93l-.24-.15-4.8.93.95-4.68-.16-.25a9.95 9.95 0 0 1-1.52-5.3c0-5.5 4.48-9.98 9.99-9.98 5.5 0 9.97 4.48 9.97 9.98 0 5.5-4.47 9.38-9.99 9.38zm5.47-7.46c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.41-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/>
        </svg>
        <span className="hidden sm:inline">WhatsApp us</span>
      </button>
    </div>
  )
}
