'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export default function RecentLeads({ leads = [], showVendorColumn = false }) {
  return (
    <Card className="border-slate-200">
      <CardHeader><CardTitle className="text-base">Recent booking leads</CardTitle></CardHeader>
      <CardContent className="p-0">
        {leads.length === 0 ? (
          <p className="py-10 text-center text-slate-400">No booking leads yet.</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Listing</TableHead>
                {showVendorColumn && <TableHead>Vendor</TableHead>}
                <TableHead>Price</TableHead>
                <TableHead className="text-right">Est. 5%</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leads.slice(0, 15).map((l) => (
                <TableRow key={l.id}>
                  <TableCell className="font-medium">{l.listingTitle}</TableCell>
                  {showVendorColumn && <TableCell className="text-slate-500">{l.vendor}</TableCell>}
                  <TableCell>{l.priceLabel}</TableCell>
                  <TableCell className="text-right font-semibold text-emerald-600">
                    {l.currency === 'KES' ? `KES ${Math.round((l.priceValue || 0) * 0.05)}` : `$${l.commission ?? Math.round((l.priceValue || 0) * 0.05)}`}
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
