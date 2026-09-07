export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="text-3xl font-extrabold text-slate-900">
        OSARE Vendor Terms &amp; Commission Agreement
      </h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: {new Date().toLocaleDateString()}</p>
      <div className="mt-8 space-y-6 text-slate-700">
        <section>
          <h2 className="text-lg font-bold text-slate-900">1. What OSARE provides</h2>
          <p className="mt-2">OSARE (easafariroutes.com) lists your tours, transport, accommodation, or related travel services to tourists and locals across East Africa, free of charge to you. There is no listing fee, subscription, or upfront cost to join.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-slate-900">2. Commission on bookings</h2>
          <p className="mt-2">For every booking a traveller completes with you after being referred through OSARE, you agree to pay OSARE a commission of <strong>5% of the total booking value</strong>. This applies whether the booking is confirmed via WhatsApp, phone, email, or in person, as long as the traveller found you through OSARE.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-slate-900">3. Payment terms</h2>
          <p className="mt-2">Commission is due within <strong>48 hours</strong> of receiving payment from the traveller. Please quote your booking reference code when sending payment, so it can be matched to the correct booking. Payment details are provided in your vendor dashboard and in booking notification messages.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-slate-900">4. Accurate listings</h2>
          <p className="mt-2">You agree to keep your listing information — prices, availability, and contact details — accurate and up to date. Misleading listings may be removed.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-slate-900">5. Non-payment</h2>
          <p className="mt-2">Repeated failure to pay commissions owed may result in your listing being suspended or removed from OSARE without further notice.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-slate-900">6. Changes to these terms</h2>
          <p className="mt-2">OSARE may update these terms from time to time. Continued use of the platform after changes are posted means you accept the updated terms.</p>
        </section>
        <section>
          <h2 className="text-lg font-bold text-slate-900">7. Contact</h2>
          <p className="mt-2">Questions about these terms? Reach us via WhatsApp at +254 758 378 729 or through the contact details on our About page.</p>
        </section>
      </div>
    </div>
  )
}
