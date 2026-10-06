'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Pages where the language box is hidden (admin screens do not need translation)
const HIDE_ON = ['/dashboard', '/admin']

export default function GoogleTranslate() {
  const pathname = usePathname() || ''
  const hidden = HIDE_ON.some((p) => pathname === p || pathname.startsWith(p + '/'))

  useEffect(() => {
    // Don't load the script twice if the component re-renders
    if (document.getElementById('google-translate-script')) return

    window.googleTranslateElementInit = () => {
      // eslint-disable-next-line no-new
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          // Add or remove language codes here as needed
          includedLanguages: 'en,fr,de,es,it,pt,sw,ar,zh-CN,ja,ru,hi',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element'
      )
    }

    const script = document.createElement('script')
    script.id = 'google-translate-script'
    script.src =
      'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <>
      <style>{`
        iframe.goog-te-banner-frame { display: none !important; }
        body { top: 0 !important; }
      `}</style>
      <div
        style={{
          display: hidden ? 'none' : 'block',
          position: 'fixed',
          bottom: 14,
          left: 14,
          zIndex: 50,
          background: 'white',
          padding: '2px 6px',
          borderRadius: 8,
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          fontSize: 12,
        }}
      >
        <div id="google_translate_element" />
      </div>
    </>
  )
}
