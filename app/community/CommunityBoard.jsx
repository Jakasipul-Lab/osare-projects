import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import CommunityBoard from './CommunityBoard'

export const metadata = buildMetadata({
  title: 'OSARE Travelers: questions, reviews and trip ideas for East Africa',
  description:
    'A small community for travelers to East Africa. Say hello, ask a question about Kilimanjaro, safaris or buses, or share a review of a trip you took.',
  path: '/community',
})

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <header className="bg-gradient-to-br from-emerald-900 via-green-800 to-teal-700 px-6 py-14 text-white">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-300">OSARE Travelers</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">Travelers to East Africa, in one place</h1>
          <p className="mt-5 text-lg leading-8 text-green-50">
            Ask a question about Kilimanjaro, safaris or buses. Share what you learned on a trip. Every post is read by us before it appears.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/safari" className="rounded-full bg-amber-400 px-5 py-2.5 text-sm font-bold text-slate-900 hover:bg-amber-300">
              Browse safaris
            </Link>
            <Link href="/request-a-trip" className="rounded-full border border-white/40 px-5 py-2.5 text-sm font-bold text-white hover:bg-white/10">
              Request a trip
            </Link>
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-3xl px-6 py-10">
        <CommunityBoard />
      </div>
    </main>
  )
}
