'use client'
import { useState } from 'react'
import { toast } from 'sonner'

function XIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}
function TikTokIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"/>
    </svg>
  )
}
function ThreadsIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.68 1.293 2.858 3.13 3.502 5.462l-2.4.664c-1.02-3.687-3.4-5.573-7.06-5.607-2.85.02-5.014.919-6.437 2.672-1.339 1.65-2.031 4.031-2.058 7.075.027 3.044.72 5.425 2.058 7.075 1.423 1.753 3.587 2.653 6.437 2.673 2.573-.018 4.293-.629 5.75-2.045 1.65-1.605 1.616-3.583 1.097-4.797-.307-.72-.865-1.32-1.618-1.756-.192 1.352-.628 2.437-1.302 3.24-.897 1.07-2.174 1.653-3.799 1.688-1.213.026-2.373-.264-3.271-.816-1.061-.652-1.68-1.633-1.742-2.762-.06-1.1.371-2.117 1.216-2.868.808-.72 1.965-1.136 3.348-1.204.996-.05 1.928.005 2.79.163-.114-.687-.35-1.24-.71-1.647-.5-.567-1.281-.857-2.324-.865h-.03c-.837 0-1.964.23-2.685 1.324l-2.038-1.383c.966-1.466 2.567-2.274 4.507-2.274h.038c3.288.023 5.246 2.032 5.44 5.53.11.05.22.1.327.155 1.526.78 2.643 1.965 3.229 3.428.813 2.03.888 5.338-1.86 7.995-1.876 1.816-4.15 2.635-7.373 2.658z"/>
    </svg>
  )
}

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
  { name: 'Kenya Branch Office', person: 'Kenneth Oketch', position: 'Kenya Branch Representative', photo: '/team/kenneth-oketch.jpg', responsibilities: 'Managing regional operations, enterprise onboarding, and local vendor relations within Kenya.', email: 'tourism@easafariroutes.com', phone: '+254 710 428 814' },
  { name: 'Uganda Branch Office', person: 'Lydia Awuor Abuya', position: 'Uganda Branch Representative', photo: '/team/lydia-abuya.jpg', responsibilities: 'Overseeing regional network expansion, enterprise support, and partnerships across Uganda.', email: 'tourism@easafariroutes.com', phone: '+254 713 131 351' },
  { name: 'Tanzania Branch Office', person: 'Johnson Yongo', position: 'Tanzania Branch Representative', photo: '/team/johnson-yongo.jpg', responsibilities: 'Directing local enterprise development, vendor coordination, and operations within Tanzania.', email: 'tourism@easafariroutes.com', phone: '+255 765 715 053' },
  { name: 'Germany Liaison Office', person: 'Brunnenstraße 48, 34537 Bad Wildungen', position: 'European Coordination', photo: '/logo.png', responsibilities: 'Germany Liaison Office & European Coordination.', email: 'germany@easafariroutes.com', phone: '', isLogo: true },
]

const MILESTONES = [
  { year: '2025', text: 'OSARE founded to simplify East African travel discovery' },
  { year: '2026', text: 'Platform launched with operator listings across Kenya, Tanzania, and Uganda' },
  { year: '2026', text: 'Listed 90+ tourism and transport operators' },
  { year: '2026', text: 'Introduced the OSARE Verified stamp for confirmed partners' },
  { year: 'Ongoing', text: 'Expanding across East Africa, one confirmed operator at a time' },
]

function initials(name) {
  return (name || '').replace(/^Ms\s|^Mr\s/i, '').split(' ').filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase()
}

function TeamCard({ person }) {
  const [imgError, setImgError] = useState(false)
  const showPhoto = person.photo && !imgError
  const content = (
    <div className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col justify-between">
      <div>
        <div className="flex items-start gap-4">
          {showPhoto ? (
            <img src={person.photo} alt={person.name || person.person} onError={() => setImgError(true)} className="h-24 w-24 shrink-0 rounded-full object-cover border-2 border-orange-500 shadow-md" />
          ) : (
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#1e3a8a] to-[#f97316] text-xl font-bold text-white shadow-md">
              {initials(person.name || person.person)}
            </div>
          )}
          <div>
            <h3 className="font-bold text-slate-900 text-lg">{person.name}</h3>
            {person.person && person.name !== person.person ? <p className="mt-0.5 font-semibold text-slate-800">{person.person}</p> : null}
            {person.position ? <p className="text-sm font-semibold text-[#f97316] mt-0.5">{person.position}</p> : null}
          </div>
        </div>
        {person.responsibilities ? <p className="mt-4 text-sm text-slate-600 leading-relaxed">{person.responsibilities}</p> : null}
      </div>
      <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
        {person.email ? <a href={`mailto:${person.email}`} className="flex items-center gap-2.5 text-sm text-slate-600 hover:text-[#1e3a8a]"><span className="truncate">{person.email}</span></a> : null}
        {person.phone && waLink(person.phone) ? <a href={waLink(person.phone)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-[#25d366] font-medium hover:text-[#1ebe5b]"><span>{person.phone}</span></a> : null}
      </div>
    </div>
  )
  return content
}

export default function AboutView() {
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
    <div>
      {/* HERO — leads with the real number */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1e3a8a] via-[#1e3a8a] to-[#f97316] px-5 py-24 text-center text-white">
        <div className="relative mx-auto max-w-4xl">
         <h1 className="text-4xl md:text-5xl font-black tracking-tight">Connecting Travelers to Tourism Operators Across East Africa</h1>
          <p className="mt-4 text-lg text-white/90">Kenya · Tanzania · Uganda</p>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-5 py-20">

        {/* MISSION & VISION */}
        <div>
          <h2 className="text-3xl font-black text-slate-900">Mission &amp; Vision</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="rounded-2xl bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] p-6 text-white shadow-md">
              <h3 className="font-bold text-lg">Mission</h3>
              <p className="mt-3 text-white/90">To help travellers find and enquire with tourism and transport operators in East Africa, with clear information about who they are dealing with.</p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-[#f97316] to-[#fb923c] p-6 text-white shadow-md">
              <h3 className="font-bold text-lg">Vision</h3>
              <p className="mt-3 text-white/90">To become East Africa&rsquo;s most trusted mobility and logistics platform.</p>
            </div>
          </div>
        </div>

        {/* FOUNDER */}
        <div className="mt-20 rounded-3xl bg-gradient-to-br from-[#1e3a8a]/5 to-[#f97316]/10 p-8 border border-[#1e3a8a]/10">
          <h2 className="text-3xl font-black text-slate-900">Founder &amp; Lead Developer</h2>
          <p className="mt-5 text-slate-600 leading-relaxed">Osare Nakinson founded OSARE to address regional transport fragmentation and create a digital gateway connecting transport, tourism and logistics services throughout East Africa.</p>
        </div>

        {/* HEAD OFFICE TEAM */}
        <div className="mt-20">
          <h2 className="text-3xl font-black text-slate-900">Kisumu Headquarters, Kenya</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {HEAD_OFFICE_TEAM.map((p, i) => <TeamCard key={i} person={p} />)}
          </div>
        </div>

        {/* BRANCHES */}
        <div className="mt-20">
          <h2 className="text-3xl font-black text-slate-900">Regional Branches</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {BRANCHES.map((b, i) => <TeamCard key={i} person={b} />)}
          </div>
        </div>

        {/* MILESTONES — real, specific */}
        <div className="mt-24">
          <h2 className="text-3xl font-black text-slate-900">Milestones</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {MILESTONES.map((m, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <span
