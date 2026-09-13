'use client'
import { TierExplorer } from '@/components/TierExplorer'
import { AdSense } from '@/components/AdSense'

export default function LocalPage() {
  return (
    <>
      <AdSense />
      <TierExplorer type="local" />
    </>
  )
}
