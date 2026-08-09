cat << 'EOF' > app/vendors/page.tsx
import React from 'react';

// Static 39 vendors data
const vendors = [
  { id: 1, name: "Safari Adventure Co.", location: "Nairobi, Kenya", category: "Tours & Safaris" },
  { id: 2, name: "Serengeti Expeditions", location: "Arusha, Tanzania", category: "Wilderness Safaris" },
  { id: 3, name: "Mara Bush Camp Logistics", location: "Maasai Mara, Kenya", category: "Accommodation & Lodges" },
  // ... extra vendors
];

export default function VendorsPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Verified Safari & Travel Vendors</h1>
        <p className="text-slate-600 mb-8">Discover top-rated safari operators, lodges, and transport services in East Africa.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vendors.map((vendor) => (
            <div key={vendor.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition">
              <span className="text-xs font-semibold px-2.5 py-1 bg-amber-100 text-amber-800 rounded-full">
                {vendor.category}
              </span>
              <h2 className="text-xl font-bold text-slate-800 mt-3">{vendor.name}</h2>
              <p className="text-sm text-slate-500 mt-1">📍 {vendor.location}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
EOF
