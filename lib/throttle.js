// lib/throttle.js
// Small in-memory limiter. It resets when the server restarts.

const buckets = new Map()

export function allow(key, max, windowMs) {
  const now = Date.now()
  const recent = (buckets.get(key) || []).filter((t) => now - t < windowMs)
  if (recent.length >= max) {
    buckets.set(key, recent)
    return false
  }
  recent.push(now)
  buckets.set(key, recent)
  if (buckets.size > 5000) buckets.clear()
  return true
}

export function reset(key) {
  buckets.delete(key)
}
