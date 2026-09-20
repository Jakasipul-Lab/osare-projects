  const handleBook = async (item) => {
    const travelerPhone = window.prompt('Enter your phone number (so we can confirm your booking and any promo rewards):')
    if (!travelerPhone) {
      toast.error('Phone number is required to book')
      return
    }
    const travelerName = window.prompt('Your name (optional):') || ''
    setBooking(item.id)
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ listingId: item.id, travelerName, travelerPhone })
      })
      const data = await res.json()
      toast.success('Opening WhatsApp to complete your booking...')
      window.open(data.whatsappUrl, '_blank')
    } catch (e) {
      toast.error('Could not start booking')
    } finally {
      setBooking(null)
    }
  }
