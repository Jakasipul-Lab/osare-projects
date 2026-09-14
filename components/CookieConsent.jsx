'use client'
import { useState, useEffect } from 'react'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('osare_cookie_consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('osare_cookie_consent', 'accepted')
    setVisible(false)
    window.location.reload()
  }

  const decline = () => {
    localStorage.setItem('osare_cookie_consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <>
      <style>{`@media print { .osare-cookie-banner { display: none !important; } }`}</style>
      <div className="osare-cookie-banner" style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9999,
        background: '#0f172a', color: 'white', padding: '20px',
        display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px',
        boxShadow: '0 -4px 20px rgba(0,0,0,0.2)'
      }}>
        <p style={{ margin: 0, fontSize: '14px', maxWidth: '600px' }}>
          We use cookies for advertising (Google AdSense) and essential site function.{' '}
          <a href="/cookie-policy" style={{ color: '#f97316', textDecoration: 'underline' }}>
            Learn more
          </a>
        </p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={decline}
            style={{
              padding: '10px 18px', borderRadius: '8px', border: '1px solid #475569',
              background: 'transparent', color: 'white', fontWeight: 600, cursor: 'pointer'
            }}
          >
            Decline
          </button>
          <button
            onClick={accept}
            style={{
              padding: '10px 18px', borderRadius: '8px', border: 'none',
              background: 'linear-gradient(to right, #1e3a8a, #f97316)', color: 'white', fontWeight: 700, cursor: 'pointer'
            }}
          >
            Accept
          </button>
        </div>
      </div>
    </>
  )
}
