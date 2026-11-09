'use client'

import { useEffect, useState } from 'react'

const KIND_LABEL = { join: 'Joined', question: 'Question', review: 'Review' }
const KIND_STYLE = {
  join: 'bg-emerald-100 text-emerald-800',
  question: 'bg-blue-100 text-blue-800',
  review: 'bg-amber-100 text-amber-800',
}
const INTERESTS = ['Kilimanjaro', 'Kenya safari', 'Tanzania safari', 'Zanzibar and coast', 'Buses in East Africa', 'Something else']

function fmt(d) {
  try {
    return new Date(d).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
  } catch (e) {
    return ''
  }
}

export default function CommunityBoard() {
  const [posts, setPosts] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [kind, setKind] = useState('join')
  const [name, setName] = useState('')
  const [interest, setInterest] = useState(INTERESTS[0])
  const [message, setMessage] = useState('')
  const [website, setWebsite] = useState('')
  const [busy, setBusy] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('/api/community', { cache: 'no-store' })
      .then((r) => r.json())
      .then((j) => setPosts(Array.isArray(j.posts) ? j.posts : []))
      .catch(() => {})
      .finally(() => setLoaded(true))
  }, [])

  async function submit(e) {
    e.preventDefault()
    if (busy) return
    setBusy(true)
    setError('')
    try {
      const res = await fetch('/api/community', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ kind, name, interest, message, website }),
      })
      const j = await res.json().catch(() => ({}))
      if (!res.ok || !j.success) {
        setError(j.error || 'Could not send your post. Please try again.')
      } else {
        setDone(true)
        setName('')
        setMessage('')
      }
    } catch (err) {
      setError('Could not send your post. Please try again.')
    } finally {
      setBusy(false)
    }
  }

  const placeholder =
    kind === 'join'
      ? 'Tell us a little about the trip you are dreaming of'
      : kind === 'question'
      ? 'Write your question about East Africa travel'
      : 'Write your review of a trip you took'

  return (
    <div className="space-y-10">
      <section className="rounded-2xl border border-slate-200 border-t-4 border-t-emerald-600 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">Join the conversation</h2>
        <p className="mt-1 text-sm text-slate-600">
          Introduce yourself, ask a question or share a review. We read every post before it appears. We do not ask for your email or phone number here.
        </p>

        {done ? (
          <div className="mt-5 rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-900">
            Thank you. Your post was received and will appear here after we have read it.
            <button type="button" onClick={() => setDone(false)} className="ml-3 font-semibold underline">
              Write another
            </button>
          </div>
        ) : (
          <form onSubmit={submit} className="mt-5 space-y-4">
            <div className="flex flex-wrap gap-2">
              {['join', 'question', 'review'].map((k) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => setKind(k)}
                  className={`rounded-full border px-4 py-1.5 text-sm font-semibold ${
                    kind === k ? 'border-emerald-700 bg-emerald-700 text-white' : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {k === 'join' ? 'Say hello' : k === 'question' ? 'Ask a question' : 'Share a review'}
                </button>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-slate-700">
                Your first name
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={60}
                  required
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
                />
              </label>
              <label className="text-sm text-slate-700">
                What interests you most
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2"
                >
                  {INTERESTS.map((i) => (
                    <option key={i}>{i}</option>
                  ))}
                </select>
              </label>
            </div>

            <label className="block text-sm text-slate-700">
              Your message
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={1000}
                required
                rows={4}
                placeholder={placeholder}
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
              />
            </label>

            {/* Hidden field for bots. People never see or fill it. */}
            <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
              <label>
                Website
                <input tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
              </label>
            </div>

            {error ? <p className="text-sm font-semibold text-red-700">{error}</p> : null}

            <button
              type="submit"
              disabled={busy}
              className="rounded-full bg-emerald-700 px-6 py-2.5 text-sm font-bold text-white hover:bg-emerald-800 disabled:opacity-60"
            >
              {busy ? 'Sending...' : 'Send'}
            </button>
          </form>
        )}
      </section>

      <section>
        <h2 className="text-xl font-bold text-slate-900">Latest posts</h2>
        {!loaded ? (
          <p className="mt-3 text-sm text-slate-500">Loading...</p>
        ) : posts.length === 0 ? (
          <p className="mt-3 rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-600">
            No posts yet. Be the first to say hello.
          </p>
        ) : (
          <div className="mt-4 space-y-4">
            {posts.map((p) => (
              <article key={p.id} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                  <span className={`rounded px-2 py-0.5 ${KIND_STYLE[p.kind] || KIND_STYLE.question}`}>
                    {KIND_LABEL[p.kind] || 'Post'}
                  </span>
                  <span className="text-slate-900">{p.name}</span>
                  {p.interest ? <span className="text-slate-500">· {p.interest}</span> : null}
                  <span className="text-slate-400">· {fmt(p.created_at)}</span>
                </div>
                <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-slate-800">{p.message}</p>
                {p.reply ? (
                  <div className="mt-3 rounded-lg border-l-4 border-emerald-600 bg-emerald-50 p-3 text-sm text-slate-800">
                    <p className="text-xs font-bold uppercase tracking-wide text-emerald-800">Reply from OSARE</p>
                    <p className="mt-1 whitespace-pre-wrap leading-6">{p.reply}</p>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
