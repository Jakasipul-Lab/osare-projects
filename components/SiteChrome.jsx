'use client'
import { usePathname } from 'next/navigation'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

export default function SiteChrome({ children }) {
  const pathname = usePathname()
  if (pathname === '/') return children
  return (
    <>
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  )
}
