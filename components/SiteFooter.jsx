import Link from 'next/link'
import { Facebook, Linkedin, Youtube } from 'lucide-react'

function XIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}
function TikTokIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"/>
    </svg>
  )
}
function ThreadsIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.68 1.293 2.858 3.13 3.502 5.462l-2.4.664c-1.02-3.687-3.4-5.573-7.06-5.607-2.85.02-5.014.919-6.437 2.672-1.339 1.65-2.031 4.031-2.058 7.075.027 3.044.72 5.425 2.058 7.075 1.423 1.753 3.587 2.653 6.437 2.673 2.573-.018 4.293-.629 5.75-2.045 1.65-1.605 1.616-3.583 1.097-4.797-.307-.72-.865-1.32-1.618-1.756-.192 1.352-.628 2.437-1.302 3.24-.897 1.07-2.174 1.653-3.799 1.688-1.213.026-2.373-.264-3.271-.816-1.061-.652-1.68-1.633-1.742-2.762-.06-1.1.371-2.117 1.216-2.868.808-.72 1.965-1.136 3.348-1.204.996-.05 1.928.005 2.79.163-.114-.687-.35-1.24-.71-1.647-.5-.567-1.281-.857-2.324-.865h-.03c-.837 0-1.964.23-2.685 1.324l-2.038-1.383c.966-1.466 2.567-2.274 4.507-2.274h.038c3.288.023 5.246 2.032 5.44 5.53.11.05.22.1.327.155 1.526.78 2.643 1.965 3.229 3.428.813 2.03.888 5.338-1.86 7.995-1.876 1.816-4.15 2.635-7.373 2.658z"/>
    </svg>
  )
}

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
          <div className="mt-4 flex items-center gap-4">
            <a href="https://x.com/osaresson" target="_blank" rel="noopener noreferrer" aria-label="X" className="text-slate-400 hover:text-white"><XIcon className="h-5 w-5" /></a>
            <a href="https://www.facebook.com/profile.php?id=61593524609763" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-slate-400 hover:text-white"><Facebook className="h-5 w-5" /></a>
            <a href="https://www.linkedin.com/company/142404145/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-white"><Linkedin className="h-5 w-5" /></a>
            <a href="https://www.tiktok.com/@osaressonnakinsson" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-slate-400 hover:text-white"><TikTokIcon className="h-5 w-5" /></a>
            <a href="https://www.youtube.com/channel/UCuGcuNyF62nUqzJY7XVe65g" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-slate-400 hover:text-white"><Youtube className="h-5 w-5" /></a>
            <a href="https://www.threads.com/@nakinsonosareson" target="_blank" rel="noopener noreferrer" aria-label="Threads" className="text-slate-400 hover:text-white"><ThreadsIcon className="h-5 w-5" /></a>
          </div>
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
