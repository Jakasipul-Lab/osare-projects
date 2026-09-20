'use client'

import { useState, useEffect } from 'react'
import { toast } from 'sonner'
import { Loader2, Compass, MessageCircle, Percent, Users, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer,
} from 'recharts'
import RecentLeads from '@/components/vendor/RecentLeads'

const CHART_COLORS = ['#f97316', '#1e3a8a', '#3b82f6', '#10b981', '#eab308', '#8b5cf6', '#ef4444']

function EmptyChart() {
  return (
    <div className="flex h-full items-center justify-center text-sm text-slate-400">
      No data yet
    </div>
  )
}

function AdminGate({ children }) {
  const [ok, setOk] = useState(false)
  const [checked, setChecked] = useState(false)
  const [password, setPassword] = useState('')
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? sessionStorage.getItem('osare_admin_ok') : null
    if (saved === 'true') setOk(true)
    setChecked(true)
  }, [])

  const submit = async (e) => {
    e.preventDefault()
    setBusy(true)
    try {
      const res = await fetch('/api/admin-auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        sessionStorage.setItem('osare_admin_ok', 'true')
        setOk(true)
      } else {
        toast.error('Wrong password')
      }
    } catch (e) {
      toast.error('Login failed')
    } finally {
      setBusy(false)
    }
  }

  if (!checked) return null

  if (!ok) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
        <form onSubmit={submit} className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mb-5 flex items-center gap-2 text-[#1e3a8a]">
            <ShieldCheck className="h-6 w-6" />
            <h1 className="text-lg font-bold">Restricted Access</h1>
          </div>
          <p className="mb-4 text-sm text-slate-500">Enter the admin password to continue.</p>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="mb-4"
            autoFocus
          />
          <Button type="submit" disabled={busy} className="w-full bg-[#1e3a8a] hover:bg-[#1e3a8a]/90">
            {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Enter'}
          </Button>
        </form>
      </div>
    )
  }

  return children
}

function Dashboard() {
  const [stats, setStats] = useState(null)
  const [leads, setLeads] = useState([])
  const [loading, setLoading] = useState(true)

  const markPaid = async (code) => {
    try {
      const res = await fetch('/api/leads/mark-paid', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code })
      })
      if (!res.ok) { toast.error('Could not mark as paid'); return }
      toast.success(`${code} marked as paid`)
      load()
    } catch (e) { toast.error('Could not mark as paid') }
  }

  const load = async () => {
    setLoading(true)
    try {
      const [s, l] = await Promise.all([
        fetch('/api/stats').then((r) => r.json()),
        fetch('/api/leads').then((r) => r.json()),
      ])
      setStats(s)
      setLeads(Array.isArray(l) ? l : [])
    } catch (e) {
      toast.error('Failed to load dashboard')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  if (loading || !stats) return <div className="flex justify-center py-24"><Loader2 className="h-8 w-8 animate-spin text-slate-400" /></div>

  const cards = [
    { label: 'Total Listings', value: stats.totalListings, icon: <Compass className="h-6 w-6" />, gradient: 'from-[#1e3a8a] to-[#3b82f6]' },
    { label: 'Booking Leads', value: stats.totalLeads, icon: <MessageCircle className="h-6 w-6" />, gradient: 'from-[#f97316] to-[#fb923c]' },
    { label: 'Est. Commission (5%)', value: `$${stats.estRevenueUSD}`, icon: <Percent className="h-6 w-6" />, gradient: 'from-[#10b981] to-[#34d399]' },
    { label: 'Safari / Local', value: `${stats.safariCount} / ${stats.localCount}`, icon: <Users className="h-6 w-6" />, gradient: 'from-[#8b5cf6] to-[#a78bfa]' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="rounded-2xl bg-gradient-to-r from-[#1e3a8a] to-[#f97316] p-8 text-white shadow-lg">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold">Vendor Revenue Dashboard</h1>
              <p className="mt-1 text-white/85">Track booking leads and estimated 5% commission revenue.</p>
            </div>
            <Button variant="secondary" onClick={load} className="gap-2 bg-white text-[#1e3a8a] hover:bg-slate-100">
              Refresh
            </Button>
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <div key={i} className={`rounded-2xl bg-gradient-to-br ${c.gradient} p-5 text-white shadow-md transition-transform hover:scale-[1.02]`}>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-white/85">{c.label}</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">{c.icon}</span>
              </div>
              <p className="mt-4 text-3xl font-extrabold">{c.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Card className="border-slate-200 bg-white shadow-sm">
            <CardHeader><CardTitle className="text-base text-[#1e3a8a]">Leads by category</CardTitle></CardHeader>
            <CardContent className="h-72">
              {stats.leadsByCategory?.length ? (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={stats.leadsByCategory}>
                    <XAxis dataKey="name" tick={{ fontSize: 11 }} interval={0} angle={-15} textAnchor="end" height={60} />
                    <YAxis allowDecimals={false} />
                    <Tooltip />
                    <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                      {stats.leadsByCategory.map((e, i) => <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />)}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              ) : <EmptyChart />}
            </CardContent>
          </Card>
          <Card className="border-slate-200 bg-white shadow-sm">
            <CardHeader><CardTitle className="text-base text-[#f97316]">Safari vs Local leads</CardTitle></CardHeader>
            <CardContent className="h-72">
              {stats.totalLeads ? (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[{ name: 'Safari', value: stats.leadsByType.safari }, { name: 'Local', value: stats.leadsByType.local }]}
                      dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90} label
                    >
                      <Cell fill="#f97316" />
                      <Cell fill="#1e3a8a" />
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              ) : <EmptyChart />}
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <RecentLeads leads={leads} showVendorColumn onMarkPaid={markPaid} />
        </div>
      </div>
    </div>
  )
}

export default function DashboardPage() {
  return (
    <AdminGate>
      <Dashboard />
    </AdminGate>
  )
}
