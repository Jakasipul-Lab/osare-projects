import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Vendor Agreement | OSARE',
  description: 'Terms governing tourism operators and transport providers listed on OSARE.',
  path: '/vendor-agreement',
})
export default function VendorAgreement() {
  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '60px 20px', fontFamily: 'sans-serif', lineHeight: 1.7, color: '#1e293b' }}>
      <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Vendor Agreement</h1>
      <p style={{ color: '#64748b', marginBottom: 32 }}>
        Draft — pending review by legal counsel. Last updated: October 2026.
      </p>

      <p>This Vendor Agreement ("Agreement") governs the relationship between OSARE (easafariroutes.com, "OSARE," "we," "us") and any tourism operator, accommodation provider, or transport service ("Vendor," "you") that creates a listing on the platform.</p>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 32 }}>1. What OSARE Provides</h2>
      <p>OSARE is a directory platform that connects travelers with independent Vendors across East Africa. OSARE does not provide the underlying safari, transport, or accommodation services itself, and is not a party to any booking or transaction between a Vendor and a traveler.</p>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 32 }}>2. Listings and Free Tier</h2>
      <p>Vendors may create up to two (2) listings free of charge. Additional listings require upgrading to a Partner account, details of which are available by contacting OSARE directly. The terms of any upgrade will be given to you in writing before you agree to it, and nothing changes on your account until you accept them. OSARE reserves the right to adjust the free-tier limit with reasonable notice.</p>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 32 }}>3. Accuracy of Information</h2>
      <p>Vendors are solely responsible for the accuracy of information in their listings, including but not limited to pricing, photographs, services offered, and contact details. OSARE does not independently verify the accuracy of Vendor-submitted content beyond the phone verification process described below. If OSARE needs to change how a listing is displayed (for example, replacing a photo that will not load), we will let you know, and you may ask us at any time to update or correct your listing.</p>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 32 }}>4. Phone Verification</h2>
      <p>Vendors may be required to verify their contact phone number via SMS code before a listing is marked "Verified" on the platform. A listing may remain live without this verification, but will not display a Verified badge.</p>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 32 }}>5. Commission</h2>
      <p>OSARE charges a commission of 5% of the total booking value on bookings that come from enquiries sent through the platform. Each such enquiry carries an OSARE booking reference code, and commission applies only to bookings from enquiries that carry one. It does not apply to your existing or repeat customers. Payment terms and how to pay are set out in the <a href="/terms" style={{ color: '#1e3a8a' }}>Vendor Terms &amp; Commission Agreement</a>. Commission terms may be updated from time to time; Vendors will be notified of material changes.</p>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 32 }}>6. No Guarantee of Bookings</h2>
      <p>OSARE does not guarantee any specific volume of traveler inquiries, bookings, or revenue as a result of being listed on the platform.</p>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 32 }}>7. Removal of Listings</h2>
      <p>OSARE reserves the right to unpublish or remove any listing that is found to be inaccurate, misleading, fraudulent, or in violation of this Agreement. Except in cases of suspected fraud or misuse, we will tell you the reason and give you a reasonable chance to correct the listing first.</p>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 32 }}>8. Limitation of Liability</h2>
      <p>OSARE acts solely as a connecting platform. OSARE is not liable for the quality, safety, legality, or delivery of any service booked through a Vendor listing, nor for any dispute arising between a Vendor and a traveler.</p>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 32 }}>9. Termination</h2>
      <p>Either party may end this relationship at any time. OSARE may remove a Vendor's listings immediately in cases of suspected fraud or misuse; otherwise, reasonable notice will be given where practical.</p>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 32 }}>10. Changes to This Agreement</h2>
      <p>OSARE may update this Agreement periodically as the platform and business terms evolve. Continued use of the platform after changes constitutes acceptance of the updated terms.</p>

      <h2 style={{ fontSize: 22, fontWeight: 800, marginTop: 32 }}>Contact</h2>
      <p>Questions about this Agreement can be sent to <a href="mailto:info@easafariroutes.com" style={{ color: '#1e3a8a' }}>info@easafariroutes.com</a>.</p>
    </div>
  )
}
