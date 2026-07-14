'use client'

import { Check, Calendar, Clock, DollarSign, Megaphone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function AdsPage() {
  const adSpaces = [
    {
      id: 'hero-banner',
      title: 'Homepage Hero Banner',
      description: 'Maximum visibility. Your brand at the top of the main search page.',
      options: [
        { duration: '1 Week', price: 'KES 5,000' },
        { duration: '1 Month', price: 'KES 15,000' },
        { duration: '3 Months', price: 'KES 40,000' },
      ],
      features: ['Primary placement', 'High click-through rate', 'Animated transitions'],
      badge: 'Most Popular'
    },
    {
      id: 'search-featured',
      title: 'Search Result Featured Item',
      description: 'Appear at the very top of search results for specific routes (e.g. Masai Mara).',
      options: [
        { duration: '1 Week', price: 'KES 3,000' },
        { duration: '1 Month', price: 'KES 10,000' },
        { duration: '6 Months', price: 'KES 50,000' },
      ],
      features: ['Targeted audience', 'Verified badge', 'Yellow highlight'],
      badge: 'Best Value'
    },
    {
      id: 'sidebar-card',
      title: 'Sidebar Partner Card',
      description: 'A dedicated card in the sidebar visible during all searches.',
      options: [
        { duration: '1 Month', price: 'KES 8,000' },
        { duration: '1 Year', price: 'KES 75,000' },
      ],
      features: ['Consistent exposure', 'Link to your WhatsApp', 'Logo placement'],
      badge: 'Direct Booking'
    },
    {
      id: 'footer-sponsor',
      title: 'Footer Sponsor Logo',
      description: 'Clean logo placement in our global footer across all pages.',
      options: [
        { duration: '6 Months', price: 'KES 12,000' },
        { duration: '1 Year', price: 'KES 20,000' },
      ],
      features: ['Brand credibility', 'Global visibility', 'SEO Backlink'],
      badge: 'Long Term'
    }
  ]

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1 text-orange-600 border-orange-200 bg-orange-50 font-bold uppercase tracking-wider">
            Advertising Portal
          </Badge>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Organize Your Advertisement Space
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
            Reach thousands of travelers looking for safaris, hotels, and transit in East Africa. Select your slot and duration below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {adSpaces.map((space) => (
            <Card key={space.id} className="border-2 border-slate-200 hover:border-orange-500 transition-all duration-300 shadow-xl overflow-hidden group">
              <CardHeader className="bg-white border-b border-slate-100">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-slate-100 rounded-xl group-hover:bg-orange-100 group-hover:text-orange-600 transition-colors">
                    <Megaphone className="h-8 w-8" />
                  </div>
                  <Badge className="bg-slate-900 text-white font-bold">{space.badge}</Badge>
                </div>
                <CardTitle className="text-2xl mt-4 font-black">{space.title}</CardTitle>
                <CardDescription className="text-slate-500 text-lg leading-relaxed">{space.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="mb-8">
                  <h4 className="font-black text-slate-900 mb-4 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-orange-500" /> Duration & Pricing
                  </h4>
                  <div className="space-y-3">
                    {space.options.map((opt, i) => (
                      <div key={i} className="flex justify-between items-center p-4 bg-slate-50 rounded-lg border border-slate-100 hover:border-orange-200 hover:bg-orange-50 transition-all">
                        <span className="font-bold text-slate-700">{opt.duration}</span>
                        <span className="font-black text-orange-600">{opt.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-black text-slate-900 mb-4 flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" /> What's Included
                  </h4>
                  <ul className="space-y-2">
                    {space.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-600 font-medium">
                        <div className="h-1.5 w-1.5 bg-orange-500 rounded-full" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button 
                  className="w-full mt-10 bg-slate-900 hover:bg-orange-600 text-white font-black py-6 text-lg rounded-xl transition-all"
                  onClick={() => window.open(`https://wa.me/254758378729?text=${encodeURIComponent(`Hello OSARE, I am interested in purchasing the ${space.title} advertisement space.`)}`, '_blank')}
                >
                  Buy This Space
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 p-10 bg-orange-600 rounded-3xl text-white text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-black mb-4">Custom Package Needed?</h2>
            <p className="text-xl mb-8 font-medium opacity-90">If you have multiple locations or want a long-term corporate partnership, we offer bulk discounts.</p>
            <Button 
              variant="outline" 
              className="bg-white text-orange-600 border-none font-black px-10 py-6 text-xl rounded-2xl hover:bg-slate-100"
              onClick={() => window.location.href = 'mailto:info@easafariroutes.com'}
            >
              Contact Sales
            </Button>
          </div>
          <div className="absolute top-0 right-0 p-4 opacity-10">
             <Megaphone className="h-64 w-64 -mr-20 -mt-20" />
          </div>
        </div>
      </div>
    </div>
  )
}
