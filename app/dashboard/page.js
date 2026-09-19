'use client'
import { AdminGate } from '@/components/AdminGate'
import { Dashboard } from '@/components/Dashboard'

export default function DashboardPage() {
  return (
    <AdminGate>
      <Dashboard />
    </AdminGate>
  )
}
