'use client'
import { useState } from 'react'
import { toast } from 'sonner'

const BRANCHES = [
  { name: 'Kenya - Nairobi', person: 'Kenneth Oketch', role: 'Branch Manager', email: 'nairobi@osare.africa' },
  { name: 'Uganda - Kampala', person: 'Brian Omollo', role: 'Branch Manager', email: 'kampala@osare.africa' },
  { name: 'Tanzania - Dar es Salaam', person: 'Johnson Yongo', role: 'Branch Manager', email: 'dar@osare.africa' },
  { name: 'Germany Liaison Office', person: 'Brunnenstraße 48', role: '34537 Bad Wildungen', email: 'germany@osare.africa' },
]

const MILESTONES = [
  '2025 • OSARE Concept Development',
  '2026 • Platform Architecture Completed',
  '2026 • Kisumu Headquarters Established',
  '2027 • Regional Expansion Program',
  '2030 • Vision for East African Mobility Ecosystem',
]

const TESTIMONIALS = [
  'OSARE makes travel planning easier across East Africa.',
  'A promising platform for transport integration.',
  'Excellent visibility for tourism partners.',
]

const PRESS_RELEASES = [
  'OSARE Announces Regional Expansion Initiative',
  'New Transport Integration Partnerships Launched',
  'Digital Mobility Program Introduced in East Africa',
]

const MEDIA_KIT_ITEMS = [
  'Company Profile PDF',
  'Logo Package',
  'Founder Biography',
  'Brand Guidelines',
  'Press Materials',
]

const EVENTS = [
  'East Africa Mobility Summit',
  'OSARE Partner Forum',
  'Tourism Innovation Expo',
  'Annual Stakeholder Conference',
]

const FAQ = [
  { q: 'How can my company partner with OSARE?', a: 'Contact our partnerships team through the inquiry form.' },
  { q: 'Do transport operators qualify?', a: 'Yes. Bus, rail, tourism and logistics providers can apply.' },
]

const CAREERS = [
  'Software Developer',
  'Regional Operations Manager',
  'Tourism Partnerships Officer',
  'Logistics Coordinator',
]

const FUTURE_GOALS = [
  'Expand throughout East Africa',
  'AI-powered route planning',
  'Integrated booking ecosystem',
  'Regional logistics marketplace',
  'Cross-border travel solutions',
]

