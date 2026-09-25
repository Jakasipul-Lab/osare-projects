'use client'

import { useEffect } from 'react'

export default function GoogleTranslate() {
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
    <div
      style={{
        position: 'fixed',
        top: 12,
        right: 12,
        zIndex: 9999,
        background: 'white',
        padding: '4px 8px',
        borderRadius: 8,
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      }}
    >
      <div id="google_translate_element" />
    </div>
  )
}
