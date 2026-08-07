import { MessageCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import StatusBadge from './StatusBadge'

/**
 * RecentLeads
 * Props:
 *  - leads: Array<{ id, listingTitle, vendor?, type, priceLabel, priceValue, currency, commission }>
 *  - limit: number (default 10) — how many rows to show
 *  - showVendorColumn: boolean (default false) — set true for the Admin Dashboard,
 *      where leads span multiple vendors; leave false in the Vendor Portal,
 *      where it's redundant (the vendor is always "you").
 */
export default function RecentLeads({ leads = [], limit = 10, showVendorColumn = false }) {
  const rows = leads.slice(0, limit)

  return (
    <Card className="border-slate-200">
      <CardHeader>
        <CardTitle className="text-base">Recent booking leads</CardTitle>
      </CardHeader>
      <CardContent className={rows.length ? 'p-0' : ''}>
        {rows.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-14 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f97316]/10 text-[#f97316] mb-4">
              <MessageCircle className="h-7 w-7" />
            </div>
            <p className="font-bold text-slate-900">No booking leads yet</p>
            <p className="mt-1 max-w-xs text-sm text-slate-500">
              When a traveler books one of your listings, it will show up here.
            </p>
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Listing</TableHead>
                {showVendorColumn && <TableHead>Vendor</TableHead>}
                <TableHead>Tier</TableHead>
                <TableHead>Price</TableHead>
                <TableHead className="text-right">Est. 5%</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((l) => (
                <TableRow key={l.id}>
                  <TableCell className="font-medium">{l.listingTitle}</TableCell>
                  {showVendorColumn && (
                    <TableCell className="text-slate-500">{l.vendor}</TableCell>
                  )}
                  <TableCell>
                    <StatusBadge kind="tier" value={l.type} />
                  </TableCell>
                  <TableCell>{l.priceLabel}</TableCell>
                  <TableCell className="text-right font-semibold text-emerald-600">
                    {l.currency === 'KES'
                      ? `KES ${Math.round((l.priceValue || 0) * 0.05)}`
                      : `$${l.commission}`}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  )
}
