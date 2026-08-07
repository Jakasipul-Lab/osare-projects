import { Badge } from '@/components/ui/badge'
import { ShieldCheck, Clock, Compass, Bus } from 'lucide-react'

/**
 * StatusBadge
 * A single place that decides badge color/icon/label for the small
 * status tags used across listings, tables, and vendor cards.
 *
 * Usage:
 *   <StatusBadge kind="tier" value="safari" />
 *   <StatusBadge kind="tier" value="local" />
 *   <StatusBadge kind="verification" value="verified" />
 *   <StatusBadge kind="verification" value="pending" />
 */
export default function StatusBadge({ kind, value }) {
  if (kind === 'tier') {
    const isSafari = value === 'safari'
    return (
      <Badge
        className={
          'gap-1 border-0 font-semibold ' +
          (isSafari ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700')
        }
      >
        {isSafari ? <Compass className="h-3 w-3" /> : <Bus className="h-3 w-3" />}
        {isSafari ? 'Safari' : 'Local'}
      </Badge>
    )
  }

  if (kind === 'verification') {
    const isVerified = value === 'verified'
    return (
      <Badge
        className={
          'gap-1 border-0 font-semibold ' +
          (isVerified ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700')
        }
      >
        {isVerified ? <ShieldCheck className="h-3 w-3" /> : <Clock className="h-3 w-3" />}
        {isVerified ? 'Verified' : 'Pending review'}
      </Badge>
    )
  }

  // fallback: plain neutral badge
  return <Badge className="border-0 bg-slate-100 text-slate-600">{value}</Badge>
}
