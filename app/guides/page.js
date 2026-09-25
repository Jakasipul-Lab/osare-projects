import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: "East Africa Travel Guides — Visas, Safety, Costs, Wildlife & More | OSARE",
  description: "Free, practical travel guides for East Africa: visa requirements, health & safety, money & tipping, what to pack, and destination guides like Maasai Mara.",
  path: '/guides',
})

const GUIDES = [
  {
    href: '/guides/visa-entry-requirements',
    title: "Visa & Entry Requirements",
    blurb: "Which visa you need for Kenya, Tanzania and Uganda, and what to have ready at the border.",
    img: 'https://images.unsplash.com/photo-1454496406107-dc34337da8d6?q=80&w=800&auto=format&fit=crop',
  },
  {
    href: '/guides/health-safety',
    title: "Health & Safety",
    blurb: "Vaccinations, malaria prevention, and how to safely share the road with the Big Five.",
    img: 'https://images.unsplash.com/photo-1645817202565-ba62d937e744?q=80&w=800&auto=format&fit=crop',
  },
  {
    href: '/guides/money-costs-tipping',
    title: "Money, Costs & Tipping",
    blurb: "What currency to carry, typical costs, and how tipping really works on the ground.",
    img: 'https://images.unsplash.com/photo-1747774999070-ef45a60c9d00?q=80&w=800&auto=format&fit=crop',
  },
  {
    href: '/guides/packing-best-time',
    title: "What to Pack & Best Time to Visit",
    blurb: "A real packing list and a month-by-month guide to when East Africa is at its best.",
    img: 'https://images.unsplash.com/photo-1757777598981-2a589811168d?q=80&w=800&auto=format&fit=crop',
  },
  {
  href: '/guides/maasai-mara',
  title: "Maasai Mara Travel Guide",
  blurb: "When to go, how to get there, what to expect, and where to stay in Kenya's iconic Maasai Mara.",
  img: 'https://images.unsplash.com/photo-1745526180300-443ef46e6a73?q=80&w=800&auto=format&fit=crop',
},
{
  href: '/guides/kenya',
  title: "Kenya Travel Guide",
  blurb: "Safari destinations, transport, beaches and everything you need to plan a Kenya trip.",
  img: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?q=80&w=800&auto=format&fit=crop',
},
{
  href: '/guides/kenya/nairobi',
  title: "Nairobi Travel Guide",
  blurb: "Things to do, wildlife, safari day trips, food and transport in Kenya's capital.",
  img: 'https://images.unsplash.com/photo-1741991110666-88115e724741?q=80&w=800&auto=format&fit=crop',
},
{
  href: '/guides/tanzania',
  title: "Tanzania Travel Guide",
  blurb: "Safari, wildlife, Zanzibar, Kilimanjaro and travel information for Tanzania.",
  img: 'https://images.unsplash.com/photo-1519659528534-7fd733a832a0?q=80&w=800&auto=format&fit=crop',
},
{
  href: '/guides/tanzania/dar-es-salaam',
  title: "Dar es Salaam Travel Guide",
  blurb: "Beaches, culture, food and transport in Tanzania's largest city.",
  img: 'https://images.unsplash.com/photo-1568625502763-2a5ec6a94c47?q=80&w=800&auto=format&fit=crop',
},
{
  href: '/guides/uganda',
  title: "Uganda Travel Guide",
  blurb: "Safari, wildlife, gorilla trekking and practical travel information for Uganda.",
  img: 'https://images.unsplash.com/photo-1551357141-f73a8402ceb3?q=80&w=800&auto=format&fit=crop',
},
{
  href: '/guides/kampala',
  title: "Kampala Travel Guide",
  blurb: "Culture, food, markets, nightlife and transport in Uganda's capital city.",
  img: 'https://images.unsplash.com/photo-1675756261486-09bd1e0f6c8a?q=80&w=800&auto=format&fit=crop',
},
{
  href: '/guides/rwanda',
  title: "Rwanda Travel Guide",
  blurb: "Gorilla trekking, safari and wildlife — practical travel information for Rwanda.",
  img: 'https://images.unsplash.com/photo-1605559911928-e03606ea0dc0?q=80&w=800&auto=format&fit=crop',
},
{
  href: '/guides/botswana',
  title: "Botswana Travel Guide",
  blurb: "Okavango Delta safaris, wildlife, and practical travel information for Botswana.",
  img: 'https://images.unsplash.com/photo-1653900217156-77a588505248?q=80&w=800&auto=format&fit=crop',
},
{
  href: '/guides/zimbabwe',
  title: "Zimbabwe Travel Guide",
  blurb: "Victoria Falls, safari, wildlife and travel information for Zimbabwe.",
  img: 'https://images.unsplash.com/photo-1523027425231-692d4c697160?q=80&w=800&auto=format&fit=crop',
},
{
  href: '/guides/mozambique',
  title: "Mozambique Travel Guide",
  blurb: "Beaches, safari, wildlife and practical travel information for Mozambique.",
  img: 'https://images.unsplash.com/photo-1595761033910-f8993636082d?q=80&w=800&auto=format&fit=crop',
},
{
  href: '/guides/burundi',
  title: "Burundi Travel Guide",
  blurb: "Wildlife, Lake Tanganyika, and culture — practical travel information for Burundi.",
  img: 'https://images.unsplash.com/photo-1672787076496-ccb18a869605?q=80&w=800&auto=format&fit=crop',
},
]

export default function GuidesIndex() {
  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '60px 20px', fontFamily: 'sans-serif', color: '#1e293b' }}>
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <span style={{ display: 'inline-block', background: '#fff7ed', color: '#f97316', fontWeight: 700, fontSize: 13, padding: '6px 16px', borderRadius: 999 }}>
          FREE FOR TOURISTS
        </span>
        <h1 style={{ fontSize: 38, fontWeight: 900, marginTop: 16, lineHeight: 1.2 }}>
          East Africa Travel Guides
        </h1>
        <p style={{ color: '#64748b', fontSize: 18, marginTop: 12, maxWidth: 620, marginLeft: 'auto', marginRight: 'auto' }}>
          Practical, ground-level information for anyone planning a trip to Kenya, Tanzania or Uganda &mdash;
          written to actually be useful before and during your trip, not just before you book.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
        {GUIDES.map((g) => (
          <Link
            key={g.href}
            href={g.href}
            style={{ display: 'block', borderRadius: 16, overflow: 'hidden', border: '1px solid #e2e8f0', textDecoration: 'none', color: 'inherit' }}
          >
            <img src={g.img} alt={g.title} style={{ width: '100%', height: 170, objectFit: 'cover', display: 'block' }} />
            <div style={{ padding: 18 }}>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: '#1e3a8a' }}>{g.title}</h3>
              <p style={{ marginTop: 8, fontSize: 14, color: '#64748b', lineHeight: 1.6 }}>{g.blurb}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
