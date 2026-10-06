import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { submitOrderRequest } from '@/lib/pesapal';
import { isAdminRequest } from '@/lib/auth';

// Fixed conversion used elsewhere on the site (dualAmount in RecentLeads.jsx)
// so the KES amount a vendor is asked to pay matches what they see on the
// dashboard for a USD-priced listing.
const USD_TO_KES = 130;

// Called when you click "Request via Pesapal" next to an unpaid lead on the
// dashboard. Looks up that lead's 5% commission, asks Pesapal for a payment
// link, and hands back a ready-to-send WhatsApp message for the vendor.
export async function POST(request) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ success: false, error: 'Admin login required' }, { status: 401 });
  }
  try {
    const { code } = await request.json();
    if (!code) {
      return NextResponse.json({ success: false, error: 'Lead code is required' }, { status: 400 });
    }

    const leadRes = await query('SELECT * FROM leads WHERE code = $1', [code]);
    const lead = leadRes.rows[0];
    if (!lead) {
      return NextResponse.json({ success: false, error: 'Lead not found' }, { status: 404 });
    }
    if (!lead.commission || Number(lead.commission) <= 0) {
      return NextResponse.json(
        { success: false, error: 'This lead has no commission amount set' },
        { status: 400 }
      );
    }

    const listingRes = await query('SELECT * FROM listings WHERE id = $1', [lead.listing_id]);
    const listing = listingRes.rows[0];
    const rawPhone = listing?.vendor_phone || listing?.vendor_phone_alt || '';
    const cleanPhone = String(rawPhone).replace(/[^0-9]/g, '');
    const formattedPhone = cleanPhone
      ? cleanPhone.startsWith('0')
        ? '254' + cleanPhone.slice(1)
        : cleanPhone
      : '';

    const amountKes =
      lead.currency === 'KES'
        ? Math.round(Number(lead.commission))
        : Math.round(Number(lead.commission) * USD_TO_KES);

    const result = await submitOrderRequest({
      amount: amountKes,
      currency: 'KES',
      description: `OSARE 5% commission - ${lead.listing_title}`,
      reference: lead.code,
      phone: formattedPhone,
      lastName: lead.vendor || 'Vendor',
    });

    if (!result?.redirect_url) {
      return NextResponse.json(
        { success: false, error: result?.error?.message || 'Pesapal did not return a payment link' },
        { status: 502 }
      );
    }

    const waMsg = encodeURIComponent(
      `Hello, this is OSARE. Your 5% commission of KES ${amountKes.toLocaleString()} for booking Ref: ${lead.code} is due. Please pay securely here: ${result.redirect_url}`
    );
    const whatsappUrl = formattedPhone ? `https://wa.me/${formattedPhone}?text=${waMsg}` : null;

    return NextResponse.json({
      success: true,
      redirectUrl: result.redirect_url,
      whatsappUrl,
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
