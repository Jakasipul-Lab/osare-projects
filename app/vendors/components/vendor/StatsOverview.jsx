import { Compass, MessageCircle, Percent, Users, Plus, TrendingUp } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

/**
 * StatsOverview
 * Props:
 *  - stats: { totalListings, totalLeads, estRevenueUSD, safariCount, localCount }
 *  - onAddListing: () => void   (called when the empty-state CTA is clicked)
 */
export default function StatsOverview({ stats, onAddListing }) {
  const hasListings = (stats?.totalListings ?? 0) > 0

  if (!hasListings) {
    return (
      <Card className="border-slate-200 border-t-4 border-t-[#f97316]">
        <CardContent className="flex flex-col items-center justify-center py-14 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f97316]/10 text-[#f97316] mb-4">
            <Compass className="h-7 w-7" />
          </div>
          <p className="font-bold text-slate-900">No listings yet</p>
          <p className="mt-1 max-w-xs text-sm text-slate-500">
            Add your first listing to start appearing in traveler searches and generating leads.
          </p>
          <Button
            onClick={onAddListing}
            className="mt-5 gap-2 bg-[#f97316] text-white hover:bg-[#ea6c0f]"
          >
            <Plus className="h-4 w-4" /> Add your first listing
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {/* Headline commission card */}
      <Card className="border-0 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white overflow-hidden">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-white/80">Estimated Commission</span>
                <Badge className="border-0 bg-white/15 text-white text-[10px]">5% rate</Badge>
              </div>
              <p className="mt-2 text-4xl font-black tracking-tight">${stats.estRevenueUSD ?? 0}</p>
            </div>
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
              <Percent className="h-5 w-5" />
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Secondary stats row */}
      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard
          label="Listings"
          value={stats.totalListings ?? 0}
          icon={<Compass className="h-4 w-4" />}
          accent="#1e3a8a"
        />
        <StatCard
          label="Booking Leads"
          value={stats.totalLeads ?? 0}
          icon={<MessageCircle className="h-4 w-4" />}
          accent="#f97316"
        />
        <StatCard
          label="Safari / Local"
          value={`${stats.safariCount ?? 0} / ${stats.localCount ?? 0}`}
          icon={<Users className="h-4 w-4" />}
          accent="#10b981"
        />
      </div>
    </div>
  )
}

function StatCard({ label, value, icon, accent }) {
  return (
    <Card className="border-slate-200 border-t-4" style={{ borderTopColor: accent }}>
      <CardContent className="p-5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</span>
          <span
            className="flex h-8 w-8 items-center justify-center rounded-lg text-white"
            style={{ backgroundColor: accent }}
          >
            {icon}
          </span>
        </div>
        <p className="mt-2 text-2xl font-extrabold text-slate-900">{value}</p>
      </CardContent>
    </Card>
  )
}
