import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { vendorPhone, vendorName, listingTitle, clientName, clientPhone } = body

    // Validate incoming payload
    if (!vendorPhone || !listingTitle) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const message = `Hi ${vendorName || 'Partner'}, ${clientName || 'A traveler'} (${clientPhone || 'phone in portal'}) is interested in your listing "${listingTitle}" on OSARE. Please follow up directly to confirm booking.`

    // Termii SMS API payload (pay-per-message, no monthly device subscription)
    const termiiPayload = {
      api_key: process.env.TERMII_API_KEY,
      to: vendorPhone, // Must be in international format e.g. 254758378729
      from: process.env.TERMII_SENDER_ID, // Your approved Sender ID, e.g. "OSARE"
      sms: message,
      type: 'plain',
      channel: 'dnd', // 'dnd' is recommended for transactional messages like this
    }

    const termiiRes = await fetch('https://api.ng.termii.com/api/sms/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(termiiPayload),
    })

    const termiiData = await termiiRes.json()

    if (!termiiRes.ok) {
      console.error('Termii API Error:', termiiData)
      return NextResponse.json({ error: 'Failed to dispatch SMS alert' }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: 'SMS notification sent successfully', termiiData })
  } catch (error) {
    console.error('Notification Route Error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