export default function AboutView() {
  // --- Newsletter ---
  const [email, setEmail] = useState('')
  const [subscribing, setSubscribing] = useState(false)

  const subscribe = async () => {
    if (!email.trim()) { toast.error('Please enter your email address'); return }
    setSubscribing(true)
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      if (!res.ok) throw new Error('Subscription failed')
      toast.success('Subscribed! Watch your inbox for updates.')
      setEmail('')
    } catch (e) {
      toast.error('Could not subscribe right now. Please try again later.')
    } finally {
      setSubscribing(false)
    }
  }

  // --- Feedback ---
  const [feedback, setFeedback] = useState('')
  const [sendingFeedback, setSendingFeedback] = useState(false)

  const sendFeedback = async () => {
    if (!feedback.trim()) { toast.error('Please write some feedback first'); return }
    setSendingFeedback(true)
    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: feedback })
      })
      if (!res.ok) throw new Error('Feedback failed')
      toast.success('Thanks for the feedback!')
      setFeedback('')
    } catch (e) {
      toast.error('Could not send feedback right now. Please try again later.')
    } finally {
      setSendingFeedback(false)
    }
  }

  // --- Contact form ---
  const [contact, setContact] = useState({ name: '', email: '', phone: '', message: '' })
  const [sendingContact, setSendingContact] = useState(false)
  const setContactField = (k, v) => setContact((c) => ({ ...c, [k]: v }))

  const sendContact = async () => {
    if (!contact.name.trim() || !contact.email.trim() || !contact.message.trim()) {
      toast.error('Please fill in your name, email, and message')
      return
    }
    setSendingContact(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contact)
      })
      if (!res.ok) throw new Error('Contact failed')
      toast.success('Message sent — we will get back to you soon.')
      setContact({ name: '', email: '', phone: '', message: '' })
    } catch (e) {
      toast.error('Could not send your message right now. Please try again later.')
    } finally {
      setSendingContact(false)
    }
  }

  return (
    <section className="mx-auto max-w-7xl px-5 py-24">

      {/* HERO */}
      <div className="text-center">
        <h1 className="text-5xl font-black text-slate-900">
          About OSARE
        </h1>
        <p className="mt-6 text-xl text-slate-600 max-w-4xl mx-auto">
          OSARE is a regional travel access, mobility and logistics platform
          connecting travelers, transport operators, logistics providers and tourism
          services across East Africa through one unified digital ecosystem.
        </p>
      </div>

      {/* MISSION & VISION */}
      <div className="mt-20">
        <h2 className="text-3xl font-black">Mission &amp; Vision</h2>
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div>
            <h3 className="font-bold text-xl">Mission</h3>
            <p className="mt-3 text-slate-600">
              To simplify mobility and logistics across East Africa through
              technology-driven transport integration and travel accessibility.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl">Vision</h3>
            <p className="mt-3 text-slate-600">
              To become East Africa&rsquo;s most trusted mobility and logistics platform.
            </p>
          </div>
        </div>
      </div>

      {/* FOUNDER */}
      <div className="mt-20 rounded-3xl bg-blue-50 p-8 border border-blue-100">
        <h2 className="text-3xl font-black">Founder &amp; Lead Developer</h2>
        <p className="mt-5 text-slate-600 leading-relaxed">
          Osare Nakinson founded OSARE to address regional transport fragmentation
          and create a digital gateway connecting transport, tourism and logistics
          services throughout East Africa.
        </p>
      </div>

      {/* HEADQUARTERS */}
      <div className="mt-20">
        <h2 className="text-3xl font-black">Headquarters</h2>
        <div className="mt-6 rounded-3xl border p-8">
          <h3 className="text-xl font-bold">
            Kisumu Headquarters, Kenya
          </h3>
          <p className="mt-3 text-slate-600">
            Officer-in-Charge: Mss Jacqueline Susan Nakinson
          </p>
          <p className="text-slate-600">
            Headquarters responsible for strategic planning, operations,
            partnerships and regional coordination.
          </p>
        </div>
      </div>

      {/* BRANCHES */}
      <div className="mt-20">
        <h2 className="text-3xl font-black">Regional Branches</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {BRANCHES.map((b, i) => (
            <div key={i} className="border rounded-3xl p-6">
              <h3 className="font-bold">{b.name}</h3>
              <p>{b.person}</p>
              <p>{b.role}</p>
              <p>{b.email}</p>
            </div>
          ))}
        </div>
      </div>

      {/* TIMELINE */}
      <div className="mt-24">
        <h2 className="text-3xl font-black">Milestones</h2>
        <div className="space-y-6 mt-8">
          {MILESTONES.map((m, i) => <div key={i}>{m}</div>)}
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="mt-24">
        <h2 className="text-3xl font-black">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="border rounded-3xl p-6">&ldquo;{t}&rdquo;</div>
          ))}
        </div>
      </div>

      {/* INVESTORS */}
      <div className="mt-24">
        <h2 className="text-3xl font-black">Investor Relations</h2>
        <p className="mt-5 text-slate-600">
          OSARE welcomes discussions with strategic investors,
          venture capital partners, angel investors and regional
          infrastructure stakeholders interested in East African mobility.
        </p>
        <p className="mt-4 font-medium">
          investors@osare.africa
        </p>
      </div>

      {/* PRESS RELEASES */}
      <div className="mt-24">
        <h2 className="text-3xl font-black">Press Releases</h2>
        <ul className="mt-6 space-y-4">
          {PRESS_RELEASES.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
      </div>

      {/* MEDIA KIT */}
      <div className="mt-24">
        <h2 className="text-3xl font-black">Media Kit</h2>
        <ul className="mt-6 space-y-2">
          {MEDIA_KIT_ITEMS.map((m, i) => <li key={i}>{m}</li>)}
        </ul>
        <button
          onClick={() => toast.info('Media kit download will be available soon.')}
          className="mt-6 px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        >
          Download Media Kit
        </button>
      </div>

      {/* BLOG */}
      <div className="mt-24">
        <h2 className="text-3xl font-black">
          Winfrith Hikloch Ogola Blog
        </h2>
        <p className="mt-5 text-slate-600">
          Articles covering mobility, transport innovation,
          tourism, logistics, technology and regional development.
        </p>
      </div>

      {/* EVENTS */}
      <div className="mt-24">
        <h2 className="text-3xl font-black">Upcoming Events</h2>
        <ul className="mt-6 space-y-4">
          {EVENTS.map((e, i) => <li key={i}>{e}</li>)}
        </ul>
      </div>

      {/* NEWSLETTER */}
      <div className="mt-24 border rounded-3xl p-8">
        <h2 className="text-3xl font-black">
          Newsletter Subscription
        </h2>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-6 w-full border rounded-xl p-4"
          placeholder="Enter your email address"
          type="email"
        />
        <button
          onClick={subscribe}
          disabled={subscribing}
          className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-60"
        >
          {subscribing ? 'Subscribing…' : 'Subscribe'}
        </button>
      </div>

      {/* FEEDBACK */}
      <div className="mt-24">
        <h2 className="text-3xl font-black">
          User Feedback
        </h2>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className="mt-6 w-full border rounded-xl p-4 h-40"
          placeholder="Tell us how we can improve..."
        />
        <button
          onClick={sendFeedback}
          disabled={sendingFeedback}
          className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-60"
        >
          {sendingFeedback ? 'Sending…' : 'Send Feedback'}
        </button>
      </div>

      {/* FAQ */}
      <div className="mt-24">
        <h2 className="text-3xl font-black">
          Partner FAQ
        </h2>
        <div className="space-y-6 mt-8">
          {FAQ.map((item, i) => (
            <div key={i}>
              <h3 className="font-bold">{item.q}</h3>
              <p className="text-slate-600">{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CAREERS */}
      <div className="mt-24">
        <h2 className="text-3xl font-black">
          Careers
        </h2>
        <div className="mt-8 space-y-4">
          {CAREERS.map((c, i) => <div key={i}>{c}</div>)}
        </div>
      </div>

      {/* FUTURE GOALS */}
      <div className="mt-24">
        <h2 className="text-3xl font-black">
          Future Goals
        </h2>
        <ul className="mt-6 space-y-3">
          {FUTURE_GOALS.map((g, i) => <li key={i}>{g}</li>)}
        </ul>
      </div>

      {/* CONTACT FORM */}
      <div className="mt-24 border rounded-3xl p-8">
        <h2 className="text-3xl font-black">
          Contact Us
        </h2>
        <div className="grid gap-4 mt-6">
          <input
            value={contact.name}
            onChange={(e) => setContactField('name', e.target.value)}
            className="border rounded-xl p-4"
            placeholder="Full Name"
          />
          <input
            value={contact.email}
            onChange={(e) => setContactField('email', e.target.value)}
            className="border rounded-xl p-4"
            placeholder="Email Address"
            type="email"
          />
          <input
            value={contact.phone}
            onChange={(e) => setContactField('phone', e.target.value)}
            className="border rounded-xl p-4"
            placeholder="Phone Number"
          />
          <textarea
            value={contact.message}
            onChange={(e) => setContactField('message', e.target.value)}
            className="border rounded-xl p-4 h-40"
            placeholder="Message"
          />
        </div>
        <button
          onClick={sendContact}
          disabled={sendingContact}
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-60"
        >
          {sendingContact ? 'Sending…' : 'Send Inquiry'}
        </button>
      </div>

    </section>
  )
}
