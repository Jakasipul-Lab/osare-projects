import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Local Transit | OSARE East Africa',
  description: 'Compare matatus, SGR trains, taxis, and airport transfers across Kenya, Tanzania, and Uganda.',
  path: '/local',
})

export default function LocalLayout({ children }) {
  return children
}
