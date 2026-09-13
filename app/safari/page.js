'use client'
import { TierExplorer } from '@/components/TierExplorer'
import { AdSense } from '@/components/AdSense'

export default function SafariPage() {
  return (
    <>
      <AdSense />
      <TierExplorer type="safari" />
    </>
  )
}
