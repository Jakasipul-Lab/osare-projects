'use client'
import { useState } from 'react'
import { toast } from 'sonner'
import Image from 'next/image'
import { Building2, Award, Mail, Phone, MapPin, Send, CheckCircle2, Globe, Briefcase } from 'lucide-react'

const CORE_EDITORIAL_COMMITMENT = "Committed to transforming transportation and tourism across East Africa through innovation and technology, while enhancing connectivity, driving economic growth, and creating sustainable opportunities for communities, travelers, and businesses across the region."

const BRANCHES = [
  { 
    name: 'Kenya - Nairobi Branch', 
    person: 'Kenneth Oketch', 
    role: 'Branch Manager', 
    email: 'kenneth@easafariroutes.com',
    phone: '+254 (0) 20 222 3333',
    address: 'Jubilee Insurance Building, Kaunda Street, Nairobi'
  },
  { 
    name: 'Uganda - Kampala', 
    person: 'Brian Omollo', 
    role: 'Branch Manager', 
    email: 'kampala@easafariroutes.com',
    phone: '+256 (0) 41 434 5555',
    address: 'Kampala Road, Kampala, Uganda'
  },
  { 
    name: 'Tanzania - Dar es Salaam', 
    person: 'Johnson Yongo', 
    role: 'Branch Manager', 
    email: 'dar@easafariroutes.com',
    phone: '+255 (0) 22 211 7777',
    address: 'Samora Avenue, Dar es Salaam, Tanzania'
  },
  { 
    name: 'Germany Liaison Office', 
    person: 'Osare Leadership', 
    role: 'European Technical & Strategic Office', 
    email: 'germany@easafariroutes.com',
    phone: '+49 (0) 5621 12345',
    address: 'Brunnenstraße 48, 34537 Bad Wildungen, Germany'
  },
]

const MILESTONES = [
  '2025 • OSARE Concept Development & Foundation',
  '2026 • Platform Architecture Completed & Live Deployment',
  '2026 • Kisumu Headquarters Established as Operational Core',
  '2027 • Regional Expansion Program across East Africa',
  '2030 • Unified East African Mobility Ecosystem Vision',
]

const CAREERS = [
  'Senior Full-Stack Engineers (Next.js, FastAPI, Node.js)',
  'Regional Logistics & Transport Integration Specialists',
  'UI/UX Designers focused on African Transit Systems',
]

