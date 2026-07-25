'use client'

import { useState } from 'react'
import { Megaphone, Loader2, CheckCircle2, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function AdvertisePage() {
  const [form, setForm] = useState({
    businessName: '',
    title: '',
    imageUrl: '',
    link: '',
    duration: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!form.businessName || !form.title || !form.duration) {
      setError('Please fill in all required fields.')
      return
    }

    setSubmitting(true)
    try {
      const res = await fetch('/api/ads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          business_name: form.businessName,
          title: form.title,
          image_url: form.imageUrl,
          link: form.link,
          duration: form.duration
        })
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setSubmitted(true)
      } else {
        setError(data.error || 'Submission failed. Please try again.')
      }
    } catch (err) {
      setError('Network error. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <Card className="max-w-md w-full border-slate-200 shadow-xl">
          <CardContent className="p-10 text-center">
            <div className="mx-auto h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-black text-slate-900">Ad Submitted for Review</h2>
            <p className="mt-3 text-slate-500 font-medium">
              Our team will review your advertisement and get back to you shortly.
            </p>
            <Button
              onClick={() => window.location.href = '/'}
              className="mt-8 w-full bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white font-bold py-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" /> Close & Return Home
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <a href="/" className="text-sm font-bold text-[#1e3a8a] hover:underline flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </a>
        </div>

        <Card className="border-slate-200 shadow-xl">
          <CardHeader className="border-b border-slate-100 bg-white p-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-10 w-10 rounded-lg bg-[#f97316]/10 flex items-center justify-center">
                <Megaphone className="h-5 w-5 text-[#f97316]" />
              </div>
              <CardTitle className="text-2xl font-black text-slate-900">Post Your Advertisement</CardTitle>
            </div>
            <p className="text-slate-500 font-medium">
              Fill in the details below to submit your ad for review. Once approved, it will be visible to thousands of travelers on OSARE.
            </p>
          </CardHeader>

          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="businessName" className="font-bold text-slate-700">Business Name *</Label>
                <Input
                  id="businessName"
                  placeholder="e.g. Safari Adventures Ltd"
                  value={form.businessName}
                  onChange={(e) => handleChange('businessName', e.target.value)}
                  className="border-slate-200"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="title" className="font-bold text-slate-700">Ad Title *</Label>
                <Input
                  id="title"
                  placeholder="e.g. 30% Off Mara Packages This Season"
                  value={form.title}
                  onChange={(e) => handleChange('title', e.target.value)}
                  className="border-slate-200"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="imageUrl" className="font-bold text-slate-700">Image URL (Banner)</Label>
                <Input
                  id="imageUrl"
                  placeholder="https://example.com/your-banner.jpg"
                  value={form.imageUrl}
                  onChange={(e) => handleChange('imageUrl', e.target.value)}
                  className="border-slate-200"
                />
                <p className="text-xs text-slate-400">Recommended size: 1200×400px. Leave empty if you don't have one yet.</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="link" className="font-bold text-slate-700">Destination Link</Label>
                <Input
                  id="link"
                  placeholder="https://yourbusiness.com"
                  value={form.link}
                  onChange={(e) => handleChange('link', e.target.value)}
                  className="border-slate-200"
                />
                <p className="text-xs text-slate-400">Where should users go when they click your ad?</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="duration" className="font-bold text-slate-700">Duration *</Label>
                <Select value={form.duration} onValueChange={(val) => handleChange('duration', val)}>
                  <SelectTrigger className="border-slate-200">
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1 Week">1 Week</SelectItem>
                    <SelectItem value="1 Month">1 Month</SelectItem>
                    <SelectItem value="3 Months">3 Months</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {error && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm font-medium">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white font-black py-6 text-lg"
              >
                {submitting ? <Loader2 className="h-5 w-5 animate-spin mr-2" /> : <Megaphone className="h-5 w-5 mr-2" />}
                {submitting ? 'Submitting...' : 'Submit Ad for Review'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
