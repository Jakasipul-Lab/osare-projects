import Script from 'next/script'
import "./globals.css"
import { Providers } from "./providers"
export const metadata = {
  title: "OSARE — East Africa Safari Routes & Transit Hub",
  description: "Free information assistant & booking hub for tourists and locals across East Africa. Safaris, Kilimanjaro, hotels, car hire, flights & Nairobi transit.",
  icons: {
    icon: "data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==",
  },
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{__html:'window.addEventListener("error",function(e){if(e.error instanceof DOMException&&e.error.name==="DataCloneError"&&e.message&&e.message.includes("PerformanceServerTiming")){e.stopImmediatePropagation();e.preventDefault()}},true);'}} />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1492564155912705"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
