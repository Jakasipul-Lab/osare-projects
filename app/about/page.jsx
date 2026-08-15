export default function AboutPage() {
  const team = [
    {
      name: "[Your Name / Director Name]",
      role: "Managing Director & Founder",
      phone: "[Your Direct Office Line]",
      email: "director@safaroutes.com",
    },
    {
      name: "[Operations Manager Name]",
      role: "Head of Operations & Client Enquiries",
      phone: "[Direct Line / WhatsApp]",
      email: "operations@safaroutes.com",
    }
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold mb-3 text-green-900">About SafariRoutes</h1>
        <p className="text-lg text-gray-600">
          Your trusted partner for wilderness adventures and safaris across Africa.
        </p>
      </div>

      {/* Headquarters Info */}
      <div className="bg-green-50 border border-green-200 rounded-2xl p-6 shadow-sm mb-10">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Headquarters & Offices</h2>
        <div className="grid md:grid-cols-2 gap-4 text-gray-700">
          <div>
            <p className="mb-2"><strong>Physical Address:</strong> [Your HQ Building / Street, City]</p>
            <p className="mb-2"><strong>Main Office Line:</strong> [Your Main Phone Number]</p>
          </div>
          <div>
            <p className="mb-2"><strong>Support Email:</strong> info@safaroutes.com</p>
            <p className="mb-2"><strong>Hours:</strong> Mon - Fri (8:00 AM - 5:00 PM)</p>
          </div>
        </div>
      </div>

      {/* Office Bearers */}
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Office Bearers & Leadership</h2>
      <div className="space-y-4">
        {team.map((member, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-green-700 font-medium text-sm">{member.role}</p>
            </div>
            <div className="text-sm text-gray-600 space-y-1 sm:text-right">
              <p>📞 {member.phone}</p>
              <p>✉️ {member.email}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
