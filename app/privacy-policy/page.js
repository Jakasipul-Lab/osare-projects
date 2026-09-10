export const metadata = {
  title: 'Privacy Policy | OSARE',
  description: 'How OSARE (easafariroutes.com) collects and uses information.',
}

export default function PrivacyPolicy() {
  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '60px 20px', fontFamily: 'sans-serif', lineHeight: 1.7, color: '#1e293b' }}>
      <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Privacy Policy</h1>
      <p style={{ color: '#64748b', marginBottom: 32 }}>
        Draft — pending review by legal counsel. Last updated: September 2026.
      </p>

      <p>This Privacy Policy explains what information OSARE (easafariroutes.com, "OSARE," "we") collects, how we use it, and the choices you have.</p>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 32 }}>1. Information We Collect</h2>
      <p><strong>From travelers browsing the site:</strong> We do not require an account to search or browse listings. If you contact a Vendor via "Book via WhatsApp," that conversation happens directly on WhatsApp and is not seen or stored by OSARE.</p>
      <p><strong>From Vendors who register:</strong> When a business creates a Vendor account or listing, we collect information such as business name, phone number, email, location, and listing details (pricing, description, photos).</p>
      <p><strong>Automatically collected:</strong> Like most websites, our hosting and advertising providers may automatically collect standard technical information (such as browser type and general location) through cookies. See our <a href="/cookie-policy" style={{ color: '#1e3a8a' }}>Cookie Policy</a> for details.</p>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 32 }}>2. How We Use Information</h2>
      <ul style={{ paddingLeft: 24 }}>
        <li>To display Vendor listings to travelers searching the platform</li>
        <li>To verify a Vendor's phone number via SMS before marking a listing as "Verified"</li>
        <li>To calculate commission owed on bookings, where applicable</li>
        <li>To respond to inquiries sent to our contact email</li>
        <li>To display relevant advertising through Google AdSense</li>
      </ul>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 32 }}>3. Payment Information</h2>
      <p>Where M-Pesa payments are processed on the platform, payment confirmation details (such as transaction receipt numbers and amounts) are received directly from Safaricom's M-Pesa system and stored to maintain accurate records. We do not store M-Pesa PINs or full financial account details.</p>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 32 }}>4. Sharing of Information</h2>
      <p>We do not sell personal information. Vendor contact details (such as phone numbers) are shown publicly on listings so that travelers can reach them directly — this is a core function of the platform. We may share information where required by law.</p>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 32 }}>5. Third-Party Services</h2>
      <p>We use third-party services including Google AdSense (advertising), Africa's Talking (SMS verification), and Safaricom M-Pesa (payments). Each of these providers has its own privacy practices governing the data they process on our behalf.</p>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 32 }}>6. Data Retention</h2>
      <p>We retain Vendor and transaction information for as long as necessary to operate the platform and maintain accurate business records.</p>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 32 }}>7. Your Choices</h2>
      <p>Vendors may request that we update or remove their listing information by contacting us. You can control advertising cookies through your browser settings or at <a href="https://adssettings.google.com" style={{ color: '#1e3a8a' }}>adssettings.google.com</a>.</p>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 32 }}>8. Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time as the platform evolves. Material changes will be reflected on this page.</p>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 32 }}>9. Contact</h2>
      <p>Questions about this Privacy Policy can be sent to <a href="mailto:info@easafariroutes.com" style={{ color: '#1e3a8a' }}>info@easafariroutes.com</a>.</p>
    </div>
  )
}
