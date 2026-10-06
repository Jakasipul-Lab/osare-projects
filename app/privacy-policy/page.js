import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Privacy Policy | OSARE',
  description: 'How OSARE (easafariroutes.com) collects and uses information.',
  path: '/privacy-policy',
})

export default function PrivacyPolicy() {
  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '60px 20px', fontFamily: 'sans-serif', lineHeight: 1.7, color: '#1e293b' }}>
      <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Privacy Policy</h1>
      <p style={{ color: '#64748b', marginBottom: 32 }}>
        Draft — pending review by legal counsel. Last updated: October 2026.
      </p>

      <p>This Privacy Policy explains what information OSARE (easafariroutes.com, "OSARE," "we") collects, how we use it, and the choices you have.</p>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 32 }}>1. Information We Collect</h2>
      <p><strong>From travelers browsing the site:</strong> We do not require an account to search or browse listings. When you tap "Enquire via WhatsApp" on a listing, we ask for your phone number (and, optionally, your name). We store them together with the listing you enquired about and a reference code, so we can confirm your enquiry with you and the Vendor and keep track of enquiries. The phone number and name are shared only with that Vendor. The conversation that follows happens directly on WhatsApp and is not seen or stored by OSARE.</p>
      <p><strong>From travelers who request a trip:</strong> If you use our "Request a Trip" form, we ask for your destination and WhatsApp number, and optionally your name, travel dates, number of travelers, budget and a short message. We store these with a reference code so our team can contact you on WhatsApp. To arrange your trip, we may share these details with a suitable Vendor, and we will tell you who we have shared them with.</p>
      <p><strong>From Vendors who register:</strong> When a business creates a Vendor account or listing, we collect information such as business name, phone number, email, location, and listing details (pricing, description, photos).</p>
      <p><strong>Automatically collected:</strong> Like most websites, our hosting and advertising providers may automatically collect standard technical information (such as browser type and general location) through cookies. See our <a href="/cookie-policy" style={{ color: '#1e3a8a' }}>Cookie Policy</a> for details.</p>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 32 }}>2. How We Use Information</h2>
      <ul style={{ paddingLeft: 24 }}>
        <li>To display Vendor listings to travelers searching the platform</li>
        <li>To pass a traveler's enquiry (phone number, optional name and the listing concerned) to the Vendor, and to follow up with the traveler about that enquiry</li>
        <li>To read a traveler's trip request (destination, dates, budget, optional name and WhatsApp number), contact the traveler, and, where suitable, introduce a Vendor</li>
        <li>To verify a Vendor's phone number via SMS before marking a listing as "Verified"</li>
        <li>To match enquiries to completed bookings and calculate commission owed, where applicable</li>
        <li>To respond to inquiries sent to our contact email</li>
        <li>To display relevant advertising through Google AdSense</li>
      </ul>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 32 }}>3. Payment Information</h2>
      <p>Where M-Pesa payments are processed on the platform, payment confirmation details (such as transaction receipt numbers and amounts) are received directly from Safaricom's M-Pesa system and stored to maintain accurate records. We do not store M-Pesa PINs or full financial account details.</p>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 32 }}>4. Sharing of Information</h2>
      <p>We do not sell personal information. A traveler's phone number and name are shared with the Vendor the traveler chose to enquire with, so the Vendor can respond. For trip requests, details are shared with a Vendor only to arrange the trip. Vendor contact details (such as phone numbers) are shown publicly on listings so that travelers can reach them directly — this is a core function of the platform. We may share information where required by law.</p>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 32 }}>5. Third-Party Services</h2>
      <p>We use third-party services including Google AdSense (advertising), Africa's Talking (SMS verification), Safaricom M-Pesa (payments), and Telegram (internal notifications to our team when a new enquiry or trip request arrives). Each of these providers has its own privacy practices governing the data they process on our behalf.</p>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 32 }}>6. Data Retention</h2>
      <p>We retain Vendor, enquiry and transaction information for as long as necessary to operate the platform and maintain accurate business records.</p>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 32 }}>7. Your Choices</h2>
      <p>Vendors may request that we update or remove their listing information by contacting us. Travelers may ask us to delete the phone number and name stored with an enquiry or a trip request by contacting us. You can control advertising cookies through your browser settings or at <a href="https://adssettings.google.com" style={{ color: '#1e3a8a' }}>adssettings.google.com</a>.</p>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 32 }}>8. Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time as the platform evolves. Material changes will be reflected on this page.</p>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 32 }}>9. Contact</h2>
      <p>Questions about this Privacy Policy can be sent to <a href="mailto:info@easafariroutes.com" style={{ color: '#1e3a8a' }}>info@easafariroutes.com</a>.</p>
    </div>
  )
}
