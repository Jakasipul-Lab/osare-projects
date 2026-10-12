'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Globe } from 'lucide-react'

// Pages where the language button is hidden (admin screens do not need translation)
const HIDE_ON = ['/dashboard', '/admin']

// Names are written in their own language and are never translated
const LANGS = [
  { code: 'en', label: 'English' },
  { code: 'de', label: 'Deutsch' },
  { code: 'fr', label: 'Français' },
  { code: 'es', label: 'Español' },
  { code: 'it', label: 'Italiano' },
  { code: 'pt', label: 'Português' },
  { code: 'sw', label: 'Kiswahili' },
  { code: 'ar', label: 'العربية' },
  { code: 'zh-CN', label: '中文' },
  { code: 'ja', label: '日本語' },
  { code: 'ru', label: 'Русский' },
  { code: 'hi', label: 'हिन्दी' },
]

function clearTranslateCookie() {
  const expired = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/'
  document.cookie = expired
  document.cookie = `${expired}; domain=${window.location.hostname}`
  document.cookie = `${expired}; domain=.${window.location.hostname}`
}

export default function GoogleTranslate() {
  const pathname = usePathname() || ''
  const hidden = HIDE_ON.some((p) => pathname === p || pathname.startsWith(p + '/'))
  const [open, setOpen] = useState(false)
  const [note, setNote] = useState('')

  useEffect(() => {
    // Don't load the script twice if the component re-renders
    if (document.getElementById('google-translate-script')) return

    window.googleTranslateElementInit = () => {
      // eslint-disable-next-line no-new
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: LANGS.map((l) => l.code).join(','),
          // HORIZONTAL builds the hidden language list that our button drives
          layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
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

  const choose = (code) => {
    if (code === 'en') {
      clearTranslateCookie()
      window.location.reload()
      return
    }
    const combo = document.querySelector('select.goog-te-combo')
    if (!combo) {
      setNote('Translator is still loading, please try again in a moment.')
      return
    }
    combo.value = code
    combo.dispatchEvent(new Event('change'))
    setNote('')
    setOpen(false)
  }

  return (
    <>
      <style>{`
        iframe.goog-te-banner-frame { display: none !important; }
        .goog-te-balloon-frame, #goog-gt-tt { display: none !important; }
        .goog-text-highlight { background: none !important; box-shadow: none !important; }
        body { top: 0 !important; }
      `}</style>

      {/* Google's own widget stays in the page, hidden; our button drives it */}
      <div id="google_translate_element" style={{ display: 'none' }} />

      <div
        translate="no"
        className="notranslate"
        style={{ display: hidden ? 'none' : 'block' }}
      >
        {open && (
          <div
            onClick={() => setOpen(false)}
            style={{ position: 'fixed', inset: 0, zIndex: 49 }}
          />
        )}
        <div style={{ position: 'fixed', bottom: 14, left: 14, zIndex: 50 }}>
          {open && (
            <div
              style={{
                position: 'absolute',
                bottom: 44,
                left: 0,
                width: 160,
                maxHeight: '55vh',
                overflowY: 'auto',
                background: 'white',
                borderRadius: 10,
                boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                padding: '4px 0',
                fontSize: 14,
              }}
            >
              {LANGS.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => choose(l.code)}
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'left',
                    padding: '10px 14px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#0f172a',
                  }}
                >
                  {l.label}
                </button>
              ))}
              {note && (
                <p style={{ padding: '6px 14px', fontSize: 12, color: '#b45309' }}>{note}</p>
              )}
            </div>
          )}
          <button
            type="button"
            aria-label="Change language"
            onClick={() => setOpen((v) => !v)}
            style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              border: 'none',
              background: 'white',
              boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#1e3a8a',
            }}
          >
            <Globe size={18} />
          </button>
        </div>
      </div>
    </>
  )
}
