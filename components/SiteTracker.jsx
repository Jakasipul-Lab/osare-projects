'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Counts one visit per page and taps on the request and WhatsApp buttons, and sends them to /api/track.
// Stores no cookie and no personal data. The ad link tags (utm_source, utm_campaign) say which post or ad sent the visitor.
// Pages under /admin are never counted, and a browser that has opened /admin is ignored from then on (so your own visits do not count).
// The German Kilimanjaro pages are counted by their own layout, so they are skipped here.
const SKIP = ['/admin', '/de/kilimandscharo']
const IGNORE_KEY = 'osare-no-track'
const TAG_KEY = 'osare-visit-tags'

function skipped(path) {
  return SKIP.some((p) => path === p || path.startsWith(p + '/'))
}

function ignoredBrowser() {
  try {
    return localStorage.getItem(IGNORE_KEY) === '1'
  } catch (e) {
    return false
  }
}

function tags() {
  try {
    const params = new URLSearchParams(window.location.search)
    const source = params.get('utm_source') || ''
    const campaign = params.get('utm_campaign') || ''
    if (source || campaign) {
      sessionStorage.setItem(TAG_KEY, JSON.stringify({ source, campaign }))
      return { source, campaign }
    }
    const saved = JSON.parse(sessionStorage.getItem(TAG_KEY) || 'null')
    if (saved) return { source: saved.source || '', campaign: saved.campaign || '' }
    let ref = ''
    if (document.referrer) {
      const host = new URL(document.referrer).hostname
      if (host && host !== window.location.hostname) ref = host
    }
    sessionStorage.setItem(TAG_KEY, JSON.stringify({ source: ref, campaign: '' }))
    return { source: ref, campaign: '' }
  } catch (e) {}
  return { source: '', campaign: '' }
}

function send(event, path) {
  try {
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      keepalive: true,
      body: JSON.stringify({ event, path, ...tags() }),
    }).catch(() => {})
  } catch (e) {}
}

function kindOfLink(href) {
  if (/wa\.me|api\.whatsapp\.com|whatsapp:\/\//i.test(href)) return 'click_whatsapp'
  if (/\/de\/reiseanfrage|\/request-a-trip/i.test(href)) return 'click_request'
  return null
}

export default function SiteTracker() {
  const pathname = usePathname()

  useEffect(() => {
    if (!pathname) return
    if (pathname.startsWith('/admin')) {
      try {
        localStorage.setItem(IGNORE_KEY, '1')
      } catch (e) {}
      return
    }
    if (skipped(pathname) || ignoredBrowser()) return
    send('view', pathname)
  }, [pathname])

  useEffect(() => {
    function onClick(e) {
      try {
        const path = window.location.pathname
        if (skipped(path) || ignoredBrowser()) return
        const link = e.target && e.target.closest ? e.target.closest('a') : null
        if (!link) return
        const kind = kindOfLink(link.getAttribute('href') || '')
        if (kind) send(kind, path)
      } catch (err) {}
    }
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])

  return null
}
