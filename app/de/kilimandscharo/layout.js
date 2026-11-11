'use client'

import { useEffect } from 'react'

// Counts one visit per page load and sends it to /api/track.
// Stores no cookie and no personal data. The ad link tags (utm_source, utm_campaign) say which ad sent the visitor.
export default function KilimandscharoLayout({ children }) {
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search)
      fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        keepalive: true,
        body: JSON.stringify({
          path: window.location.pathname,
          source: params.get('utm_source') || '',
          campaign: params.get('utm_campaign') || '',
        }),
      }).catch(() => {})
    } catch (e) {}
  }, [])

  return <>{children}</>
}
