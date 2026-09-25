
import Script from 'next/script'
import "./globals.css"
import { Providers } from "./providers"
import CookieConsent from '@/components/CookieConsent'
import GoogleTranslate from '@/components/GoogleTranslate'
import { buildOrganizationSchema, buildWebsiteSchema } from '@/lib/seo'

export const metadata = {
  metadataBase: new URL('https://easafariroutes.com'),
  title: "OSARE — East Africa Safari Routes & Transit Hub",
  description: "Free information assistant & booking hub for tourists and locals across East Africa. Safaris, Kilimanjaro, hotels, car hire, flights & Nairobi transit.",
  alternates: {
    canonical: "https://easafariroutes.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==",
  },
  openGraph: {
    title: "OSARE — East Africa Safari Routes & Transit Hub",
    description: "Free, verified safaris, hotels, car hire & transit across East Africa.",
    url: "https://easafariroutes.com",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "OSARE — East Africa Safari Routes & Transit Hub",
    images: ["/og-image.png"],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{__html:'window.addEventListener("error",function(e){if(e.error instanceof DOMException&&e.error.name==="DataCloneError"&&e.message&&e.message.includes("PerformanceServerTiming")){e.stopImmediatePropagation();e.preventDefault()}},true);'}} />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5760405093106435"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildOrganizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildWebsiteSchema()) }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
        <CookieConsent />
      </body>
    </html>
  )
}
