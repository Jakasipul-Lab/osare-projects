'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-orange-600 p-8">
      <div className="max-w-4xl mx-auto text-white">
        <h1 className="text-5xl font-bold mb-4">OSARE</h1>
        <p className="text-xl mb-8">East Africa Safari Routes & Transit</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur">
            <h2 className="text-2xl font-bold mb-2">🔐 Admin Login</h2>
            <p className="text-sm">Email: admin@easafariroutes.com</p>
          </div>
          
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur">
            <h2 className="text-2xl font-bold mb-2">📋 API Endpoints</h2>
            <p className="text-sm">/api/auth/login</p>
            <p className="text-sm">/api/seed</p>
          </div>
          
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur">
            <h2 className="text-2xl font-bold mb-2">🚀 Status</h2>
            <p className="text-sm">✅ System Running</p>
          </div>
        </div>
      </div>
    </div>
  );
}
