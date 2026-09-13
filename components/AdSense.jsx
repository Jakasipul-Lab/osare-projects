'use client'
import Script from 'next/script'

// Only import and render this component on pages with genuine,
// substantial content (e.g. /about, /safari, /local, vendor detail
// pages). Never render it on the admin panel, loading states, or
// empty-result screens.
export function AdSense() {
  return (
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1492564155912705"
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  )
}
