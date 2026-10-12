'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const STATUSES = [
  { value: 'new', label: 'New' },
  { value: 'contacted', label: 'Contacted' },
  { value: 'matched', label: 'Matched with partner' },
  { value: 'closed', label: 'Closed' },
]

function day(value) {
  try {
    return new Date(value).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
  } catch (e) {
    return ''
  }
}

export default function TripRequests({ requests = [], onStatusChange }) {
  return (
    <Card className="border-slate-200">
      <CardHeader>
        <CardTitle className="text-base">Trip requests</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        {requests.length === 0 ? (
          <p className="py-10 text-center text-slate-400">No trip requests yet.</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ref</TableHead>
                <TableHead>Trip</TableHead>
                <TableHead>Traveler</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {requests.slice(0, 30).map((r) => {
                const digits = String(r.travelerPhone || '').replace(/[^0-9]/g, '')
                const wa = digits
                  ? `https://wa.me/${digits}?text=${encodeURIComponent(
                      `Hello, this is OSARE about your trip request (Ref: ${r.code}).`
                    )}`
                  : null
                return (
                  <TableRow key={r.id}>
                    <TableCell className="font-mono text-xs text-slate-500">
                      <div>{r.code}</div>
                      <div className="text-slate-400">{day(r.createdAt)}</div>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">{r.destination}</div>
                      <div className="text-xs text-slate-500">
                        {[r.travelDates, r.travelers ? `${r.travelers} traveler${r.travelers > 1 ? 's' : ''}` : null, r.budget]
                          .filter(Boolean)
                          .join(' · ') || '—'}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">{r.travelerName || '—'}</div>
                      {wa ? (
                        <a href={wa} target="_blank" rel="noreferrer" className="text-xs text-emerald-600 hover:text-emerald-700">
                          {r.travelerPhone} (WhatsApp)
                        </a>
                      ) : (
                        <span className="text-xs text-slate-400">{r.travelerPhone}</span>
                      )}
                    </TableCell>
                    <TableCell className="max-w-xs text-sm text-slate-600">
                      <span title={r.message || ''}>{r.message ? r.message.slice(0, 120) : '—'}</span>
                    </TableCell>
                    <TableCell>
                      <select
                        value={r.status}
                        onChange={(e) => onStatusChange && onStatusChange(r.code, e.target.value)}
                        className="rounded-md border border-slate-300 bg-white px-2 py-1 text-xs"
                      >
                        {STATUSES.map((s) => (
                          <option key={s.value} value={s.value}>{s.label}</option>
                        ))}
                      </select>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  )
}
