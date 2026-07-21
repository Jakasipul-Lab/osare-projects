'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle2, Building2, Phone, Globe, MapPin } from 'lucide-react';

export default function OnboardingPage() {
  const [form, setForm] = useState({ name: '', category: '', title: '', phone: '', url: '', location: '', description: '', priceLabel: '', priceValue: '', image: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/onboarding', { method: 'POST', body: JSON.stringify(form), headers: { 'Content-Type': 'application/json' } });
    if (res.ok) setSubmitted(true);
  };

  if (submitted) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="max-w-md w-full text-center p-8">
        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Registration Successful!</h2>
        <p className="text-gray-600 mb-6">Your vendor profile has been created. We will contact you for verification.</p>
        <Button onClick={() => window.location.href = '/'}>Return Home</Button>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Vendor Onboarding</h1>
        <p className="text-gray-600">Monetize your services with EA SafariRoutes.</p>
      </div>
      <Card className="max-w-3xl mx-auto">
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="grid gap-4">
            <Input placeholder="Business Name" required onChange={e => setForm({...form, name: e.target.value})} />
            <Input placeholder="WhatsApp Number" required onChange={e => setForm({...form, phone: e.target.value})} />
            <Input placeholder="Location" required onChange={e => setForm({...form, location: e.target.value})} />
            <Input placeholder="Service Title" required onChange={e => setForm({...form, title: e.target.value})} />
            <Textarea placeholder="Description" required onChange={e => setForm({...form, description: e.target.value})} />
            <Input placeholder="Price Label ($350)" required onChange={e => setForm({...form, priceLabel: e.target.value})} />
            <Input type="number" placeholder="Price Value (for commission)" required onChange={e => setForm({...form, priceValue: e.target.value})} />
            <Input placeholder="Image URL" required onChange={e => setForm({...form, image: e.target.value})} />
            <Button type="submit" className="w-full bg-blue-600">Submit & Join Platform</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}