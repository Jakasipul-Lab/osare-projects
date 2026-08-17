'use client'
import { useState } from 'react'
import { toast } from 'sonner'
import { Mail, MessageCircle } from 'lucide-react'

function waLink(phone) {
  const digits = (phone || '').replace(/\D/g, '')
  return digits ? `https://wa.me/${digits}` : null
}

const HEAD_OFFICE_TEAM = [
  {
    name: 'Osare Nakinson',
    position: 'Chief Executive Officer',
    photo: '/team/osare-nakinson.jpg',
    responsibilities: 'Overall executive leadership, strategic direction, and corporate oversight.',
    email: 'info@easafariroutes.com',
    phone: '+254 758 378 729',
  },
  {
    name: "Ms Violet Achieng' Omollo",
    position: 'Personal & Office Administration',
    photo: '/team/violet-omollo.jpg',
    responsibilities: 'Personal & office administration.',
    email: 'personal@easafariroutes.com',
    phone: '+254 707 618 213',
  },
  {
    name: 'Ms Jacqueline Osare',
    position: 'Liaison & Logistics Officer',
    photo: '/team/jacqueline-osare.jpg',
    responsibilities: 'Coordinating corporate logistics, stakeholder relations, and operational liaison.',
    email: 'partnerships@easafariroutes.com',
    phone: '+255 715 818 408',
  },
]

const BRANCHES = [
  { name: 'Kenya Branch Office', person: 'Kenneth Oketch', role: 'Kenya Branch Representative', photo: '/team/kenneth-oketch.jpg', responsibilities: 'Managing regional operations, enterprise onboarding, and local vendor relations within Kenya.', email: 'tourism@easafariroutes.com', phone: '+254 710 428 814' },
  { name: 'Uganda Branch Office', person: 'Lydia Awuor Abuya', role: 'Uganda Branch Representative', photo: '/team/lydia-abuya.jpg', responsibilities: 'Overseeing regional network expansion, enterprise support, and partnerships across Uganda.', email: 'tourism@easafariroutes.com', phone: '+254 713 131 351' },
  { name: 'Tanzania Branch Office', person: 'Johnson Yongo', role: 'Tanzania Branch Representative', photo: '/team/johnson-yongo.jpg', responsibilities: 'Directing local enterprise development, vendor coordination, and operations within Tanzania.', email: 'tourism@easafariroutes.com', phone: '+255 765 715 053' },
  { name: 'Germany Liaison Office', person: 'Brunnenstraße 48', role: '34537 Bad Wildungen', responsibilities: '', email: 'germany@easafariroutes.com', phone: '' },
]

const MEDIA_TEAM = [
  {
    name: 'Winfrith Hikloch Ogola',
    position: 'Media & Communications Officer',
    photo: '/team/winfrith-ogola.jpg',
    responsibilities: 'Managing public relations, brand messaging, media inquiries, and corporate communications channels.',
    email: 'media@easafariroutes.com',
    phone: '+255 725 710 911',
  },
]

const CONTACT_DIRECTORY = [
  { label: 'General Inquiries', email: 'info@easafariroutes.com' },
  { label: 'Tourism & Vendor Relations', email: 'tourism@easafariroutes.com' },
  { label: 'Partnerships', email: 'partnerships@easafariroutes.com' },
  { label: 'Media & Press', email: 'media@easafariroutes.com' },
  { label: 'Investor Relations', email: 'investors@easafariroutes.com' },
  { label: 'Careers & Employment', email: 'careers@easafariroutes.com' },
]

