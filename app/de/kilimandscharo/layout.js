'use client'

import { useEffect } from 'react'

// Counts one visit per page load, plus taps on the request and WhatsApp buttons, and sends them to /api/track.
// Stores no cookie and no personal data. The ad link tags (utm_source, utm_campaign) say which ad sent the visitor.
function send(event) {
  try {
    const params = new URLSearchParams(window.location.search)
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      keepalive: true,
      body: JSON.stringify({
        event,
        path: window.location.pathname,
        source: params.get('utm_source') || '',
        campaign: params.get('utm_campaign') || '',
      }),
    }).catch(() => {})
  } catch (e) {}
}

function kindOfLink(href) {
  if (/wa\.me|api\.whatsapp\.com|whatsapp:\/\//i.test(href)) return 'click_whatsapp'
  if (/\/de\/reiseanfrage|\/request-a-trip/i.test(href)) return 'click_request'
  return null
}

export default function KilimandscharoLayout({ children }) {
  useEffect(() => {
    send('view')

    function onClick(e) {
      try {
        const link = e.target && e.target.closest ? e.target.closest('a') : null
        if (!link) return
        const kind = kindOfLink(link.getAttribute('href') || '')
        if (kind) send(kind)
      } catch (err) {}
    }

    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])

  return <>{children}</>
}
