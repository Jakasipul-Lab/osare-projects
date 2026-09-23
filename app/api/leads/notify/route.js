import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { vendorPhone, vendorName, listingTitle, clientName, clientPhone } = body

    // Validate incoming payload
    if (!vendorPhone || !listingTitle) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Termii API Payload configuration
    const termiiPayload = {
      api_key: process.env.TERMII_API_KEY,
      device_id: process.env.TERMII_DEVICE_ID,
      phone_number: vendorPhone, // Must be in international format e.g., 2547XXXXXXXX
      template_id: process.env.TERMII_TEMPLATE_ID, // Pre-approved WhatsApp template ID from Termii dashboard
      data: {
        vendor_name: vendorName || 'Partner',
        listing_title: listingTitle,
        client_name: clientName || 'A traveler',
        client_phone: clientPhone || 'Provided in portal'
      }
    }

    // Send request to Termii's WhatsApp Template endpoint
    const termiiRes = await fetch('https://api.termii.com/api/send/template', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(termiiPayload),
    })

    const termiiData = await termiiRes.json()

    if (!termiiRes.ok) {
      console.error('Termii API Error:', termiiData)
      return NextResponse.json({ error: 'Failed to dispatch WhatsApp alert' }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: 'WhatsApp notification sent successfully', termiiData })
  } catch (error) {
    console.error('Notification Route Error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
