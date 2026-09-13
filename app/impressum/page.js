export const metadata = {
  title: 'Impressum | OSARE',
  description: 'Legal notice for OSARE (easafariroutes.com) according to German law.',
}

export default function Impressum() {
  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '60px 20px', fontFamily: 'sans-serif', lineHeight: 1.7, color: '#1e293b' }}>
      <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Impressum</h1>
      <p style={{ color: '#64748b', marginBottom: 32 }}>Legal Notice — according to § 5 TMG (German Telemedia Act)</p>

      <p><strong>Nakinson Osare</strong></p>
      <p>Trading as: SafariRoutes EA (OSARE — East Africa Safari Routes)<br/>
      Website: easafariroutes.com</p>

      <h2 style={{ fontSize: 20, fontWeight: 800, marginTop: 32 }}>Business Registration</h2>
      <p>Business type: Kleingewerbe (small business) registered in Germany<br/>
      Registration: GK BW-26-01877</p>

      <h2 style={{ fontSize: 20, fontWeight: 800, marginTop: 32 }}>Registered Address (Germany)</h2>
      <p>Brunnenstraße 48<br/>
      34537 Bad Wildungen<br/>
      Germany</p>

      <h2 style={{ fontSize: 20, fontWeight: 800, marginTop: 32 }}>Operational Contact Address (Kenya)</h2>
      <p>Oginga Odinga Street, Plaza Building<br/>
      Kisumu 40100, Kenya</p>

      <h2 style={{ fontSize: 20, fontWeight: 800, marginTop: 32 }}>Contact</h2>
      <p>Email: <a href="mailto:info@easafariroutes.com" style={{ color: '#1e3a8a' }}>info@easafariroutes.com</a><br/>
      Phone: +254 758 378 729</p>

      <h2 style={{ fontSize: 20, fontWeight: 800, marginTop: 32 }}>Tax Identification</h2>
      <p>Steuer-IdNr.: 40 351 826 873</p>

      <h2 style={{ fontSize: 20, fontWeight: 800, marginTop: 32 }}>Responsible for Content (§ 55 Abs. 2 RStV)</h2>
      <p>Nakinson Osare<br/>
      Brunnenstraße 48, 34537 Bad Wildungen, Germany</p>
    </div>
  )
}
