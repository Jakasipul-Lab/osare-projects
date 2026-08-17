
'use client'
import { useState } from 'react'
import { toast } from 'sonner'
import Link from 'next/link'
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
  { 
    name: 'Kenya Branch Office', 
    person: 'Kenneth Oketch', 
    position: 'Kenya Branch Representative', 
    photo: '/team/kenneth-oketch.jpg', 
    responsibilities: 'Managing regional operations, enterprise onboarding, and local vendor relations within Kenya.', 
    email: 'tourism@easafariroutes.com', 
    phone: '+254 710 428 814' 
  },
  { 
    name: 'Uganda Branch Office', 
    person: 'Lydia Awuor Abuya', 
    position: 'Uganda Branch Representative', 
    photo: '/team/lydia-abuya.jpg', 
    responsibilities: 'Overseeing regional network expansion, enterprise support, and partnerships across Uganda.', 
    email: 'tourism@easafariroutes.com', 
    phone: '+254 713 131 351' 
  },
  { 
    name: 'Tanzania Branch Office', 
    person: 'Johnson Yongo', 
    position: 'Tanzania Branch Representative', 
    photo: '/team/johnson-yongo.jpg', 
    responsibilities: 'Directing local enterprise development, vendor coordination, and operations within Tanzania.', 
    email: 'tourism@easafariroutes.com', 
    phone: '+255 765 715 053' 
  },
  { 
    name: 'Germany Liaison Office', 
    person: 'Brunnenstraße 48, 34537 Bad Wildungen', 
    position: 'European Coordination', 
    photo: '/logo.png', 
    responsibilities: 'Germany Liaison Office & European Coordination. Click to return to Home.', 
    email: 'germany@easafariroutes.com', 
    phone: '',
    isLogo: true 
  },
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
  return (name || '')
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

  const cardContent = (
    <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col justify-between">
      <div>
        <div className="flex items-start gap-4">
          {showPhoto ? (
            person.isLogo ? (
              <div className="h-24 w-24 shrink-0 rounded-2xl bg-white p-2 border border-slate-200 flex items-center justify-center shadow-sm hover:opacity-90 transition-opacity">
                <img src={person.photo} alt={person.name} onError={() => setImgError(true)} className="max-h-full max-w-full object-contain" />
              </div>
            ) : (
              <img
                src={person.photo}
                alt={person.name || person.person}
                onError={() => setImgError(true)}
                className="h-24 w-24 shrink-0 rounded-full object-cover border-2 border-orange-500 shadow-md"
              />
            )
          ) : (
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#1e3a8a] to-[#f97316] text-xl font-bold text-white shadow-md">
              {initials(person.name || person.person)}
            </div>
          )}
          <div>
            <h3 className="font-bold text-slate-900 text-lg">{person.name}</h3>
            {person.person && person.name !== person.person ? <p className="mt-0.5 font-semibold text-slate-800">{person.person}</p> : null}
            {person.position ? <p className="text-sm font-semibold text-[#f97316] mt-0.5">{person.position}</p> : null}
            {person.isLogo ? <p className="text-xs font-medium text-slate-500 mt-1">Click to return Home</p> : null}
          </div>
        </div>
        {person.responsibilities ? (
          <p className="mt-4 text-sm text-slate-600 leading-relaxed">{person.responsibilities}</p>
        ) : null}
      </div>
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

  if (person.isLogo) {
    return <Link href="/" className="block">{cardContent}</Link>
  }
  return cardContent
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
    <section className="mx-auto max-w-7xl px-5 py-16 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/50 space-y-16">

      {/* HERO */}
      <div className="text-center">
        <div className="inline-block mb-3 px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 font-semibold text-sm tracking-wide">
          East Africa Travel &amp; Logistics Ecosystem
        </div>
        <h1 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a8a] to-blue-600">OSARE</span>
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          OSARE connects travelers, transport operators, logistics providers and tourism
          services across East Africa through one unified digital ecosystem.
        </p>
      </div>

      {/* MISSION & VISION */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-3xl bg-gradient-to-br from-blue-900 to-[#1e3a8a] p-6 text-white shadow-lg">
          <h3 className="text-xl font-black text-orange-400">Our Mission</h3>
          <p className="mt-2 text-blue-100 text-base leading-relaxed">
            To simplify mobility and logistics across East Africa through
            technology-driven transport integration and travel accessibility.
          </p>
        </div>
        <div className="rounded-3xl bg-gradient-to-br from-orange-500 to-amber-600 p-6 text-white shadow-lg">
          <h3 className="text-xl font-black text-blue-950">Our Vision</h3>
          <p className="mt-2 text-orange-50 text-base leading-relaxed">
            To become East Africa&rsquo;s most trusted mobility and logistics platform.
          </p>
        </div>
      </div>

      {/* FOUNDER */}
      <div className="rounded-3xl bg-gradient-to-r from-blue-50 via-indigo-50/40 to-orange-50/50 p-6 lg:p-8 border border-blue-100 shadow-sm">
        <h2 className="text-2xl font-black text-slate-900">Founder &amp; Lead Developer</h2>
        <p className="mt-3 text-slate-700 text-base leading-relaxed">
          Osare Nakinson founded OSARE to address regional transport fragmentation
          and create a digital gateway connecting transport, tourism and logistics
          services throughout East Africa.
        </p>
      </div>

      {/* KISUMU HEAD OFFICE TEAM */}
      <div>
        <h2 className="text-2xl font-black text-slate-900">Kisumu Headquarters, Kenya</h2>
        <p className="mt-1 text-slate-600 text-sm">
          Headquarters responsible for strategic planning, operations, partnerships and regional coordination.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {HEAD_OFFICE_TEAM.map((p, i) => <TeamCard key={i} person={p} />)}
        </div>
      </div>

      {/* BRANCHES */}
      <div>
        <h2 className="text-2xl font-black text-slate-900">Regional Branches</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {BRANCHES.map((b, i) => <TeamCard key={i
