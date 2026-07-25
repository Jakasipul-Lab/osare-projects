'use client'

import { useEffect, useState } from 'react'
import { Building2, MapPin, Tag, Loader2, ArrowLeft, ShieldCheck } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function VendorsPage() {
  const [vendors, setVendors] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchVendors() {
      try {
        const res = await fetch('/api/listings?type=All')
        const data = await res.json()
        if (Array.isArray(data)) {
          setVendors(data)
        }
      } catch (e) {
        console.error('Failed to load vendors')
      } finally {
        setLoading(false)
      }
    }
    fetchVendors()
  }, [])

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-5 py-8">
          <a href="/" className="text-sm font-bold text-[#1e3a8a] hover:underline flex items-center gap-1 mb-4">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </a>
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-[#1e3a8a]/10 flex items-center justify-center">
              <Building2 className="h-6 w-6 text-[#1e3a8a]" />
            </div>
            <div>
              <h1 className="text-3xl font-black text-slate-900">Active Vendors</h1>
              <p className="text-slate-500 font-medium">Verified operators and service providers on OSARE</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-5 py-10">
        {loading ? (
          <div className="flex h-64 items-center justify-center">
            <Loader2 className="h-10 w-10 animate-spin text-slate-300" />
          </div>
        ) : vendors.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-slate-400 text-lg">No vendors found.</p>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {vendors.map((v) => (
              <Card key={v.id} className="border-slate-200 hover:shadow-lg transition-shadow duration-200 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-black text-slate-900 leading-snug">{v.vendor || v.title}</h3>
                    <Badge className="bg-green-100 text-green-700 border-0 font-bold text-xs flex items-center gap-1">
                      <ShieldCheck className="h-3 w-3" /> Active
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <p className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                      <Tag className="h-3.5 w-3.5 text-[#f97316]" />
                      {v.category}
                    </p>
                    <p className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                      <MapPin className="h-3.5 w-3.5 text-[#1e3a8a]" />
                      {v.location || 'East Africa'}
                    </p>
                  </div>
                  {v.description && (
                    <p className="mt-3 text-sm text-slate-500 line-clamp-2">{v.description}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
