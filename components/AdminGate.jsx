'use client'
import { useEffect, useState } from 'react'
import { ShieldCheck, Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function AdminGate({ children }) {
  const [authed, setAuthed] = useState(false)
  const [checked, setChecked] = useState(false)
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const ok = sessionStorage.getItem('osare_admin_ok') === 'true'
    setAuthed(ok)
    setChecked(true)
  }, [])

  const submit = async () => {
    if (!password) return
    setLoading(true)
    try {
      const res = await fetch('/api/admin-auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      })
      const data = await res.json()
      if (data.success) {
        sessionStorage.setItem('osare_admin_ok', 'true')
        setAuthed(true)
      } else {
        toast.error(data.error || 'Incorrect password')
      }
    } catch (e) {
      toast.error('Could not verify password')
    } finally {
      setLoading(false)
    }
  }

  if (!checked) return null
  if (!authed) {
    return (
      <div className="mx-auto max-w-sm px-5 py-24 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1e3a8a] to-[#f97316] text-white">
          <ShieldCheck className="h-7 w-7" />
        </div>
        <h1 className="text-xl font-extrabold text-slate-900">Staff Access Only</h1>
        <p className="mt-1 text-sm text-slate-500">Enter the admin password to continue.</p>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && submit()}
          placeholder="Password"
          className="mt-5"
        />
        <Button onClick={submit} disabled={loading} className="mt-3 w-full gap-2 bg-[#1e3a8a] text-white hover:bg-[#1e40af]">
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
          Unlock
        </Button>
      </div>
    )
  }
  return children
}
