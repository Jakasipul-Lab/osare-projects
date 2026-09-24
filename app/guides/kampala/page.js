import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Kampala Travel Guide — Uganda | OSARE',
  description:
    'Explore Kampala, Uganda with practical information about culture, food, markets, transport, accommodation and travel across East Africa.',
  path: '/guides/uganda/kampala',
})

const areas = [
  {
    icon: '🏙️',
    title: 'Central Kampala',
    text: 'The busy heart of the city with shops, businesses, markets and everyday urban life.',
  },
  {
    icon: '🌳',
    title: 'Kololo',
    text: 'A greener and quieter area with hotels, restaurants, residences and embassies.',
  },
  {
    icon: '☕',
    title: 'Kisementi',
    text: 'A popular area for restaurants, cafes, shopping and social activities.',
  },
  {
    icon: '🌅',
    title: 'Muyenga',
    text: 'A hillside area with restaurants, accommodation and views across Kampala.',
  },
  {
    icon: '🍽️',
    title: 'Ntinda',
    text: 'A lively area with businesses, restaurants, accommodation and local life.',
  },
  {
    icon: '🏢',
    title: 'Bugolobi',
    text: 'A modern commercial and residential area with restaurants and businesses.',
  },
]

const foods = [
  ['🍌', 'Matoke', 'A traditional Ugandan dish made from cooking bananas.'],
  ['🥜', 'Groundnut Sauce', 'A rich sauce commonly served with local dishes.'],
  ['🌯', 'Rolex', 'A popular street food made with chapati and eggs.'],
  ['🥩', 'Grilled Meat', 'Enjoy grilled meat and local barbecue-style dishes.'],
  ['🐟', 'Fish', 'Fish dishes are enjoyed in many parts of Uganda.'],
  ['☕', 'Ugandan Coffee', 'Uganda is well known for producing coffee.'],
]

const routes = [
  ['✈️', 'Kampala → Entebbe', 'Travel toward the international airport and Lake Victoria.'],
  ['🌊', 'Kampala → Jinja', 'Continue east toward Jinja and the River Nile.'],
  ['🇰🇪', 'Kampala → Nairobi', 'Connect Uganda with Kenya and its capital.'],
  ['🌊', 'Kampala → Mombasa', 'Continue toward Kenya and the Indian Ocean coast.'],
  ['🇷🇼', 'Kampala → Kigali', 'Travel south toward Rwanda and its capital.'],
  ['🇹🇿', 'Kampala → Tanzania', 'Continue your East African journey toward Tanzania.'],
]

export default function KampalaPage() {
  return (
    <main className="min-h-screen bg-[#f8faf7] text-slate-800">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#123d2a] via-[#176b3a] to-[#2f8f46] text-white">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-yellow-300/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-red-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">

          <div className="mb-6 flex flex-wrap gap-3 text-sm font-bold">
            <span className="rounded-full bg-white/15 px-4 py-2">
              🇺🇬 UGANDA
            </span>

            <span className="rounded-full bg-yellow-400 px-4 py-2 text-[#123d2a]">
              🌿 PEARL OF AFRICA
            </span>

            <span className="rounded-full bg-white/15 px-4 py-2">
              🌍 EAST AFRICA
            </span>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-100">
                Uganda's vibrant capital
              </p>

              <h1 className="mt-4 text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
                Kampala
                <span className="block text-yellow-300">
                  Travel Guide
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-green-50 sm:text-xl">
                Discover Uganda's energetic capital — a city of hills,
                markets, music, food, culture and connections across East
                Africa.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/search"
                  className="rounded-2xl bg-yellow-400 px-7 py-4 font-black text-[#123d2a] shadow-xl hover:bg-yellow-300"
                >
                  🔎 Search East Africa
                </Link>

                <Link
                  href="/guides"
                  className="rounded-2xl border border-white/40 bg-white/10 px-7 py-4 font-bold"
                >
                  🌍 Explore Travel Guides
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur">
              <div className="grid gap-4">

                <div className="rounded-2xl bg-white/10 p-5">
                  <div className="text-3xl">🌿</div>
                  <h3 className="mt-2 font-black">Green City</h3>
                  <p className="mt-1 text-sm text-green-50">
                    Hills, greenery and tropical surroundings.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5">
                  <div className="text-3xl">🎶</div>
                  <h3 className="mt-2 font-black">Culture & Music</h3>
                  <p className="mt-1 text
