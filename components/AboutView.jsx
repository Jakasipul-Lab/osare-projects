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
    name: 'Jacqueline Susan Nakinson',
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
  { name: 'Germany Liaison Office', person: 'Brunnenstraße 48', role: '34537 Bad Wildungen', photo: '', responsibilities: 'Germany Liaison Office & European Coordination', email: 'germany@easafariroutes.com', phone: '' },
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
  { year: '2025', text: 'OSARE Concept Development' },
  { year: '2026', text: 'Platform Architecture Completed' },
  { year: '2026', text: 'Kisumu Headquarters Established' },
  { year: '2027', text: 'Regional Expansion Program' },
  { year: '2030', text: 'Vision for East African Mobility Ecosystem' },
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
  const [imgError, setImgError] = useState(false)
  const showPhoto = person.photo && !imgError

  return (
    <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        {showPhoto ? (
          <img
            src={person.photo}
            alt={person.name}
            onError={() => setImgError(true)}
            className="h-16 w-16 shrink-0 rounded-full object-cover border-2 border-orange-500 shadow"
          />
        ) : (
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#1e3a8a] to-[#f97316] text-base font-bold text-white shadow">
            {initials(person.name)}
          </div>
        )}
        <div>
          <h3 className="font-bold text-slate-900 text-lg">{person.name}</h3>
          {person.position ? <p className="text-sm font-semibold text-[#f97316] mt-0.5">{person.position}</p> : null}
        </div>
      </div>
      {person.responsibilities ? (
        <p className="mt-4 text-sm text-slate-600 leading-relaxed">{person.responsibilities}</p>
      ) : null}
      <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
        {person.email ? (
          <a href={`mailto:${person.email}`} className="flex items-center gap-2.5 text-sm text-slate-600 hover:text-[#1e3a8a] transition-colors">
            <div className="p-1.5 rounded-lg bg-blue-50 text-[#1e3a8a]"><Mail className="h-4 w-4" /></div>
            <span className="truncate">{person.email}</span>
          </a>
        ) : null}
        {person.phone && waLink(person.phone) ? (
          <a href={waLink(person.phone)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-[#25d366] font-medium hover:text-[#1ebe5b] transition-colors">
            <div className="p-1.5 rounded-lg bg-emerald-50 text-[#25d366]"><MessageCircle className="h-4 w-4" /></div>
            <span>{person.phone}</span>
          </a>
        ) : null}
      </div>
    </div>
  )
}

export default function AboutView() {
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
    <section className="mx-auto max-w-7xl px-5 py-24 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/50">

      {/* HERO */}
      <div className="text-center">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 font-semibold text-sm tracking-wide">
          East Africa Travel &amp; Logistics Ecosystem
        </div>
        <h1 className="text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a8a] to-blue-600">OSARE</span>
        </h1>
        <p className="mt-6 text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
          OSARE is a regional travel access, mobility and logistics platform
          connecting travelers, transport operators, logistics providers and tourism
          services across East Africa through one unified digital ecosystem.
        </p>
      </div>

      {/* MISSION & VISION */}
      <div className="mt-20 grid md:grid-cols-2 gap-8">
        <div className="rounded-3xl bg-gradient-to-br from-blue-900 to-[#1e3a8a] p-8 text-white shadow-xl">
          <h3 className="text-2xl font-black text-orange-400">Our Mission</h3>
          <p className="mt-4 text-blue-100 text-lg leading-relaxed">
            To simplify mobility and logistics across East Africa through
            technology-driven transport integration and travel accessibility.
          </p>
        </div>
        <div className="rounded-3xl bg-gradient-to-br from-orange-500 to-amber-600 p-8 text-white shadow-xl">
          <h3 className="text-2xl font-black text-blue-950">Our Vision</h3>
          <p className="mt-4 text-orange-50 text-lg leading-relaxed">
            To become East Africa&rsquo;s most trusted mobility and logistics platform.
          </p>
        </div>
      </div>

      {/* FOUNDER */}
      <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-50 via-indigo-50/40 to-orange-50/50 p-8 lg:p-10 border border-blue-100 shadow-sm">
        <h2 className="text-3xl font-black text-slate-900">Founder &amp; Lead Developer</h2>
        <p className="mt-4 text-slate-700 text-lg leading-relaxed">
          Osare Nakinson founded OSARE to address regional transport fragmentation
          and create a digital gateway connecting transport, tourism and logistics
          services throughout East Africa.
        </p>
      </div>

      {/* KISUMU HEAD OFFICE TEAM */}
      <div className="mt-20">
        <h2 className="text-3xl font-black text-slate-900">Kisumu Headquarters, Kenya</h2>
        <p className="mt-2 text-slate-600 text-base">
          Headquarters responsible for strategic planning, operations, partnerships and regional coordination.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {HEAD_OFFICE_TEAM.map((p, i) => <TeamCard key={i} person={p} />)}
        </div>
      </div>

      {/* BRANCHES */}
      <div className="mt-20">
        <h2 className="text-3xl font-black text-slate-900">Regional Branches</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {BRANCHES.map((b, i) => {
            const [bImgErr, setBImgErr] = useState(false)
            const showBPhoto = b.photo && !bImgErr
            return (
              <div key={i} className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  {showBPhoto ? (
                    <img src={b.photo} alt={b.person} onError={() => setBImgErr(true)} className="h-16 w-16 shrink-0 rounded-full object-cover border-2 border-orange-500 shadow" />
                  ) : b.person ? (
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#1e3a8a] to-[#f97316] text-base font-bold text-white shadow">
                      {initials(b.person)}
                    </div>
                  ) : null}
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">{b.name}</h3>
                    {b.person ? <p className="mt-1 font-semibold text-slate-800">{b.person}</p> : null}
                    <p className="text-sm text-[#f97316] font-semibold">{b.role}</p>
                  </div>
                </div>
                {b.responsibilities ? <p className="mt-4 text-sm text-slate-600 leading-relaxed">{b.responsibilities}</p> : null}
                <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                  {b.email ? (
                    <a href={`mailto:${b.email}`} className="flex items-center gap-2.5 text-sm text-slate-600 hover:text-[#1e3a8a] transition-colors">
                      <div className="p-1.5 rounded-lg bg-blue-50 text-[#1e3a8a]"><Mail className="h-4 w-4" /></div>
                      <span className="truncate">{b.email}</span>
                    </a>
                  ) : null}
                  {b.phone && waLink(b.phone) ? (
                    <a href={waLink(b.phone)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-[#25d366] font-medium hover:text-[#1ebe5b] transition-colors">
                      <div className="p-1.5 rounded-lg bg-emerald-50 text-[#25d366]"><MessageCircle className="h-4 w-4" /></div>
                      <span>{b.phone}</span>
                    </a>
                  ) : null}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* MEDIA & COMMUNICATIONS */}
      <div className="mt-20">
        <h2 className="text-3xl font-black text-slate-900">Media &amp; Communications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {MEDIA_TEAM.map((p, i) => <TeamCard key={i} person={p} />)}
        </div>
      </div>

      {/* CORPORATE CONTACT DIRECTORY */}
      <div className="mt-20 rounded-3xl bg-white border border-slate-200/80 p-8 shadow-sm">
        <h2 className="text-2xl font-black text-slate-900">Corporate Contact Directory</h2>
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          {CONTACT_DIRECTORY.map((c, i) => (
            <div key={i} className="flex items-center justify-between rounded-2xl bg-slate-50 px-5 py-4 border border-slate-100">
              <span className="text-sm font-semibold text-slate-700">{c.label}</span>
              <a href={`mailto:${c.email}`} className="text-sm font-medium text-[#1e3a8a] hover:underline">{c.email}</a>
            </div>
          ))}
        </div>
      </div>

      {/* TIMELINE */}
      <div className="mt-24">
        <h2 className="text-3xl font-black text-slate-900">Milestones</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {MILESTONES.map((m, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <span className="text-orange-600 font-bold text-lg">{m.year}</span>
              <p className="mt-2 text-slate-700 font-medium">{m.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* INVESTOR RELATIONS */}
      <div className="mt-24 rounded-3xl bg-gradient-to-r from-slate-900 to-blue-950 p-8 lg:p-10 text-white shadow-lg">
        <h2 className="text-3xl font-black text-white">Investor Relations</h2>
        <p className="mt-4 text-slate-300 max-w-3xl leading-relaxed">
          OSARE welcomes discussions with strategic investors,
          venture capital partners, angel investors and regional
          infrastructure stakeholders interested in East African mobility.
        </p>
        <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 text-orange-400 font-semibold">
          <Mail className="h-4 w-4" /> investors@easafariroutes.com
        </div>
      </div>

      {/* NEWSLETTER */}
      <div className="mt-24 border border-slate-200 bg-white rounded-3xl p-8 shadow-sm">
        <h2 className="text-3xl font-black text-slate-900">
          Newsletter Subscription
        </h2>
        <p className="mt-2 text-slate-600">Stay updated with our latest releases and regional expansion news.</p>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-6 w-full border border-slate-200 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
          placeholder="Enter your email address"
          type="email"
        />
        <button
          onClick={subscribe}
          disabled={subscribing}
          className="mt-4 px-8 py-3 bg-[#1e3a8a] text-white font-semibold rounded-2xl hover:bg-blue-900 transition-colors disabled:opacity-60 shadow"
        >
          {subscribing ? 'Subscribing…' : 'Subscribe'}
        </button>
      </div>

      {/* FEEDBACK */}
      <div className="mt-24">
        <h2 className="text-3xl font-black text-slate-900">
          User Feedback
        </h2>
        <p className="mt-2 text-slate-600">We value your input to improve our services across East Africa.</p>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className="mt-6 w-full border border-slate-200 rounded-2xl p-4 h-40 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
          placeholder="Tell us how we can improve..."
        />
        <button
          onClick={sendFeedback}
          disabled={sendingFeedback}
          className="mt-4 px-8 py-3 bg-[#f97316] text-white font-semibold rounded-2xl hover:bg-orange-600 transition-colors disabled:opacity-60 shadow"
        >
          {sendingFeedback ? 'Sending…' : 'Send Feedback'}
        </button>
      </div>

      {/* CAREERS */}
      <div className="mt-24">
        <h2 className="text-3xl font-black text-slate-900">
          Careers
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {CAREERS.map((c, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm font-semibold text-slate-800">
              {c}
            </div>
          ))}
        </div>
      </div>

      {/* FUTURE GOALS */}
      <div className="mt-24">
        <h2 className="text-3xl font-black text-slate-900">
          Future Goals
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {FUTURE_GOALS.map((g, i) => (
            <div key={i} className="p-5 rounded-2xl bg-orange-50/60 border border-orange-100 text-slate-800 font-medium flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500 shrink-0"></span>
              {g}
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT FORM */}
      <div className="mt-24 border border-slate-200 bg-white rounded-3xl p-8 shadow-sm">
        <h2 className="text-3xl font-black text-slate-900">
          Contact Us
        </h2>
        <p className="mt-2 text-slate-600">Reach out directly to our team for any inquiries.</p>
        <div className="grid gap-4 mt-6">
          <input
            value={contact.name}
            onChange={(e) => setContactField('name', e.target.value)}
            className="border border-slate-200 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
            placeholder="Full Name"
          />
          <input
            value={contact.email}
            onChange={(e) => setContactField('email', e.target.value)}
            className="border border-slate-200 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
            placeholder="Email Address"
            type="email"
          />
          <input
            value={contact.phone}
            onChange={(e) => setContactField('phone', e.target.value)}
            className="border border-slate-200 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
            placeholder="Phone Number"
          />
          <textarea
            value={contact.message}
            onChange={(e) => setContactField('message', e.target.value)}
            className="border border-slate-200 rounded-2xl p-4 h-40 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
            placeholder="Message"
          />
        </div>
        <button
          onClick={sendContact}
          disabled={sendingContact}
          className="mt-6 px-8 py-3 bg-[#1e3a8a] text-white font-semibold rounded-2xl hover:bg-blue-900 transition-colors disabled:opacity-60 shadow"
        >
          {sendingContact ? 'Sending…' : 'Send Inquiry'}
        </button>
      </div>

    </section>
  )
}