const FUTURE_GOALS = [
  'Complete digital integration of cross-border transit corridors in East Africa.',
  'Deploy real-time fleet analytics and tracking modules for regional operators.',
  'Scale localized support hubs across major East African transport knots.',
]

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
      toast.success('Thanks for your feedback!')
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
      toast.error('Please fill in all required fields (Name, Email, Message)')
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
      toast.success('Inquiry sent successfully!')
      setContact({ name: '', email: '', phone: '', message: '' })
    } catch (e) {
      toast.error('Failed to send inquiry. Please try again.')
    } finally {
      setSendingContact(false)
    }
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 text-slate-800 space-y-20">
      
      {/* HERO / INTRO HEADER */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold tracking-wide uppercase border border-blue-400/30">
            <Globe className="w-3.5 h-3.5" /> East African Mobility Ecosystem
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">About OSARE</h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            OSARE (EA SafariRoutes) is pioneering digital transport integration across East Africa. We connect travelers, transport operators, and logistics networks into a single, seamless platform designed for efficiency, transparency, and regional growth.
          </p>
          <div className="pt-4 border-t border-white/10 mt-6">
            <p className="text-slate-200 text-sm italic leading-relaxed font-medium">
              &ldquo;{CORE_EDITORIAL_COMMITMENT}&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* MISSION & VISION */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
          <h3 className="font-bold text-xl text-slate-900">Mission</h3>
          <p className="mt-3 text-slate-600 leading-relaxed">
            To simplify mobility and logistics across East Africa through technology-driven transport integration and travel accessibility.
          </p>
        </div>
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
          <h3 className="font-bold text-xl text-slate-900">Vision</h3>
          <p className="mt-3 text-slate-600 leading-relaxed">
            To become East Africa&rsquo;s most trusted mobility and logistics platform.
          </p>
        </div>
      </div>

      {/* FOUNDER & CEO PROFILE */}
      <div className="grid md:grid-cols-3 gap-8 items-center bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
        <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-lg bg-slate-900 border border-slate-300">
          <Image
            src="/ceo.jpg"
            alt="Osare Nakinson - Chief Executive Officer"
            fill
            className="object-cover object-top filter contrast-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
            <div className="text-white w-full">
              <p className="font-bold text-sm tracking-wide uppercase text-blue-300">Founder & CEO</p>
              <p className="text-xs text-slate-300">Osare Nakinson</p>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 space-y-5">
          <div className="inline-flex items-center gap-1.5 text-blue-600 text-xs font-bold uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            <Award className="w-4 h-4" /> Executive Leadership & Vision
          </div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Guiding the Future of East African Transit</h2>
          <p className="text-slate-600 leading-relaxed text-base">
            Osare Nakinson founded OSARE to address regional transport fragmentation and create a digital gateway connecting transport, tourism, and logistics services throughout East Africa. Under this leadership, OSARE drives technological innovation and robust infrastructure management across our regional and international offices.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <p className="text-2xl font-black text-slate-900">EA-Wide</p>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Corridor Coverage</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <p className="text-2xl font-black text-slate-900">24/7</p>
              <p className="text-xs text-slate-500 font-medium mt-0.5">System Availability</p>
            </div>
          </div>
        </div>
      </div>

      {/* HEADQUARTERS & REGIONAL BRANCHES */}
      <div>
        <div className="space-y-2 mb-8">
          <h2 className="text-3xl font-black text-slate-900">Headquarters & Regional Branches</h2>
          <p className="text-slate-500 text-sm">Our primary command center in Kisumu, alongside operational nodes across East Africa and Europe.</p>
        </div>
        
        {/* KISUMU HEADQUARTERS FEATURED CARD */}
        <div className="mb-6 bg-gradient-to-r from-blue-900 to-slate-900 text-white rounded-2xl p-8 shadow-md border border-blue-500/30 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold tracking-wide uppercase border border-blue-400/30">
              Global HQ
            </div>
            <h3 className="text-2xl font-black">Kisumu Headquarters, Kenya</h3>
            <p className="text-slate-300 text-sm">Officer-in-Charge: Mss Jacqueline Susan</p>
            <p className="text-slate-300 text-sm max-w-xl">
              Headquarters responsible for strategic planning, operations, partnerships, and regional coordination.
            </p>
          </div>
          <div className="space-y-2 text-sm bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10 shrink-0 w-full md:w-auto">
            <div className="flex items-center gap-2 text-slate-200">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Oginga Odinga Street, Kisumu</span>
            </div>
            <div className="flex items-center gap-2 text-slate-200">
              <Mail className="w-4 h-4 text-blue-400 shrink-0" />
              <span>hq@easafariroutes.com</span>
            </div>
            <div className="flex items-center gap-2 text-slate-200">
              <Phone className="w-4 h-4 text-blue-400 shrink-0" />
              <span>+254 (0) 57 202 0000</span>
            </div>
          </div>
        </div>

        {/* OTHER BRANCHES */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRANCHES.map((b, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-slate-900">{b.name}</h3>
                <p className="text-sm font-semibold text-slate-700">{b.person}</p>
                <p className="text-xs text-slate-500">{b.role}</p>
                <div className="flex items-start gap-2 text-xs text-slate-600 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
                  <span>{b.address}</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                <div className="flex items-center gap-2 text-xs text-blue-600 font-medium">
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{b.email}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                  <Phone className="w-3.5 h-3.5 shrink-0" />
                  <span>{b.phone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MILESTONES */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-xl">
        <h2 className="text-3xl font-black tracking-tight mb-8">Key Milestones</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {MILESTONES.map((m, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm space-y-2">
              <CheckCircle2 className="w-6 h-6 text-blue-400 mb-4" />
              <p className="font-semibold text-slate-100">{m}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CAREERS & FUTURE GOALS */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
          <div className="flex items-center gap-2 text-blue-600 mb-4 font-bold text-sm uppercase tracking-wider">
            <Briefcase className="w-4 h-4" /> Careers & Growth
          </div>
          <h2 className="text-2xl font-black text-slate-900 mb-6">Open Positions</h2>
          <ul className="space-y-3">
            {CAREERS.map((c, i) => (
              <li key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-sm font-medium text-slate-700 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
          <div className="flex items-center gap-2 text-blue-600 mb-4 font-bold text-sm uppercase tracking-wider">
            <Globe className="w-4 h-4" /> Roadmap
          </div>
          <h2 className="text-2xl font-black text-slate-900 mb-6">Future Goals</h2>
          <ul className="space-y-3">
            {FUTURE_GOALS.map((g, i) => (
              <li key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-sm font-medium text-slate-700 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green-600" />
                {g}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* INVESTOR RELATIONS */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
        <h2 className="text-3xl font-black text-slate-900">Investor Relations</h2>
        <p className="mt-4 text-slate-600 max-w-3xl leading-relaxed">
          OSARE welcomes discussions with strategic investors, venture capital partners, angel investors, and regional infrastructure stakeholders interested in East African mobility.
        </p>
        <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 text-blue-700 font-semibold text-sm border border-blue-100">
          <Mail className="w-4 h-4" /> investors@easafariroutes.com
        </div>
      </div>

      {/* NEWSLETTER */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
        <h2 className="text-3xl font-black text-slate-900">Newsletter Subscription</h2>
        <p className="text-slate-500 mt-2 text-sm">Stay updated with our latest releases and regional expansion announcements.</p>
        <div className="mt-6 max-w-xl space-y-4">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-slate-200 rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
            placeholder="Enter your email address"
            type="email"
          />
          <button
            onClick={subscribe}
            disabled={subscribing}
            className="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-60 shadow-md shadow-blue-600/20"
          >
            {subscribing ? 'Subscribing…' : 'Subscribe'}
          </button>
        </div>
      </div>

      {/* FEEDBACK */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
        <h2 className="text-3xl font-black text-slate-900">User Feedback</h2>
        <p className="text-slate-500 mt-2 text-sm">Help us improve our platform features and travel experience.</p>
        <div className="mt-6 max-w-2xl space-y-4">
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="w-full border border-slate-200 rounded-xl p-4 h-40 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
            placeholder="Tell us how we can improve..."
          />
          <button
            onClick={sendFeedback}
            disabled={sendingFeedback}
            className="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-60 shadow-md shadow-blue-600/20"
          >
            {sendingFeedback ? 'Sending…' : 'Send Feedback'}
          </button>
        </div>
      </div>

      {/* CONTACT FORM */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-black text-slate-900">Contact Us</h2>
          <p className="text-slate-500 mt-2 text-sm">Have inquiries about our transport platform or regional partnerships? Send us a message.</p>
        </div>

        {/* DIRECT CONTACT INFO CARDS */}
        <div className="grid md:grid-cols-3 gap-4 my-8 max-w-4xl">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold text-slate-400 uppercase">Email Us</p>
              <p className="text-sm font-semibold text-slate-900 truncate">admin@easafariroutes.com</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold text-slate-400 uppercase">Call Center</p>
              <p className="text-sm font-semibold text-slate-900 truncate">+254 (0) 57 202 0000</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold text-slate-400 uppercase">Headquarters</p>
              <p className="text-sm font-semibold text-slate-900 truncate">Kisumu, Kenya</p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 max-w-2xl">
          <input
            value={contact.name}
            onChange={(e) => setContactField('name', e.target.value)}
            className="border border-slate-200 rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
            placeholder="Full Name *"
          />
          <div className="grid md:grid-cols-2 gap-4">
            <input
              value={contact.email}
              onChange={(e) => setContactField('email', e.target.value)}
              className="border border-slate-200 rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
              placeholder="Email Address *"
              type="email"
            />
            <input
              value={contact.phone}
              onChange={(e) => setContactField('phone', e.target.value)}
              className="border border-slate-200 rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
              placeholder="Phone Number"
            />
          </div>
          <textarea
            value={contact.message}
            onChange={(e) => setContactField('message', e.target.value)}
            className="border border-slate-200 rounded-xl p-4 h-40 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-slate-50/50"
            placeholder="Your Message / Inquiry *"
          />
        </div>
        <button
          onClick={sendContact}
          disabled={sendingContact}
          className="mt-6 px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors disabled:opacity-60 flex items-center gap-2 shadow-lg shadow-blue-600/20"
        >
          <Send className="w-4 h-4" />
          {sendingContact ? 'Sending Inquiry…' : 'Send Inquiry'}
        </button>
      </div>

    </section>
  )
}
