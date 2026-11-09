'use client'

import { useEffect, useState } from 'react'

function fmt(d) {
  try {
    return new Date(d).toLocaleString('en-GB', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })
  } catch (e) {
    return ''
  }
}

const BADGE = {
  pending: 'bg-amber-500 text-white',
  approved: 'bg-emerald-600 text-white',
  hidden: 'bg-slate-500 text-white',
}

export default function AdminCommunityPage() {
  const [posts, setPosts] = useState(null)
  const [error, setError] = useState('')
  const [drafts, setDrafts] = useState({})
  const [busyId, setBusyId] = useState(null)

  async function load() {
    try {
      const r = await fetch('/api/admin/community', { cache: 'no-store' })
      const j = await r.json()
      if (!r.ok) throw new Error(j.error || 'Could not load')
      setPosts(j.posts)
    } catch (e) {
      setError(e.message)
    }
  }

  useEffect(() => {
    document.title = 'OSARE Community admin'
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex, nofollow'
    document.head.appendChild(meta)
    load()
    return () => meta.remove()
  }, [])

  async function act(id, action, reply) {
    setBusyId(id)
    try {
      const r = await fetch('/api/admin/community', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, action, reply }),
      })
      const j = await r.json().catch(() => ({}))
      if (!r.ok) throw new Error(j.error || 'Could not save')
      await load()
    } catch (e) {
      setError(e.message)
    } finally {
      setBusyId(null)
    }
  }

  if (error && !posts) {
    return (
      <main className="mx-auto min-h-screen max-w-3xl bg-blue-50 px-5 py-16">
        <h1 className="text-2xl font-extrabold text-slate-900">Community admin</h1>
        <p className="mt-4 rounded-lg border border-amber-300 bg-amber-50 p-4 text-slate-800">
          {error}. Log in to your OSARE admin area first, then open this page again.
        </p>
      </main>
    )
  }
  if (!posts) {
    return (
      <main className="mx-auto min-h-screen max-w-3xl bg-blue-50 px-5 py-16">
        <p className="text-slate-600">Loading...</p>
      </main>
    )
  }

  const pending = posts.filter((p) => p.status === 'pending').length

  return (
    <div className="min-h-screen bg-blue-50">
      <main className="mx-auto max-w-3xl space-y-5 px-5 py-10">
        <div className="rounded-2xl bg-blue-900 p-6 shadow-md">
          <h1 className="text-3xl font-extrabold text-white">Community admin</h1>
          <p className="mt-1 text-sm text-blue-100">
            {pending === 0 ? 'Nothing waiting for approval.' : `${pending} post${pending === 1 ? '' : 's'} waiting for approval.`}
          </p>
        </div>

        {error ? <p className="rounded-lg border border-red-300 bg-red-50 p-3 text-sm text-red-800">{error}</p> : null}

        {posts.length === 0 ? (
          <p className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-600">No posts yet.</p>
        ) : null}

        {posts.map((p) => (
          <article key={p.id} className="rounded-xl border border-slate-200 border-l-8 border-l-blue-600 bg-white p-5 shadow-md">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
              <span className={`rounded px-2 py-0.5 ${BADGE[p.status] || BADGE.hidden}`}>{p.status}</span>
              <span className="rounded bg-blue-900 px-2 py-0.5 text-white">{p.kind}</span>
              <span className="text-slate-900">{p.name}</span>
              {p.interest ? <span className="text-slate-500">· {p.interest}</span> : null}
              <span className="text-slate-400">· {fmt(p.created_at)}</span>
            </div>
            <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-slate-800">{p.message}</p>

            {p.reply ? (
              <p className="mt-3 rounded-lg border-l-4 border-emerald-600 bg-emerald-50 p-3 text-sm text-slate-800">
                <span className="block text-xs font-bold uppercase text-emerald-800">Your reply</span>
                {p.reply}
              </p>
            ) : null}

            <label className="mt-4 block text-sm text-slate-700">
              {p.reply ? 'Change your reply' : 'Write a reply (it also approves the post)'}
              <textarea
                rows={3}
                value={drafts[p.id] ?? ''}
                onChange={(e) => setDrafts({ ...drafts, [p.id]: e.target.value })}
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
              />
            </label>

            <div className="mt-3 flex flex-wrap gap-3">
              <button
                type="button"
                disabled={busyId === p.id || p.status === 'approved'}
                onClick={() => act(p.id, 'approve')}
                className="rounded-md bg-emerald-700 px-4 py-1.5 text-sm font-semibold text-white hover:bg-emerald-800 disabled:opacity-50"
              >
                Approve
              </button>
              <button
                type="button"
                disabled={busyId === p.id || !(drafts[p.id] || '').trim()}
                onClick={() => act(p.id, 'reply', drafts[p.id])}
                className="rounded-md bg-blue-700 px-4 py-1.5 text-sm font-semibold text-white hover:bg-blue-800 disabled:opacity-50"
              >
                Save reply
              </button>
              <button
                type="button"
                disabled={busyId === p.id || p.status === 'hidden'}
                onClick={() => act(p.id, 'hide')}
                className="rounded-md border border-slate-300 px-4 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-50"
              >
                Hide
              </button>
            </div>
          </article>
        ))}
      </main>
    </div>
  )
}
