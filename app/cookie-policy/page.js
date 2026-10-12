import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Cookie Policy | OSARE',
  description: 'How OSARE (easafariroutes.com) uses cookies and similar technologies.',
  path: '/cookie-policy',
})

export default function CookiePolicy() {
  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '60px 20px', fontFamily: 'sans-serif', lineHeight: 1.7, color: '#1e293b' }}>
      <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Cookie Policy</h1>
      <p style={{ color: '#64748b', marginBottom: 32 }}>Last updated: October 2026</p>

      <p>This Cookie Policy explains how OSARE (easafariroutes.com) uses cookies and similar technologies when you visit our website.</p>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 32 }}>What are cookies?</h2>
      <p>Cookies are small text files stored on your device when you visit a website. They help websites remember information about your visit and improve your browsing experience.</p>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 32 }}>How we use cookies</h2>
      <p>OSARE uses cookies and similar technologies for the following purposes:</p>

      <h3 style={{ fontSize: 18, fontWeight: 700, marginTop: 20 }}>Advertising (Google AdSense)</h3>
      <p>We display advertisements through Google AdSense. Google and its partners may use cookies to show relevant advertisements, measure advertising performance, and improve user experience. Google's use of advertising cookies is governed by Google's own policies.</p>

      <h3 style={{ fontSize: 18, fontWeight: 700, marginTop: 20 }}>Essential Site Functions</h3>
      <p>Some information may be stored temporarily in your browser to support essential website functions, such as maintaining an administrator or vendor session. This information is deleted when your browser session ends.</p>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 32 }}>Third-Party Links</h2>
      <p>When you click "Enquire via WhatsApp" or visit a vendor's external website, you leave easafariroutes.com and become subject to that third party's privacy and cookie policies, which OSARE does not control.</p>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 32 }}>Managing Cookies</h2>
      <p>Most web browsers allow you to manage, block, or delete cookies through their settings.</p>
      <p>You can also manage Google's advertising preferences through: <a href="https://adssettings.google.com" style={{ color: '#1e3a8a' }}>Google Ad Settings</a></p>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 32 }}>Contact</h2>
      <p>If you have questions about this Cookie Policy, please contact: <a href="mailto:info@easafariroutes.com" style={{ color: '#1e3a8a' }}>info@easafariroutes.com</a></p>
    </div>
  )
}