const MILESTONES = [
  '2025 • OSARE Concept Development',
  '2026 • Platform Architecture Completed',
  '2026 • Kisumu Headquarters Established',
  '2027 • Regional Expansion Program',
  '2030 • Vision for East African Mobility Ecosystem',
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

function initials(name) {
  return name
    .replace(/^Ms\s|^Mr\s/i, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

function TeamCard({ person }) {
  return (
    <div className="rounded-2xl border p-6">
      <div className="flex items-start gap-4">
        {person.photo ? (
          <img
            src={person.photo}
            alt={person.name}
            className="h-14 w-14 shrink-0 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#1e3a8a] to-[#f97316] text-lg font-bold text-white">
            {initials(person.name)}
          </div>
        )}
        <div>
          <h3 className="font-bold text-slate-900">{person.name}</h3>
          {person.position ? <p className="text-sm font-semibold text-[#f97316]">{person.position}</p> : null}
        </div>
      </div>
      {person.responsibilities ? (
        <p className="mt-4 text-sm text-slate-600">{person.responsibilities}</p>
      ) : null}
      <div className="mt-4 space-y-1.5 border-t border-slate-100 pt-4">
        {person.email ? (
          <a href={`mailto:${person.email}`} className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700">
            <Mail className="h-3.5 w-3.5" /> {person.email}
          </a>
        ) : null}
        {person.phone && waLink(person.phone) ? (
          <a href={waLink(person.phone)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-[#25d366] font-medium hover:text-[#1ebe5b]">
            <MessageCircle className="h-3.5 w-3.5" /> {person.phone}
          </a>
        ) : null}
      </div>
    </div>
  )
}

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

      {/* KISUMU HEAD OFFICE TEAM */}
      <div className="mt-20">
        <h2 className="text-3xl font-black">Kisumu Headquarters, Kenya</h2>
        <p className="mt-2 text-slate-500">
          Headquarters responsible for strategic planning, operations, partnerships and regional coordination.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {HEAD_OFFICE_TEAM.map((p, i) => <TeamCard key={i} person={p} />)}
        </div>
      </div>

      {/* BRANCHES */}
      <div className="mt-20">
        <h2 className="text-3xl font-black">Regional Branches</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {BRANCHES.map((b, i) => (
            <div key={i} className="border rounded-3xl p-6">
              <div className="flex items-start gap-4">
                {b.photo ? (
                  <img src={b.photo} alt={b.person} className="h-14 w-14 shrink-0 rounded-full object-cover" />
                ) : null}
                <div>
                  <h3 className="font-bold">{b.name}</h3>
                  <p className="mt-1 font-semibold text-slate-900">{b.person}</p>
                  <p className="text-sm text-[#f97316] font-semibold">{b.role}</p>
                </div>
              </div>
              {b.responsibilities ? <p className="mt-3 text-sm text-slate-600">{b.responsibilities}</p> : null}
              <div className="mt-4 space-y-1.5 border-t border-slate-100 pt-4">
                {b.email ? (
                  <a href={`mailto:${b.email}`} className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700">
                    <Mail className="h-3.5 w-3.5" /> {b.email}
                  </a>
                ) : null}
                {b.phone && waLink(b.phone) ? (
                  <a href={waLink(b.phone)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-[#25d366] font-medium hover:text-[#1ebe5b]">
                    <MessageCircle className="h-3.5 w-3.5" /> {b.phone}
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MEDIA & COMMUNICATIONS */}
      <div className="mt-20">
        <h2 className="text-3xl font-black">Media &amp; Communications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {MEDIA_TEAM.map((p, i) => <TeamCard key={i} person={p} />)}
        </div>
      </div>

      {/* CORPORATE CONTACT DIRECTORY */}
      <div className="mt-20 rounded-3xl border p-8">
        <h2 className="text-2xl font-black">Corporate Contact Directory</h2>
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          {CONTACT_DIRECTORY.map((c, i) => (
            <div key={i} className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
              <span className="text-sm font-semibold text-slate-700">{c.label}</span>
              <a href={`mailto:${c.email}`} className="text-sm text-[#1e3a8a] hover:underline">{c.email}</a>
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

      {/* INVESTOR RELATIONS */}
      <div className="mt-24">
        <h2 className="text-3xl font-black">Investor Relations</h2>
        <p className="mt-5 text-slate-600">
          OSARE welcomes discussions with strategic investors,
          venture capital partners, angel investors and regional
          infrastructure stakeholders interested in East African mobility.
        </p>
        <p className="mt-4 font-medium">
          investors@easafariroutes.com
        </p>
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
