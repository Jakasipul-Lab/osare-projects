import Link from 'next/link'

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 py-10 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#1e3a8a] to-[#f97316] text-sm font-black text-white">O</span>
            <span className="text-lg font-extrabold text-white">OSARE</span>
          </div>
          <p className="mt-3 text-sm text-slate-400">East Africa Safari Routes &amp; Transit Hub. Free information for tourists &amp; locals.</p>
        </div>
        <div>
          <h4 className="font-semibold text-white">Platform</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/how-it-works" className="hover:text-white">How It Works</Link></li>
            <li><Link href="/guides" className="hover:text-white">Travel Guides</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
          </ul>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-slate-500">&copy; {new Date().getFullYear()} OSARE — East Africa Safari Routes</p>
    </footer>
  )
}
