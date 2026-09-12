'use client'
import { useState, useEffect } from 'react'
import { toast } from 'sonner'
import { Loader2, Sparkles, Plus, ShieldCheck, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from '@/components/ui/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const SAFARI_CATS = ['All', 'Safari Package', 'Kilimanjaro Climb', 'Hotel & Resort', 'Car & Caravan Hire', 'Light Aircraft Charter', 'Sightseeing']
const LOCAL_CATS = ['All', 'Matatu / Shuttle', 'Train (SGR)', 'Taxi / Car Hire', 'Airport Transfer']

const EMPTY_FORM = {
  type: 'safari', category: 'Safari Package', title: '', vendor: '', vendorOffice: '',
  location: '', mapLink: '', description: '', includes: '', priceValue: '', currency: 'USD',
  priceLabel: '', offPeakValue: '', offPeakLabel: '', season: '', image: '', keywords: ''
}

function StatusBadgePrice({ status }) {
  const map = {
    APPROVED: 'bg-emerald-100 text-emerald-700',
    MISMATCH: 'bg-red-100 text-red-700',
    PENDING: 'bg-amber-100 text-amber-700',
  }
  return (
    <Badge variant="secondary" className={map[status] || map.PENDING}>
      {status || 'PENDING'}
    </Badge>
  )
}

function Field({ label, v, on, ph }) {
  return (
    <div>
      <Label className="text-xs">{label}</Label>
      <Input value={v} onChange={(e) => on(e.target.value)} placeholder={ph} />
    </div>
  )
}

function Admin() {
  const [listings, setListings] = useState([])
  const [form, setForm] = useState(EMPTY_FORM)
  const [saving, setSaving] = useState(false)
  const [seeding, setSeeding] = useState(false)
  const load = async () => {
    const data = await fetch('/api/listings').then((r) => r.json())
    setListings(Array.isArray(data) ? data : [])
  }
  useEffect(() => { load() }, [])
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }))
  const submit = async () => {
    if (!form.title) { toast.error('Title is required'); return }
    setSaving(true)
    try {
      const res = await fetch('/api/listings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        toast.error(data.error || 'Failed to add listing')
        return
      }
      toast.success('Listing added')
      setForm(EMPTY_FORM)
      load()
    } catch (e) { toast.error('Failed to add listing') }
    finally { setSaving(false) }
  }
  const remove = async (id) => {
    await fetch(`/api/listings/${id}`, { method: 'DELETE' })
    toast.success('Listing removed')
    load()
  }
  const toggleVerified = async (item) => {
    try {
      await fetch('/api/verify-vendor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: item.id, isVerified: !item.isVerified })
      })
      toast.success(!item.isVerified ? 'Marked as verified' : 'Verification removed')
      load()
    } catch (e) {
      toast.error('Could not update verification')
    }
  }
  const cycleStatus = async (item) => {
    const order = ['PENDING', 'APPROVED', 'MISMATCH']
    const next = order[(order.indexOf(item.priceStatus) + 1) % order.length]
    try {
      await fetch('/api/verify-vendor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: item.id, priceStatus: next })
      })
      toast.success(`Price status set to ${next}`)
      load()
    } catch (e) {
      toast.error('Could not update price status')
    }
  }
  const seed = async () => {
    setSeeding(true)
    try {
      const res = await fetch('/api/seed', { method: 'POST' })
      const data = await res.json()
      toast.success(`Seeded ${data.inserted} sample listings`)
      load()
    } catch (e) { toast.error('Seed failed') }
    finally { setSeeding(false) }
  }
  const cats = form.type === 'safari' ? SAFARI_CATS.filter((c) => c !== 'All') : LOCAL_CATS.filter((c) => c !== 'All')
  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">Admin — Manage Listings</h1>
          <p className="text-slate-500">Add vendor listings for the Safari or Local tiers.</p>
        </div>
        <Button variant="outline" onClick={seed} disabled={seeding} className="gap-2">
          {seeding ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />} Reset & load sample data
        </Button>
      </div>
      <div className="mt-8 grid gap-8 lg:grid-cols-5">
        <Card className="border-slate-200 lg:col-span-2">
          <CardHeader><CardTitle className="text-base">Add a listing</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label className="text-xs">Tier</Label>
                <Select value={form.type} onValueChange={(v) => { set('type', v); set('category', (v === 'safari' ? SAFARI_CATS : LOCAL_CATS)[1]) }}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="safari">Safari / Tourism</SelectItem>
                    <SelectItem value="local">Local Transit</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-xs">Category</Label>
                <Select value={form.category} onValueChange={(v) => set('category', v)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>{cats.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                </Select>
              </div>
            </div>
            <Field label="Title" v={form.title} on={(v) => set('title', v)} />
            <Field label="Vendor" v={form.vendor} on={(v) => set('vendor', v)} />
            <Field label="Vendor office" v={form.vendorOffice} on={(v) => set('vendorOffice', v)} />
            <Field label="Location" v={form.location} on={(v) => set('location', v)} />
            <Field label="Map link" v={form.mapLink} on={(v) => set('mapLink', v)} />
            <div>
              <Label className="text-xs">Description</Label>
              <Textarea value={form.description} onChange={(e) => set('description', e.target.value)} rows={3} />
            </div>
            <Field label="Includes (comma separated)" v={form.includes} on={(v) => set('includes', v)} />
            <div className="grid grid-cols-2 gap-3">
              <Field label="Price value (number)" v={form.priceValue} on={(v) => set('priceValue', v)} />
              <div>
                <Label className="text-xs">Currency</Label>
                <Select value={form.currency} onValueChange={(v) => set('currency', v)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="USD">USD ($)</SelectItem>
                    <SelectItem value="KES">KES</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Price label" v={form.priceLabel} on={(v) => set('priceLabel', v)} ph="$350" />
              <Field label="Off-peak label" v={form.offPeakLabel} on={(v) => set('offPeakLabel', v)} ph="$280" />
            </div>
            <Field label="Season note" v={form.season} on={(v) => set('season', v)} ph="Low season: Apr-Jun" />
            <Field label="Image URL" v={form.image} on={(v) => set('image', v)} />
            <Field label="Keywords (comma separated)" v={form.keywords} on={(v) => set('keywords', v)} />
            <Button onClick={submit} disabled={saving} className="w-full gap-2 bg-[#1e3a8a] text-white hover:bg-[#1e40af]">
              {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus className="h-4 w-4" />} Add listing
            </Button>
          </CardContent>
        </Card>
        <Card className="border-slate-200 lg:col-span-3">
          <CardHeader><CardTitle className="text-base">All listings ({listings.length})</CardTitle></CardHeader>
          <CardContent>
            <div className="max-h-[640px] overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Tier</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Verified</TableHead>
                    <TableHead>Price Status</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {listings.map((l) => (
                    <TableRow key={l.id}>
                      <TableCell>
                        <p className="font-medium">{l.title}</p>
                        <p className="text-xs text-slate-400">{l.vendor}</p>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary" className={l.type === 'safari' ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'}>{l.type}</Badge>
                      </TableCell>
                      <TableCell className="text-sm">{l.priceLabel}</TableCell>
                      <TableCell>
                        <Button
                          size="sm"
                          variant={l.isVerified ? 'default' : 'outline'}
                          onClick={() => toggleVerified(l)}
                          className={l.isVerified ? 'gap-1 bg-emerald-600 hover:bg-emerald-700' : 'gap-1'}
                        >
                          <ShieldCheck className="h-3.5 w-3.5" />
                          {l.isVerified ? 'Verified' : 'Unverified'}
                        </Button>
                      </TableCell>
                      <TableCell>
                        <button onClick={() => cycleStatus(l)} className="cursor-pointer">
                          <StatusBadgePrice status={l.priceStatus} />
                        </button>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button size="icon" variant="ghost" onClick={() => remove(l.id)} className="text-red-500 hover:text-red-700">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              {listings.length === 0 && <p className="py-10 text-center text-slate-400">No listings yet. Click "Reset & load sample data".</p>}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function AdminPage() {
  return <Admin />
}
