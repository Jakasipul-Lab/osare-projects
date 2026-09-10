export const metadata = {
  title: 'Cookie Policy | OSARE',
  description: 'How OSARE (easafariroutes.com) uses cookies.',
}

export default function CookiePolicy() {
  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '60px 20px', fontFamily: 'sans-serif', lineHeight: 1.7, color: '#1e293b' }}>
      <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Cookie Policy</h1>
      <p style={{ color: '#64748b', marginBottom: 32 }}>Last updated: September 2026</p>

      <p>This page explains how OSARE (easafariroutes.com) uses cookies and similar technologies.</p>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 32 }}>What are cookies?</h2>
      <p>Cookies are small text files stored on your device when you visit a website. They help websites remember information about your visit.</p>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 32 }}>How we use cookies</h2>
      <p>OSARE uses cookies in the following ways:</p>
      <ul style={{ paddingLeft: 24 }}>
        <li><strong>Advertising (Google AdSense):</strong> We display ads through Google AdSense, which may set cookies to show ads relevant to you and measure ad performance. Google's use of advertising cookies is governed by Google's own policies.</li>
        <li><strong>Essential site function:</strong> Some data is stored temporarily in your browser (not a traditional cookie, but similar in purpose) to keep you logged in during an admin or vendor session. This is deleted when you close your browser.</li>
      </ul>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 32 }}>Third-party links</h2>
      <p>When you click "Book via WhatsApp" or a vendor's own website link, you leave easafariroutes.com and are subject to that third party's (WhatsApp, or the vendor's) own cookie and privacy practices, which we do not control.</p>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 32 }}>Managing cookies</h2>
      <p>Most browsers let you control or delete cookies through their settings. You can also opt out of personalized Google advertising at <a href="https://adssettings.google.com" style={{ color: '#1e3a8a' }}>adssettings.google.com</a>.</p>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 32 }}>Contact</h2>
      <p>Questions about this policy can be sent to <a href="mailto:info@easafariroutes.com" style={{ color: '#1e3a8a' }}>info@easafariroutes.com</a>.</p>
    </div>
  )
}
