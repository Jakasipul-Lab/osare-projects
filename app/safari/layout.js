import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Safari Tours, Kilimanjaro Climbs & Hotels in East Africa | OSARE',
  description:
    'Compare safari tours, Kilimanjaro climbs, hotels and transport across Kenya, Tanzania and Uganda. Message operators directly on WhatsApp, free of charge.',
  path: '/safari',
})

export default function SafariLayout({ children }) {
  return children
}
