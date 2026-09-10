export const metadata = {
  title: 'How It Works | OSARE',
  description: 'How OSARE connects travelers with verified tourism operators across East Africa.',
}

export default function HowItWorks() {
  return (
    <div style={{ maxWidth: 780, margin: '0 auto', padding: '60px 20px', fontFamily: 'sans-serif', lineHeight: 1.7, color: '#1e293b' }}>
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <span style={{ display: 'inline-block', background: '#fff7ed', color: '#f97316', fontWeight: 700, fontSize: 13, padding: '6px 16px', borderRadius: 999 }}>
          HOW IT WORKS
        </span>
        <h1 style={{ fontSize: 40, fontWeight: 900, marginTop: 16 }}>Simple, Direct, Free</h1>
        <p style={{ color: '#64748b', fontSize: 18, marginTop: 8 }}>
          OSARE connects travelers with verified tourism operators across East Africa — no middleman, no hidden fees.
        </p>
      </div>

      <h2 style={{ fontSize: 26, fontWeight: 900, marginTop: 48, color: '#1e3a8a' }}>For Travelers</h2>

      <div style={{ marginTop: 24 }}>
        <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
          <div style={{ width: 36, height: 36, borderRadius: 999, background: '#1e3a8a', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, flexShrink: 0 }}>1</div>
          <div>
            <h3 style={{ fontWeight: 800, fontSize: 17 }}>Search &amp; Compare</h3>
            <p style={{ color: '#475569' }}>Browse safaris, hotels, Kilimanjaro climbs, car hire, and local transit across Kenya, Tanzania, and Uganda — all in one place, completely free to search.</p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
          <div style={{ width: 36, height: 36, borderRadius: 999, background: '#1e3a8a', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, flexShrink: 0 }}>2</div>
          <div>
            <h3 style={{ fontWeight: 800, fontSize: 17 }}>Contact the Vendor Directly</h3>
            <p style={{ color: '#475569' }}>Found something you like? Click "Book via WhatsApp" to message the operator directly — no account, no sign-up required.</p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
          <div style={{ width: 36, height: 36, borderRadius: 999, background: '#1e3a8a', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, flexShrink: 0 }}>3</div>
          <div>
            <h3 style={{ fontWeight: 800, fontSize: 17 }}>Book &amp; Pay the Vendor Directly</h3>
            <p style={{ color: '#475569' }}>Your booking and payment happen directly with the operator — OSARE is never in the middle of your money. You always know exactly who you're paying.</p>
          </div>
        </div>
      </div>

      <div style={{ background: '#eff6ff', borderRadius: 16, padding: 20, marginTop: 16 }}>
        <p style={{ margin: 0, fontWeight: 600 }}>💡 Why is it free? OSARE earns a small commission from vendors when a booking happens — never from travelers.</p>
      </div>

      <h2 style={{ fontSize: 26, fontWeight: 900, marginTop: 56, color: '#f97316' }}>For Vendors</h2>

      <div style={{ marginTop: 24 }}>
        <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
          <div style={{ width: 36, height: 36, borderRadius: 999, background: '#f97316', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, flexShrink: 0 }}>1</div>
          <div>
            <h3 style={{ fontWeight: 800, fontSize: 17 }}>List for Free</h3>
            <p style={{ color: '#475569' }}>Create up to 2 listings at no cost. Add more by becoming a Partner — contact us to learn more.</p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
          <div style={{ width: 36, height: 36, borderRadius: 999, background: '#f97316', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, flexShrink: 0 }}>2</div>
          <div>
            <h3 style={{ fontWeight: 800, fontSize: 17 }}>Verify Your Phone</h3>
            <p style={{ color: '#475569' }}>Confirm your contact number via SMS to earn a "Verified" badge — building trust with travelers browsing your listing.</p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
          <div style={{ width: 36, height: 36, borderRadius: 999, background: '#f97316', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, flexShrink: 0 }}>3</div>
          <div>
            <h3 style={{ fontWeight: 800, fontSize: 17 }}>Get Discovered</h3>
            <p style={{ color: '#475569' }}>Travelers searching OSARE find your listing directly. They contact you via WhatsApp — no delay, no middleman reading your messages.</p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
          <div style={{ width: 36, height: 36, borderRadius: 999, background: '#f97316', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, flexShrink: 0 }}>4</div>
          <div>
            <h3 style={{ fontWeight: 800, fontSize: 17 }}>Pay a Simple 5% Commission</h3>
            <p style={{ color: '#475569' }}>Only pay when you get a booking — 5% of the transaction value. No monthly fees, no cost for listings that don't convert.</p>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: 56, paddingTop: 32, borderTop: '1px solid #e2e8f0' }}>
        <p style={{ color: '#64748b', marginBottom: 4 }}>Have questions?</p>
        <a href="mailto:info@easafariroutes.com" style={{ color: '#1e3a8a', fontWeight: 700 }}>info@easafariroutes.com</a>
      </div>
    </div>
  )
}
