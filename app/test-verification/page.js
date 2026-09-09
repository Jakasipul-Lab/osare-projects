'use client'
import { useState } from 'react'

export default function TestVerification() {
  const [listingId, setListingId] = useState('')
  const [code, setCode] = useState('')
  const [sendResult, setSendResult] = useState(null)
  const [verifyResult, setVerifyResult] = useState(null)
  const [sending, setSending] = useState(false)
  const [verifying, setVerifying] = useState(false)

  const sendCode = async () => {
    setSending(true)
    setSendResult(null)
    try {
      const res = await fetch('/api/send-verification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ listingId })
      })
      const data = await res.json()
      setSendResult({ ok: res.ok, data })
    } catch (e) {
      setSendResult({ ok: false, data: { error: e.message } })
    } finally {
      setSending(false)
    }
  }

  const verifyCode = async () => {
    setVerifying(true)
    setVerifyResult(null)
    try {
      const res = await fetch('/api/verify-phone', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ listingId, code })
      })
      const data = await res.json()
      setVerifyResult({ ok: res.ok, data })
    } catch (e) {
      setVerifyResult({ ok: false, data: { error: e.message } })
    } finally {
      setVerifying(false)
    }
  }

  return (
    <div style={{ maxWidth: 500, margin: '60px auto', padding: 20, fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>Verification Test Page</h1>
      <p style={{ color: '#f97316', fontSize: 13, marginBottom: 24 }}>
        ⚠️ Temporary testing tool — delete this file once verification is confirmed working.
      </p>

      <div style={{ marginBottom: 20 }}>
        <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 4 }}>
          Listing ID (a real UUID from your listings table)
        </label>
        <input
          value={listingId}
          onChange={(e) => setListingId(e.target.value)}
          placeholder="e.g. 6e9fb488-bb0a-4f0d-a1bd-68f481584bcc"
          style={{ width: '100%', padding: 10, border: '1px solid #ccc', borderRadius: 6, fontSize: 14 }}
        />
        <button
          onClick={sendCode}
          disabled={sending || !listingId}
          style={{ marginTop: 8, padding: '10px 16px', background: '#1e3a8a', color: 'white', border: 'none', borderRadius: 6, fontWeight: 700, cursor: 'pointer' }}
        >
          {sending ? 'Sending...' : 'Send Code'}
        </button>
      </div>

      {sendResult && (
        <pre style={{ background: sendResult.ok ? '#ecfdf5' : '#fef2f2', padding: 12, borderRadius: 6, fontSize: 12, overflowX: 'auto', marginBottom: 20 }}>
          {JSON.stringify(sendResult.data, null, 2)}
        </pre>
      )}

      <hr style={{ margin: '24px 0' }} />

      <div style={{ marginBottom: 20 }}>
        <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 4 }}>
          Verification Code (the 6-digit code sent/returned above)
        </label>
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="e.g. 123456"
          style={{ width: '100%', padding: 10, border: '1px solid #ccc', borderRadius: 6, fontSize: 14 }}
        />
        <button
          onClick={verifyCode}
          disabled={verifying || !listingId || !code}
          style={{ marginTop: 8, padding: '10px 16px', background: '#f97316', color: 'white', border: 'none', borderRadius: 6, fontWeight: 700, cursor: 'pointer' }}
        >
          {verifying ? 'Verifying...' : 'Verify Code'}
        </button>
      </div>

      {verifyResult && (
        <pre style={{ background: verifyResult.ok ? '#ecfdf5' : '#fef2f2', padding: 12, borderRadius: 6, fontSize: 12, overflowX: 'auto' }}>
          {JSON.stringify(verifyResult.data, null, 2)}
        </pre>
      )}
    </div>
  )
}
