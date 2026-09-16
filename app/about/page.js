import AboutView from '@/components/AboutView'
import { AdSense } from '@/components/AdSense'

export const metadata = {
  title: 'About Us | OSARE East Africa Safari Vendors',
  description: 'Meet the OSARE team and our regional branches across Kenya, Uganda, and Tanzania connecting travelers with trusted local safari vendors.',
  alternates: {
    canonical: 'https://easafariroutes.com/about',
  },
}

export default function AboutPage() {
  return (
    <>
      <AdSense />
      <AboutView />
    </>
  )
}
