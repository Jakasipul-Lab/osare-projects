'use client'
import { useState } from 'react'
import { toast } from 'sonner'
import Image from 'next/image'
import { Building2, Award, Mail, Phone, MapPin, Send, CheckCircle2, Globe, Users, Briefcase } from 'lucide-react'

const BRANCHES = [
  { name: 'Kenya - Nairobi', person: 'Kenneth Oketch', role: 'Branch Manager', email: 'nairobi@osare.africa' },
  { name: 'Uganda - Kampala', person: 'Brian Omollo', role: 'Branch Manager', email: 'kampala@osare.africa' },
  { name: 'Tanzania - Dar es Salaam', person: 'Johnson Yongo', role: 'Branch Manager', email: 'dar@osare.africa' },
  { name: 'Germany Liaison Office', person: 'Brunnenstraße 48', role: '34537 Bad Wildungen', email: 'germany@osare.africa' },
]

const MILESTONES = [
  '2025 • OSARE Concept Development & Foundation',
  '2026 • Platform Architecture Completed & Live Deployment',
  '2026 • Kisumu Headquarters Established',
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
        </div>
      </div>

      {/* LEADERSHIP / CEO PROFILE */}
      <div className="grid md:grid-cols-3 gap-8 items-center bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
        <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-md bg-slate-100 border border-slate-200">
          <Image
            src="/ceo.jpg"
            alt="OSARE Chief Executive Officer"
            fill
            className="object-cover object-top filter contrast-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
            <div className="text-white">
              <p className="font-bold text-lg">Executive Leadership</p>
              <p className="text-xs text-blue-200">Chief Executive Officer</p>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 space-y-4">
          <div className="inline-flex items-center gap-1.5 text-blue-600 text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4" /> Leadership & Vision
          </div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Driving Mobility Forward</h2>
          <p className="text-slate-600 leading-relaxed">
            Under visionary leadership, OSARE is built on rigorous engineering standards and a deep understanding of East African transport corridors. Our mission is to eliminate friction in regional transit through robust software architecture, reliable operational frameworks, and user-centric platform design.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <p className="text-2xl font-black text-slate-900">EA-Wide</p>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Corridor Coverage</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <p className="text-2xl font-black text-slate-900">24/7</p>
              <p className="text-xs text-slate-500 font-medium mt-0.5">System Availability</p>
            </div>
          </div>
        </div>
      </div>

      {/* REGIONAL BRANCHES */}
      <div>
        <div className="space-y-2 mb-8">
          <h2 className="text-3xl font-black text-slate-900">Regional Offices & Branches</h2>
          <p className="text-slate-500 text-sm">Strategic operational nodes across East Africa and Europe.</p>
        </div>
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
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-blue-600 font-medium">
                <Mail className="w-3.5 h-3.5" />
                <span className="truncate">{b.email}</span>
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

      {/* CONTACT FORM */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-black text-slate-900">Contact Us</h2>
          <p className="text-slate-500 mt-2 text-sm">Have inquiries about our transport platform or regional partnerships? Send us a message.</p>
        </div>
        <div className="grid gap-4 mt-8 max-w-2xl">
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
