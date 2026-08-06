// lib/rateLimit.js

const LIMITS = {
  'booking': { max: 3, window: 3600 }, // 3 Buchungen pro Stunde pro IP
};

export async function checkRateLimit(key, type = 'booking') {
  const limit = LIMITS[type];
  const now = Date.now();
  
  // Speichere in Redis, Supabase oder einfacher: In-Memory (nur für Testing!)
  // Für Production: Redis verwenden
  
  return true; // Allowed
}
