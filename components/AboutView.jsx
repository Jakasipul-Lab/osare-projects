'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { 
  Building, MapPin, Mail, Phone, Calendar, Award, 
  Send, Newspaper, Download, BookOpen, Users, 
  HelpCircle, Briefcase, Target, ArrowRight, MessageSquare 
} from 'lucide-react'

const BRANCHES = [
  { name: 'Kenya - Nairobi', person: 'Kenneth Oketch', role: 'Branch Manager', email: 'nairobi@osare.africa' },
  { name: 'Uganda - Kampala', person: 'Brian Omollo', role: 'Branch Manager', email: 'kampala@osare.africa' },
  { name: 'Tanzania - Dar es Salaam', person: 'Johnson Yongo', role: 'Branch Manager', email: 'dar@osare.africa' },
  { name: 'Germany Liaison Office', person: 'Brunnenstraße 48', role: '34537 Bad Wildungen', email: 'germany@osare.africa' },
]

const MILESTONES = [
  { year: '2025', text: 'OSARE Concept Development' },
  { year: '2026', text: 'Platform Architecture Completed' },
  { year: '2026', text: 'Kisumu Headquarters Established' },
  { year: '2027', text: 'Regional Expansion Program' },
  { year: '2030', text: 'Vision for East African Mobility Ecosystem' },
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
  { q: 'How can my company partner with OSARE?', a: 'Contact our partnerships team through the inquiry form below.' },
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
  const setContactField = (k: string, v: string) => setContact((c) => ({ ...c, [k]: v }))

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
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-24 text-slate-100">

      {/* HERO */}
      <div className="text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase">
          Unified Digital Ecosystem
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
          About OSARE
        </h1>
        <p className="text-lg sm:text-xl text-slate-400 leading-relaxed">
          OSARE is a regional travel access, mobility and logistics platform
          connecting travelers, transport operators, logistics providers and tourism
          services across East Africa through one unified digital ecosystem.
        </p>
      </div>

      {/* MISSION & VISION */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden group hover:border-blue-500/50 transition">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition" />
          <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
            <Target className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">Our Mission</h2>
          <p className="text-slate-400 leading-relaxed">
            To simplify mobility and logistics across East Africa through
            technology-driven transport integration and travel accessibility.
          </p>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden group hover:border-emerald-500/50 transition">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition" />
          <div className="w-12 h-12 rounded-2xl bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
            <Award className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">Our Vision</h2>
          <p className="text-slate-400 leading-relaxed">
            To become East Africa&rsquo;s most trusted mobility and logistics platform.
          </p>
        </div>
      </div>

      {/* FOUNDER */}
      <div className="rounded-3xl bg-gradient-to-br from-blue-950/40 via-slate-900/80 to-slate-900 p-8 sm:p-12 border border-blue-900/40 relative shadow-2xl">
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-semibold tracking-wider text-blue-400 uppercase">Leadership</div>
          <h2 className="text-3xl font-black text-white">Founder &amp; Lead Developer</h2>
          <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
            Osare Nakinson founded OSARE to address regional transport fragmentation
            and create a digital gateway connecting transport, tourism and logistics
            services throughout East Africa.
          </p>
        </div>
      </div>

      {/* HEADQUARTERS */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-blue-400">
            <Building className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-black text-white">Headquarters</h2>
        </div>
        <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-8 backdrop-blur-xl space-y-4">
          <h3 className="text-2xl font-bold text-white">Kisumu Headquarters, Kenya</h3>
          <p className="text-slate-300 font-medium flex items-center gap-2">
            <span className="text-blue-400">Officer-in-Charge:</span> Mss Jacqueline Susan Nakinson
          </p>
          <p className="text-slate-400 leading-relaxed max-w-3xl">
            Headquarters responsible for strategic planning, operations,
            partnerships and regional coordination.
          </p>
        </div>
      </div>

      {/* BRANCHES */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-blue-400">
            <MapPin className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-black text-white">Regional Branches</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRANCHES.map((b, i) => (
            <div key={i} className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl flex flex-col justify-between hover:border-slate-700 transition">
              <div className="space-y-3">
                <h3 className="font-bold text-lg text-white">{b.name}</h3>
                <div className="space-y-1 text-sm text-slate-400">
                  <p className="font-medium text-slate-200">{b.person}</p>
                  <p className="text-xs text-blue-400">{b.role}</p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs text-slate-500 flex items-center gap-2 truncate">
                <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="truncate">{b.email}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TIMELINE */}
      <div>
        <h2 className="text-3xl font-black text-white mb-8">Milestones</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {MILESTONES.map((m, i) => (
            <div key={i} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-xl space-y-2">
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                {m.year}
              </span>
              <p className="text-sm text-slate-300 font-medium pt-2">{m.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div>
        <h2 className="text-3xl font-black text-white mb-8">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl flex items-center">
              <p className="text-slate-300 italic text-sm">&ldquo;{t}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>

      {/* INVESTORS */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl">
        <h2 className="text-3xl font-black text-white mb-4">Investor Relations</h2>
        <p className="text-slate-400 max-w-3xl leading-relaxed">
          OSARE welcomes discussions with strategic investors,
          venture capital partners, angel investors and regional
          infrastructure stakeholders interested in East African mobility.
        </p>
        <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-blue-400 text-sm font-medium">
          <Mail className="w-4 h-4" /> investors@osare.africa
        </div>
      </div>

      {/* PRESS RELEASES & MEDIA KIT */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl">
          <div className="flex items-center gap-3 mb-6">
            <Newspaper className="w-6 h-6 text-blue-400" />
            <h2 className="text-2xl font-bold text-white">Press Releases</h2>
          </div>
          <ul className="space-y-4">
            {PRESS_RELEASES.map((p, i) => (
              <li key={i} className="text-slate-300 text-sm flex items-center justify-between p-3 rounded-xl bg-slate-950/40 border border-slate-800/60">
                <span>{p}</span>
                <ArrowRight className="w-4 h-4 text-slate-500 shrink-0" />
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Download className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">Media Kit</h2>
            </div>
            <ul className="space-y-2 mb-6">
              {MEDIA_KIT_ITEMS.map((m, i) => (
                <li key={i} className="text-slate-400 text-sm py-1 border-b border-slate-800/40 last:border-0">
                  • {m}
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={() => toast.info('Media kit download will be available soon.')}
            className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition shadow-lg shadow-blue-600/20 cursor-pointer"
          >
            Download Media Kit
          </button>
        </div>
      </div>

      {/* BLOG & EVENTS */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-blue-400" />
            <h2 className="text-2xl font-bold text-white">Winfrith Hikloch Ogola Blog</h2>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Articles covering mobility, transport innovation,
            tourism, logistics, technology and regional development.
          </p>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-6 h-6 text-blue-400" />
            <h2 className="text-2xl font-bold text-white">Upcoming Events</h2>
          </div>
          <ul className="space-y-3">
            {EVENTS.map((e, i) => (
              <li key={i} className="text-slate-300 text-sm py-2 border-b border-slate-800/40 last:border-0">
                {e}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* NEWSLETTER & FEEDBACK */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Newsletter Subscription</h2>
            <p className="text-slate-400 text-sm mb-6">Stay updated with our latest regional expansions and tech releases.</p>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition"
              placeholder="Enter your email address"
              type="email"
            />
          </div>
          <button
            onClick={subscribe}
            disabled={subscribing}
            className="mt-6 w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium text-sm transition disabled:opacity-60 cursor-pointer"
          >
            {subscribing ? 'Subscribing…' : 'Subscribe'}
          </button>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">User Feedback</h2>
            <p className="text-slate-400 text-sm mb-6">Help us improve the OSARE ecosystem.</p>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition h-28 resize-none"
              placeholder="Tell us how we can improve..."
            />
          </div>
          <button
            onClick={sendFeedback}
            disabled={sendingFeedback}
            className="mt-6 w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium text-sm transition disabled:opacity-60 cursor-pointer"
          >
            {sendingFeedback ? 'Sending…' : 'Send Feedback'}
          </button>
        </div>
      </div>

      {/* FAQ & CAREERS & FUTURE GOALS */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* FAQ */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl">
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="w-5 h-5 text-blue-400" />
            <h2 className="text-xl font-bold text-white">Partner FAQ</h2>
          </div>
          <div className="space-y-4">
            {FAQ.map((item, i) => (
              <div key={i} className="space-y-1">
                <h3 className="font-semibold text-sm text-slate-200">{item.q}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CAREERS */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-5 h-5 text-blue-400" />
            <h2 className="text-xl font-bold text-white">Careers</h2>
          </div>
          <div className="space-y-2">
            {CAREERS.map((c, i) => (
              <div key={i} className="text-sm text-slate-300 py-2 px-3 rounded-xl bg-slate-950/40 border border-slate-800/60">
                {c}
              </div>
            ))}
          </div>
        </div>

        {/* FUTURE GOALS */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-5 h-5 text-blue-400" />
            <h2 className="text-xl font-bold text-white">Future Goals</h2>
          </div>
          <ul className="space-y-2">
            {FUTURE_GOALS.map((g, i) => (
              <li key={i} className="text-xs text-slate-300 py-1.5 border-b border-slate-800/40 last:border-0 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> {g}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CONTACT FORM */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 sm:p-12 backdrop-blur-xl max-w-3xl mx-auto w-full">
        <h2 className="text-3xl font-black text-white mb-2">Contact Us</h2>
        <p className="text-slate-400 text-sm mb-8">Reach out to our teams for partnerships, inquiries, or support.</p>
        
        <div className="grid gap-4">
          <input
            value={contact.name}
            onChange={(e) => setContactField('name', e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition"
            placeholder="Full Name"
          />
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              value={contact.email}
              onChange={(e) => setContactField('email', e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition"
              placeholder="Email Address"
              type="email"
            />
            <input
              value={contact.phone}
              onChange={(e) => setContactField('phone', e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition"
              placeholder="Phone Number"
            />
          </div>
          <textarea
            value={contact.message}
            onChange={(e) => setContactField('message', e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition h-36 resize-none"
            placeholder="Message"
          />
        </div>
        <button
          onClick={sendContact}
          disabled={sendingContact}
          className="mt-6 w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium text-sm transition disabled:opacity-60 shadow-lg shadow-blue-600/20 cursor-pointer"
        >
          {sendingContact ? 'Sending…' : 'Send Inquiry'}
        </button>
      </div>

    </section>
  )
}
