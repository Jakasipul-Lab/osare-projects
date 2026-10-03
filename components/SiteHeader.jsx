import Link from 'next/link'

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#1e3a8a] to-[#f97316] text-sm font-black text-white">O</span>
          <span className="text-lg font-extrabold text-[#1e3a8a]">OSARE</span>
        </Link>
        <nav className="flex flex-wrap items-center gap-1 text-sm font-medium text-slate-600">
          <Link href="/" className="rounded-lg px-3 py-2 transition hover:bg-slate-100">Home</Link>
          <Link href="/guides" className="rounded-lg px-3 py-2 transition hover:bg-slate-100">Guides</Link>
          <Link href="/blog" className="rounded-lg px-3 py-2 transition hover:bg-slate-100">Blog</Link>
          <Link href="/how-it-works" className="rounded-lg px-3 py-2 transition hover:bg-slate-100">How It Works</Link>
        </nav>
      </div>
    </header>
  )
}
