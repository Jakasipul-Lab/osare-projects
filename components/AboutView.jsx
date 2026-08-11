'use client'

const TEAM = [
  {
    name: 'Jacqueline Osare',
    role: 'Liaison & Logistics Officer',
    office: 'Kisumu Headquarters, Kenya',
    email: 'jacqueline.susan@easafariroutes.com',
    initials: 'JO',
    color: 'from-purple-600 to-pink-500',
  },
  {
    name: 'Kenneth Oketch',
    role: 'Branch Manager',
    office: 'Nairobi, Kenya',
    email: 'kenneth.oketch@easafariroute.com',
    initials: 'KO',
    color: 'from-blue-600 to-cyan-500',
  },
  {
    name: 'Brian Omollo',
    role: 'Branch Manager',
    office: 'Kampala, Uganda',
    email: 'brian.omollo@easafariroute.com',
    initials: 'BO',
    color: 'from-green-600 to-emerald-500',
  },
  {
    name: 'Johnson Yongo',
    role: 'Branch Manager',
    office: 'Dar es Salaam, Tanzania',
    email: 'johnson.yongo@easafariroute.com',
    initials: 'JY',
    color: 'from-orange-500 to-red-500',
  },
  {
    name: 'Winfrith Hikloch Ogola',
    role: 'Advertisement, Media & Content Manager',
    office: 'Kigamboni, Dar es Salaam, Tanzania',
    email: 'media@easafariroute.com',
    initials: 'WO',
    color: 'from-rose-500 to-pink-600',
  },
]

export default function AboutPage() {
  return (
    <div className="bg-slate-50">

      {/* HERO */}

      <section className="bg-gradient-to-r from-blue-700 to-cyan-500 text-white py-28 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h1 className="text-5xl md:text-7xl font-black">
            About OSARE
          </h1>

          <p className="mt-8 text-lg md:text-2xl max-w-4xl mx-auto">
            Connecting Travel, Tourism, Transport and Logistics
            Across East Africa Through One Unified Ecosystem.
          </p>

        </div>
      </section>

      {/* CEO SECTION */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* KEEP YOUR EXISTING GITHUB PHOTO HERE */}

          <div>
            {/* Paste your current photo component here */}
          </div>

          <div>

            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold">
              Executive Leadership
            </span>

            <h2 className="mt-6 text-5xl font-black text-slate-900">
              Osare Nakinson
            </h2>

            <p className="mt-2 text-2xl text-slate-500">
              Chief Executive Officer
            </p>

            <div className="mt-8 space-y-2 text-slate-700">

              <p>📍 Kisumu Headquarters, Kenya</p>

              <p>📧 ceo@easafariroute.com</p>

            </div>

            <p className="mt-8 text-lg leading-relaxed text-slate-600">
              OSARE is a regional digital ecosystem connecting
              travelers, tourism enterprises, transport operators,
              logistics providers and businesses across East Africa.
              Through technology, partnerships and information services,
              OSARE aims to simplify mobility, increase visibility and
              strengthen regional connectivity.
            </p>

          </div>

        </div>

      </section>

      {/* MISSION & VISION */}

      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white rounded-3xl p-8 shadow-md">
            <h3 className="text-3xl font-black">
              Mission
            </h3>

            <p className="mt-4 text-slate-600">
              To simplify travel, tourism, transport and logistics
              through technology-driven regional integration.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-md">
            <h3 className="text-3xl font-black">
              Vision
            </h3>

            <p className="mt-4 text-slate-600">
              To become East Africa's most trusted mobility,
              tourism and logistics ecosystem.
            </p>
          </div>

        </div>

      </section>

      {/* STRATEGIC GOALS */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <h2 className="text-5xl font-black text-center">
          Strategic Goals
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">

          {[
            'Regional Expansion',
            'Tourism Marketplace',
            'Transport Integration',
            'Logistics Network',
            'Digital Innovation',
            'Sustainable Growth',
          ].map((goal) => (
            <div
              key={goal}
              className="bg-white p-8 rounded-3xl shadow-md"
            >
              <h3 className="font-bold text-xl">
                {goal}
              </h3>
            </div>
          ))}

        </div>

      </section>

      {/* UPCOMING PROJECTS */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <h2 className="text-5xl font-black text-center">
          Upcoming Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">

          {[
            'EaSafariRoute Expansion',
            'Tourism Information Centre',
            'Tourism Partner Directory',
            'Logistics Marketplace',
            'Mobile Application',
            'AI Travel Assistant',
          ].map((project) => (
            <div
              key={project}
              className="bg-white p-8 rounded-3xl shadow-md"
            >
              <h3 className="font-bold text-xl">
                {project}
              </h3>
            </div>
          ))}

        </div>

      </section>

      {/* HEADQUARTERS */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <h2 className="text-5xl font-black">
          Kisumu Headquarters
        </h2>

        <div className="mt-10 bg-white rounded-3xl p-8 shadow-md">

          <h3 className="font-bold text-xl">
            Jacqueline Osare
          </h3>

          <p className="text-slate-600">
            Liaison & Logistics Officer
          </p>

          <p className="mt-4">
            📧 jacqueline.susan@easafariroutes.com
          </p>

          <p>
            📍 Kisumu Headquarters, Kenya
          </p>

        </div>

      </section>

      {/* TEAM */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <h2 className="text-5xl font-black text-center">
          Regional Leadership & Operations Team
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {TEAM.map((member) => (
            <div
              key={member.email}
              className="bg-white rounded-3xl p-8 shadow-md"
            >

              <div
                className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.color} text-white flex items-center justify-center font-bold text-2xl`}
              >
                {member.initials}
              </div>

              <h3 className="mt-6 font-bold text-xl">
                {member.name}
              </h3>

              <p className="text-slate-500">
                {member.role}
              </p>

              <p className="mt-4">
                📍 {member.office}
              </p>

              <p className="break-words">
                📧 {member.email}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* MEDIA SECTION */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="bg-white rounded-3xl p-10 shadow-md">

          <h2 className="text-4xl font-black">
            Media & Communications
          </h2>

          <p className="mt-6 text-slate-600">
            Tourism information, destination guides,
            tourism news, travel research, photo galleries,
            featured destinations and tourism partner stories
            are coordinated through the Media & Communications Office.
          </p>

        </div>

      </section>

      {/* CONTACT DIRECTORY */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <h2 className="text-5xl font-black text-center">
          Corporate Contact Directory
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">

          <div className="bg-white p-8 rounded-3xl shadow-md">
            <h3 className="font-bold">General Enquiries</h3>
