'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const WELCOME =
  'Hello, I am the OSARE Assistant, an AI assistant. I can help you find safaris, hotels and buses, explain resident rates, or point you to Request a Trip. What are you planning?'

const SUGGESTIONS = ['Find me a safari', 'What is a resident rate?', 'I need a bus to Kisumu']

const PAGES = ['/safari', '/local', '/guides', '/request-a-trip', '/about']

// Turns known page paths in a reply into clickable links.
function renderText(text) {
  const parts = text.split(/(\/[a-z-]+)/g)
  return parts.map((part, i) =>
    PAGES.includes(part) ? (
      <Link key={i} href={part} className="font-semibold text-[#1e3a8a] underline">
        {part}
      </Link>
    ) : (
      <span key={i}>{part}</span>
    )
  )
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([{ role: 'assistant', text: WELCOME }])
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const endRef = useRef(null)

  useEffect(() => {
    if (open && endRef.current) endRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open, busy])

  const send = async (raw) => {
    const text = (raw ?? input).trim()
    if (!text || busy) return
    const next = [...messages, { role: 'user', text }]
    setMessages(next)
    setInput('')
    setBusy(true)
    try {
      // The welcome line is not sent to the server, only the real conversation.
      const payload = next.slice(1).map((m) => ({ role: m.role, text: m.text }))
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: payload }),
      })
      const data = await res.json().catch(() => ({}))
      const reply =
        data.reply || data.error || 'The chat could not answer just now. Please use Request a Trip.'
      setMessages((m) => [...m, { role: 'assistant', text: reply }])
    } catch (e) {
      setMessages((m) => [
        ...m,
        { role: 'assistant', text: 'The chat could not answer just now. Please use Request a Trip.' },
      ])
    } finally {
      setBusy(false)
    }
  }

  return (
    <>
      {open ? (
        <div
          className="fixed bottom-20 right-4 z-50 flex h-[480px] max-h-[75vh] w-[min(92vw,380px)] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
          role="dialog"
          aria-label="OSARE Assistant chat"
        >
          <div className="flex items-center justify-between bg-[#1e3a8a] px-4 py-3 text-white">
            <div>
              <p className="text-sm font-bold">OSARE Assistant</p>
              <p className="text-[11px] text-blue-100">AI assistant. Partners confirm price and availability.</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-full px-2 text-xl leading-none text-white hover:bg-white/20"
            >
              &times;
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-slate-50 p-3">
            {messages.map((m, i) => (
              <div key={i} className={m.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
                <div
                  className={
                    m.role === 'user'
                      ? 'max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-br-sm bg-[#1e3a8a] px-3 py-2 text-sm text-white'
                      : 'max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-bl-sm bg-white px-3 py-2 text-sm text-slate-800 shadow-sm'
                  }
                >
                  {m.role === 'assistant' ? renderText(m.text) : m.text}
                </div>
              </div>
            ))}
            {messages.length === 1 ? (
              <div className="flex flex-wrap gap-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => send(s)}
                    className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-medium text-slate-700 hover:bg-slate-100"
                  >
                    {s}
                  </button>
                ))}
              </div>
            ) : null}
            {busy ? <p className="text-xs text-slate-500">Typing...</p> : null}
            <div ref={endRef} />
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              send()
            }}
            className="flex gap-2 border-t border-slate-200 bg-white p-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              maxLength={600}
              placeholder="Type your question"
              className="flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              className="rounded-lg bg-[#1e3a8a] px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        className="fixed bottom-4 right-4 z-50 rounded-full bg-[#1e3a8a] px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-[#1e3a8a]/90"
      >
        {open ? 'Close' : 'Chat with us'}
      </button>
    </>
  )
}
