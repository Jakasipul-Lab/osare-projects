'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function RecentLeads({ leads = [], showVendorColumn = false, onMarkPaid }) {
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
                <TableHead>Code</TableHead>
                <TableHead>Listing</TableHead>
                {showVendorColumn && <TableHead>Vendor</TableHead>}
                <TableHead>Price</TableHead>
                <TableHead className="text-right">Est. 5%</TableHead>
                <TableHead>Status</TableHead>
                {showVendorColumn && <TableHead></TableHead>}
              </TableRow>
            </TableHeader>
            <TableBody>
              {leads.slice(0, 15).map((l) => (
                <TableRow key={l.id}>
                  <TableCell className="font-mono text-xs text-slate-500">{l.code || '—'}</TableCell>
                  <TableCell className="font-medium">{l.listingTitle}</TableCell>
                  {showVendorColumn && <TableCell className="text-slate-500">{l.vendor}</TableCell>}
                  <TableCell>{l.priceLabel}</TableCell>
                  <TableCell className="text-right font-semibold text-emerald-600">
                    {l.currency === 'KES' ? `KES ${Math.round((l.priceValue || 0) * 0.05)}` : `$${l.commission ?? Math.round((l.priceValue || 0) * 0.05)}`}
                  </TableCell>
                  <TableCell>
                    {l.commissionStatus === 'paid' ? (
                      <Badge className="bg-emerald-100 text-emerald-700 border-0">Paid</Badge>
                    ) : (
                      <Badge variant="secondary" className="bg-amber-100 text-amber-700">Unpaid</Badge>
                    )}
                  </TableCell>
                  {showVendorColumn && (
                    <TableCell className="text-right">
                      {l.commissionStatus !== 'paid' && l.code && onMarkPaid && (
                        <Button size="sm" variant="outline" onClick={() => onMarkPaid(l.code)}>
                          Mark Paid
                        </Button>
                      )}
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  )
}
