import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title:
    'Tanzania Travel Guide — Safari, Wildlife, Zanzibar, Kilimanjaro & Travel Information | OSARE',
  description:
    'Complete Tanzania travel guide covering safari, Serengeti, Ngorongoro, Kilimanjaro, Zanzibar, national parks, beaches, transport, accommodation, entry requirements, costs, culture and travel planning.',
  path: '/guides/tanzania',
})

export default function TanzaniaGuidePage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* HERO */}
      <header className="bg-gradient-to-br from-green-900 via-emerald-800 to-teal-700 px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-200">
            East Africa Travel Guide
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Tanzania Travel Guide
          </h1>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-green-50">
            Discover Tanzania through safari, wildlife, mountains, beaches,
            islands, culture and adventure. From the Serengeti and Ngorongoro
            to Mount Kilimanjaro and Zanzibar, Tanzania offers some of East
            Africa&apos;s most diverse travel experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-4xl">
            <span>🦁</span>
            <span>🐘</span>
            <span>🦒</span>
            <span>🦓</span>
            <span>🦏</span>
            <span>🏔️</span>
            <span>🌴</span>
            <span>🏝️</span>
            <span>🐬</span>
          </div>

          <div className="mt-8 max-w-4xl rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur">
            <p className="text-sm leading-6 text-green-50">
              <strong className="text-white">Travel information:</strong>{' '}
              Entry requirements, visa rules, park conditions, health advice
              and other time-sensitive information should always be checked
              against the relevant official authority before travelling.
            </p>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* QUICK FACTS */}
        <section className="mb-14">
          <SectionHeading
            eyebrow="Quick Facts"
            title="Tanzania at a Glance"
            description="A quick introduction to Tanzania before you begin planning your trip."
          />

          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <FactCard
              icon="🏙️"
              title="Capital"
              value="Dodoma"
              color="bg-emerald-50 border-emerald-200"
            />

            <FactCard
              icon="🌍"
              title="Region"
              value="East Africa"
              color="bg-sky-50 border-sky-200"
            />

            <FactCard
              icon="💰"
              title="Currency"
              value="Tanzanian Shilling (TZS)"
              color="bg-amber-50 border-amber-200"
            />

            <FactCard
              icon="🗣️"
              title="Languages"
              value="Kiswahili and English"
              color="bg-purple-50 border-purple-200"
            />
          </div>
        </section>

        {/* WHY TANZANIA */}
        <section className="mb-14">
          <SectionHeading
            eyebrow="Discover Tanzania"
            title="Why Visit Tanzania?"
            description="Tanzania brings together wildlife, mountains, beaches, islands, culture and adventure in one destination."
          />

          <div className="mt-7 grid gap-6 md:grid-cols-3">
            <FeatureCard
              icon="🦁"
              title="World-Class Safari"
              text="Explore the Serengeti, Ngorongoro, Tarangire, Nyerere, Ruaha and other wildlife destinations."
              color="from-green-600 to-emerald-800"
            />

            <FeatureCard
              icon="🏔️"
              title="Mount Kilimanjaro"
              text="Experience Africa's highest mountain and the landscapes surrounding Kilimanjaro National Park."
              color="from-sky-500 to-blue-700"
            />

            <FeatureCard
              icon="🏝️"
              title="Zanzibar & The Coast"
              text="Combine a mainland safari with beaches, marine activities, history and culture across Zanzibar and the coast."
              color="from-cyan-500 to-teal-700"
            />
          </div>
        </section>

        {/* TRIP PLANNER */}
        <section className="mb-14">
          <SectionHeading
            eyebrow="Plan Your Trip"
            title="Tanzania Travel Information"
            description="Practical information for travelers planning a Tanzania journey."
          />

          <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <GuideCard
              icon="🛂"
              title="Entry & Visa"
              text="Understand visa applications, passports, entry requirements and travel documentation."
              color="bg-blue-50 border-blue-200"
            />

            <GuideCard
              icon="☀️"
              title="When to Visit"
              text="Learn how seasons can affect safari, beaches, mountains, wildlife and travel conditions."
              color="bg-amber-50 border-amber-200"
            />

            <GuideCard
              icon="🌦️"
              title="Weather & Climate"
              text="Tanzania has different climate patterns across safari areas, mountains, coast and islands."
              color="bg-sky-50 border-sky-200"
            />

            <GuideCard
              icon="🦁"
              title="National Parks & Wildlife"
              text="Explore Tanzania's national parks, conservation areas, wildlife and safari regions."
              color="bg-green-50 border-green-200"
            />

            <GuideCard
              icon="📍"
              title="Major Destinations"
              text="Discover safari towns, cities, mountains, lakes, coastlines and islands."
              color="bg-purple-50 border-purple-200"
            />

            <GuideCard
              icon="🚙"
              title="Safari Information"
              text="Understand safari regions, game drives, guides, park visits and safari planning."
              color="bg-orange-50 border-orange-200"
            />

            <GuideCard
              icon="🏨"
              title="Accommodation"
              text="Hotels, lodges, safari camps, guesthouses, resorts and island accommodation."
              color="bg-pink-50 border-pink-200"
            />

            <GuideCard
              icon="✈️"
              title="Transport & Getting Around"
              text="Domestic flights, roads, buses, trains, ferries and other transport options."
              color="bg-indigo-50 border-indigo-200"
            />

            <GuideCard
              icon="🚌"
              title="Local & Intercity Transport"
              text="Practical information about getting between cities, towns and tourist destinations."
              color="bg-teal-50 border-teal-200"
            />

            <GuideCard
              icon="💳"
              title="Money & Costs"
              text="Currency, payments, budgeting and practical cost considerations."
              color="bg-yellow-50 border-yellow-200"
            />

            <GuideCard
              icon="🩺"
              title="Health & Safety"
              text="General health, safety, emergency and travel-preparation information."
              color="bg-red-50 border-red-200"
            />

            <GuideCard
              icon="🤝"
              title="Culture & Etiquette"
              text="Learn about Tanzanian culture, Kiswahili, customs, food and respectful travel."
              color="bg-violet-50 border-violet-200"
            />

            <GuideCard
              icon="👨‍👩‍👧‍👦"
              title="Travel With Children"
              text="Useful planning considerations for families travelling around Tanzania."
              color="bg-lime-50 border-lime-200"
            />

            <GuideCard
              icon="📱"
              title="Connectivity & Internet"
              text="Mobile networks, SIM cards, internet access and communication."
              color="bg-cyan-50 border-cyan-200"
            />

            <GuideCard
              icon="🌱"
              title="Responsible Tourism"
              text="Wildlife conservation, community tourism, environmental care and responsible travel."
              color="bg-green-50 border-green-200"
            />
          </div>
        </section>

        {/* SAFARI WILDLIFE */}
        <section className="mb-14 rounded-3xl bg-gradient-to-br from-green-800 to-emerald-900 p-8 text-white shadow-lg sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-200">
            Wildlife & Safari
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Tanzania Safari & Wildlife
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-green-50">
            Tanzania is one of East Africa&apos;s major safari destinations.
            Travelers can choose between large northern safari landscapes,
            southern wilderness areas, western wildlife destinations and
            coastal experiences.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <AnimalCard emoji="🦁" title="Lions" />
            <AnimalCard emoji="🐘" title="Elephants" />
            <AnimalCard emoji="🦒" title="Giraffes" />
            <AnimalCard emoji="🦓" title="Zebras" />
            <AnimalCard emoji="🦏" title="Rhinoceros" />
            <AnimalCard emoji="🐃" title="Buffalo" />
            <AnimalCard emoji="🦛" title="Hippos" />
            <AnimalCard emoji="🐆" title="Leopards" />
          </div>
        </section>

        {/* NATIONAL PARKS */}
        <section className="mb-14">
          <SectionHeading
            eyebrow="Explore Wildlife"
            title="National Parks & Protected Areas"
            description="Different parks offer different landscapes, wildlife experiences and safari styles."
          />

          <div className="mt-7 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <DestinationCard
              icon="🦁"
              title="Serengeti National Park"
              text="Famous for vast plains, wildlife and the annual movement of wildebeest and other animals. A major destination for classic Tanzania safari experiences."
            />

            <DestinationCard
              icon="🦏"
              title="Ngorongoro Conservation Area"
              text="A spectacular highland and crater landscape where wildlife, conservation and Maasai communities form part of the wider travel experience."
            />

            <DestinationCard
              icon="🐘"
              title="Tarangire National Park"
              text="Known for large elephant populations, baobab landscapes and wildlife-rich seasonal areas."
            />

            <DestinationCard
              icon="🏔️"
              title="Kilimanjaro National Park"
              text="Home to Mount Kilimanjaro, Africa's highest mountain, with routes and landscapes extending through different ecological zones."
            />

            <DestinationCard
              icon="🌳"
              title="Lake Manyara National Park"
              text="A compact but diverse park with forest, Rift Valley landscapes, wildlife and birdlife."
            />

            <DestinationCard
              icon="🐘"
              title="Nyerere National Park"
              text="A major southern Tanzania destination with the Rufiji River, boat experiences, wildlife and large wilderness landscapes."
            />

            <DestinationCard
              icon="🦁"
              title="Ruaha National Park"
              text="A vast southern Tanzania wilderness known for wildlife, scenery and large elephant populations."
            />

            <DestinationCard
              icon="🦛"
              title="Mikumi National Park"
              text="An accessible southern safari destination with grasslands and opportunities to see a range of wildlife."
            />

            <DestinationCard
              icon="🐒"
              title="Gombe National Park"
              text="A western Tanzania destination especially associated with chimpanzee experiences and forest landscapes."
            />

            <DestinationCard
              icon="🌿"
              title="Mahale Mountains"
              text="A remote western Tanzania destination combining forested mountains, Lake Tanganyika and chimpanzee experiences."
            />

            <DestinationCard
              icon="🌸"
              title="Kitulo National Park"
              text="Highland scenery, seasonal flowers, grasslands and a different side of Tanzania's natural environment."
            />

            <DestinationCard
              icon="🌋"
              title="Mkomazi National Park"
              text="A northern protected area offering wildlife, dry landscapes and connections to wider conservation areas."
            />
          </div>
        </section>

        {/* DESTINATIONS */}
        <section className="mb-14">
          <SectionHeading
            eyebrow="Where To Go"
            title="Major Tanzania Destinations"
            description="Choose your destination according to the experience you want: safari, mountains, beaches, culture, cities or islands."
          />

          <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <DestinationCard
              icon="🦁"
              title="Serengeti"
              text="A flagship Tanzania safari destination famous for expansive plains, wildlife and seasonal animal movements."
            />

            <DestinationCard
              icon="🦏"
              title="Ngorongoro"
              text="A dramatic crater and conservation landscape, often combined with northern safari itineraries."
            />

            <DestinationCard
              icon="🐘"
              title="Tarangire"
              text="A strong choice for wildlife viewing, elephants and distinctive baobab scenery."
            />

            <DestinationCard
              icon="🏔️"
              title="Mount Kilimanjaro"
              text="Africa's highest mountain and one of Tanzania's most recognizable natural landmarks."
            />

            <DestinationCard
              icon="🏙️"
              title="Arusha"
              text="A major northern Tanzania tourism hub and common starting point for safari and Kilimanjaro journeys."
            />

            <DestinationCard
              icon="🌆"
              title="Dar es Salaam"
              text="Tanzania's major commercial city and an important gateway to the coast and southern travel routes."
            />

            <DestinationCard
              icon="🌴"
              title="Moshi"
              text="A popular base for Kilimanjaro-related travel and northern Tanzania exploration."
            />

            <DestinationCard
              icon="🌊"
              title="Lake Victoria"
              text="Africa's largest lake and an important destination for communities, culture, fishing and regional travel."
            />

            <DestinationCard
              icon="🌊"
              title="Lake Tanganyika"
              text="A vast western lake associated with Mahale, Gombe and several distinctive lakeside destinations."
            />

            <DestinationCard
              icon="🌋"
              title="Lake Natron"
              text="A dramatic northern landscape near the Great Rift Valley with volcanic scenery and distinctive birdlife."
            />

            <DestinationCard
              icon="🏛️"
              title="Bagamoyo"
              text="A historic coastal town with cultural and historical attractions and access to the Tanzanian coast."
            />

            <DestinationCard
              icon="🏺"
              title="Kilwa"
              text="A historic coastal destination associated with Swahili heritage and archaeological sites."
            />
          </div>
        </section>

        {/* SAFARI PLANNING */}
        <section className="mb-14 rounded-3xl border border-amber-200 bg-amber-50 p-8 sm:p-10">
          <div className="text-5xl">🚙 🦁 🐘</div>

          <h2 className="mt-5 text-3xl font-bold text-amber-950">
            How to Plan a Tanzania Safari
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-amber-900">
            Tanzania offers several different safari regions. Your choice
            should depend on your available time, preferred wildlife
            experience, travel season, budget and whether you want to combine
            safari with mountains, beaches or Zanzibar.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <PlanningCard
              number="01"
              title="Choose Your Region"
              text="Northern, southern and western Tanzania offer different landscapes and safari experiences."
            />

            <PlanningCard
              number="02"
              title="Choose Your Transport"
              text="Safari vehicles, domestic flights and road connections can be combined depending on your itinerary."
            />

            <PlanningCard
              number="03"
              title="Add Zanzibar"
              text="Many travelers combine a mainland safari or Kilimanjaro experience with Zanzibar's beaches and culture."
            />
          </div>
        </section>

        {/* KILIMANJARO */}
        <section className="mb-14 rounded-3xl bg-gradient-to-br from-sky-700 to-blue-900 p-8 text-white shadow-lg sm:p-10">
          <div className="text-5xl">🏔️</div>

          <h2 className="mt-5 text-3xl font-bold">
            Mount Kilimanjaro
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-sky-50">
            Mount Kilimanjaro rises to 5,895 metres and is Africa&apos;s
            highest mountain. Kilimanjaro National Park protects the mountain
            and its surrounding landscapes.
          </p>

          <div className="mt-7 grid gap-5 md:grid-cols-3">
            <InfoMiniCard
              icon="🥾"
              title="Mountain Routes"
              text="Several established routes are used for climbing Kilimanjaro."
            />

            <InfoMiniCard
              icon="🌿"
              title="Ecological Zones"
              text="The mountain passes through changing vegetation and climatic zones."
            />

            <InfoMiniCard
              icon="🧭"
              title="Preparation"
              text="Proper preparation, qualified guides and attention to altitude are essential."
            />
          </div>
        </section>

        {/* ZANZIBAR */}
        <section className="mb-14 rounded-3xl bg-gradient-to-br from-cyan-600 via-teal-600 to-emerald-700 p-8 text-white shadow-xl sm:p-10">
          <div className="flex flex-wrap gap-3 text-4xl">
            <span>🏝️</span>
            <span>🌴</span>
            <span>🐬</span>
            <span>🤿</span>
            <span>🕌</span>
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-cyan-100">
            Tanzania Mainland + Zanzibar
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Continue Your Journey to Zanzibar
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-teal-50">
            Zanzibar adds a completely different dimension to a Tanzania
            journey. Travelers can combine mainland safari or mountain
            experiences with beaches, marine activities, Stone Town, spices,
            culture and island life.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-4">
            <InfoMiniCard
              icon="🏖️"
              title="Beaches"
              text="Indian Ocean beaches and island resorts."
            />

            <InfoMiniCard
              icon="🤿"
              title="Marine Life"
              text="Snorkeling, diving, dolphins and coral environments."
            />

            <InfoMiniCard
              icon="🕌"
              title="Stone Town"
              text="History, architecture, markets and Swahili culture."
            />

            <InfoMiniCard
              icon="🌿"
              title="Spice Experiences"
              text="Explore Zanzibar's spice-growing heritage and local culture."
            />
          </div>

          <Link
            href="/guides/tanzania/zanzibar"
            className="mt-8 inline-flex rounded-full bg-white px-6 py-3 font-bold text-teal-800 shadow transition hover:bg-teal-50"
          >
            Explore the Zanzibar Travel Guide →
          </Link>
        </section>

        {/* ACCOMMODATION */}
        <section className="mb-14">
          <SectionHeading
            eyebrow="Stay"
            title="Accommodation in Tanzania"
            description="Accommodation ranges from city hotels and budget guesthouses to safari camps, lodges, beach resorts and luxury island properties."
          />

          <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <FactCard
              icon="🏨"
              title="Hotels"
              value="Cities and major tourist centres"
              color="bg-blue-50 border-blue-200"
            />

            <FactCard
              icon="⛺"
              title="Safari Camps"
              value="Wildlife destinations"
              color="bg-green-50 border-green-200"
            />

            <FactCard
              icon="🏡"
              title="Guesthouses"
              value="Local and budget stays"
              color="bg-amber-50 border-amber-200"
            />

            <FactCard
              icon="🏝️"
              title="Beach Resorts"
              value="Coast and Zanzibar"
              color="bg-cyan-50 border-cyan-200"
            />
          </div>
        </section>

        {/* TRANSPORT */}
        <section className="mb-14">
          <SectionHeading
            eyebrow="Getting Around"
            title="Transport in Tanzania"
            description="Tanzania is a large country, so transport planning is an important part of building your itinerary."
          />

          <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <FactCard
              icon="✈️"
              title="Domestic Flights"
              value="Useful for long distances"
              color="bg-blue-50 border-blue-200"
            />

            <FactCard
              icon="🚌"
              title="Buses"
              value="Major intercity option"
              color="bg-orange-50 border-orange-200"
            />

            <FactCard
              icon="🚙"
              title="Safari Vehicles"
              value="Wildlife and park travel"
              color="bg-green-50 border-green-200"
            />

            <FactCard
              icon="⛴️"
              title="Ferries"
              value="Important for some coastal routes"
              color="bg-cyan-50 border-cyan-200"
            />
          </div>
        </section>

        {/* LOCAL TRANSPORT */}
        <section className="mb-14 rounded-3xl border border-indigo-200 bg-indigo-50 p-8 sm:p-10">
          <div className="text-4xl">🚌 🚕 🚐 🛵</div>

          <h2 className="mt-5 text-3xl font-bold text-indigo-950">
            Local & Intercity Transport
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-indigo-900">
            Local transport varies between cities, towns, safari areas and
            islands. Travelers may encounter buses, minibuses, taxis,
            ride-hailing services, private transfers and other local
            transport options.
          </p>

          <p className="mt-4 max-w-4xl text-sm leading-6 text-indigo-800">
            For long journeys, check departure times, routes, luggage
            arrangements and road conditions before travelling.
          </p>
        </section>

        {/* MONEY */}
        <section className="mb-14">
          <SectionHeading
            eyebrow="Budget"
            title="Money & Costs in Tanzania"
            description="Your travel budget depends heavily on the style of trip, transport, accommodation and activities."
          />

          <div className="mt-7 grid gap-5 md:grid-cols-3">
            <BudgetCard
              icon="💵"
              title="Budget Travel"
              text="Guesthouses, local transport, simple meals and selected activities can reduce daily costs."
            />

            <BudgetCard
              icon="🚙"
              title="Safari Travel"
              text="Safari costs can vary considerably depending on park fees, vehicle arrangements, accommodation, guide services and itinerary length."
            />

            <BudgetCard
              icon="💎"
              title="Luxury Travel"
              text="Luxury lodges, private vehicles, premium camps, flights and island resorts can significantly increase the total cost."
            />
          </div>
        </section>

        {/* CULTURE */}
        <section className="mb-14">
          <SectionHeading
            eyebrow="People & Culture"
            title="Culture & Etiquette"
            description="Tanzania is culturally diverse, with Kiswahili playing an important role in everyday life and tourism."
          />

          <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <CultureCard
              icon="🗣️"
              title="Kiswahili"
              text="A few Kiswahili words can make everyday interactions more welcoming."
            />

            <CultureCard
              icon="🍛"
              title="Food"
              text="Try local dishes and regional flavours while respecting local customs."
            />

            <CultureCard
              icon="🤝"
              title="Respect"
              text="Dress and behave respectfully, especially in communities and religious areas."
            />

            <CultureCard
              icon="📷"
              title="Photography"
              text="Ask permission before photographing people or sensitive cultural situations."
            />
          </div>
        </section>

        {/* FAMILY */}
        <section className="mb-14 rounded-3xl border border-lime-200 bg-lime-50 p-8 sm:p-10">
          <div className="text-4xl">👨‍👩‍👧‍👦 🦒</div>

          <h2 className="mt-5 text-3xl font-bold text-lime-950">
            Travelling With Children
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-lime-900">
            Tanzania can offer memorable family experiences, including
            wildlife, beaches, cultural activities and nature. Families
            should consider travel times, accommodation facilities, vehicle
            arrangements, health requirements and age restrictions for
            particular activities.
          </p>
        </section>

        {/* CONNECTIVITY */}
        <section className="mb-14">
          <SectionHeading
            eyebrow="Stay Connected"
            title="Connectivity & Internet"
            description="Mobile connectivity is useful for navigation, communication, bookings and keeping in touch while travelling."
          />

          <div className="mt-7 grid gap-5 md:grid-cols-3">
            <InfoCard
              icon="📱"
              title="Mobile Networks"
              text="Consider purchasing a local SIM or using an appropriate roaming plan."
              color="bg-cyan-50 border-cyan-200"
            />

            <InfoCard
              icon="📶"
              title="Internet"
              text="Connectivity can vary significantly between cities, rural areas, safari parks and remote islands."
              color="bg-blue-50 border-blue-200"
            />

            <InfoCard
              icon="🔋"
              title="Power"
              text="Carry charging equipment and consider a power bank when travelling in remote areas."
              color="bg-amber-50 border-amber-200"
            />
          </div>
        </section>

        {/* RESPONSIBLE TOURISM */}
        <section className="mb-14 rounded-3xl bg-gradient-to-br from-green-700 to-emerald-900 p-8 text-white sm:p-10">
          <div className="text-5xl">🌱 🐘 🦁</div>

          <h2 className="mt-5 text-3xl font-bold">
            Responsible Tourism in Tanzania
          </h2>

          <div className="mt-7 grid gap-5 md:grid-cols-3">
            <ResponsibleCard
              title="Respect Wildlife"
              text="Maintain safe distances, follow guide instructions and never feed or disturb wild animals."
            />

            <ResponsibleCard
              title="Support Communities"
              text="Use local businesses, guides and services where possible and respect local communities."
            />

            <ResponsibleCard
              title="Protect Nature"
              text="Reduce waste, respect protected areas and help preserve Tanzania's natural environments."
            />
          </div>
        </section>

        {/* VISA */}
        <section className="mb-14 rounded-3xl border border-blue-200 bg-blue-50 p-8 sm:p-10">
          <div className="text-4xl">🛂 ✈️</div>

          <h2 className="mt-5 text-3xl font-bold text-blue-950">
            Tanzania Entry & Visa Information
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-blue-900">
            Tanzania operates an official electronic visa application system.
            The official system covers travel to the United Republic of
            Tanzania, including Tanzania Mainland and Zanzibar.
          </p>

          <div className="mt-7 grid gap-5 md:grid-cols-3">
            <InfoMiniCard
              icon="📘"
              title="Passport"
              text="Check passport validity and available visa pages before travelling."
            />

            <InfoMiniCard
              icon="💻"
              title="Online Application"
              text="Use the official Tanzania Immigration visa system when an online visa is required."
            />

            <InfoMiniCard
              icon="⚠️"
              title="Check Before Travel"
              text="Visa requirements differ by nationality and can change."
            />
          </div>

          <a
            href="https://visa.immigration.go.tz/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full bg-blue-700 px-6 py-3 font-bold text-white shadow transition hover:bg-blue-800"
          >
            Official Tanzania eVisa Portal →
          </a>

          <p className="mt-4 text-xs text-blue-800">
            Always verify current requirements directly with Tanzania
            Immigration before making travel arrangements.
          </p>
        </section>

        {/* HEALTH AND SAFETY */}
        <section className="mb-14 rounded-3xl border border-red-200 bg-red-50 p-8 sm:p-10">
          <div className="text-4xl">⚠️ 🩺</div>

          <h2 className="mt-5 text-3xl font-bold text-red-950">
            Health & Safety
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-red-900">
            Travelers should obtain appropriate travel health advice before
            visiting Tanzania and check current official travel information.
            Conditions can vary between mainland Tanzania, safari areas,
            cities and Zanzibar.
          </p>

          <div className="mt-7 grid gap-5 md:grid-cols-3">
            <SafetyCard
              icon="🩺"
              title="Health Preparation"
              text="Discuss destination-specific health requirements with an appropriate medical professional before travel."
            />

            <SafetyCard
              icon="🚙"
              title="Safari Safety"
              text="Follow your guide's instructions and remain inside designated areas and vehicles where required."
            />

            <SafetyCard
              icon="📋"
              title="Travel Advice"
              text="Check current government travel advice and official Tanzanian information before departure."
            />
          </div>
        </section>

        {/* OFFICIAL INFORMATION */}
        <section className="mb-14 rounded-3xl border border-amber-300 bg-amber-50 p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">
            Official & Accredited Information
          </p>

          <h2 className="mt-2 text-3xl font-bold text-amber-950">
            Tanzania Official Tourism Information
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-amber-900">
            Tanzania&apos;s official government and tourism organizations
            provide information about destinations, tourism products, parks,
            travel services and entry requirements. Time-sensitive information
            should always be checked against the current official source.
          </p>

          <div className="mt-7 grid gap-5 md:grid-cols-2">
            <SourceCard
              title="Tanzania Government"
              text="Government information about natural resources, tourism and the country's major tourism attractions."
            />

            <SourceCard
              title="Tanzania Tourism"
              text="Destination and tourism information covering safari, mountains, coast, culture and activities."
            />

            <SourceCard
              title="Tanzania Immigration"
              text="Official visa and immigration information for travelers entering Tanzania."
            />

            <SourceCard
              title="Tanzania National Parks"
              text="Official information about national parks, wildlife conservation and park visits."
            />
          </div>

          <div className="mt-7 flex flex-wrap gap-4">
            <a
              href="https://www.tanzania.go.tz/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-amber-700 px-5 py-3 text-sm font-bold text-white hover:bg-amber-800"
            >
              Tanzania Government →
            </a>

            <a
              href="https://www.tanzaniaparks.go.tz/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-green-700 px-5 py-3 text-sm font-bold text-white hover:bg-green-800"
            >
              Tanzania National Parks →
            </a>

            <a
              href="https://visa.immigration.go.tz/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-blue-700 px-5 py-3 text-sm font-bold text-white hover:bg-blue-800"
            >
              Tanzania Immigration →
            </a>
          </div>

          <div className="mt-7 rounded-2xl bg-white p-5 text-sm text-gray-700 shadow-sm">
            <p>
              <strong>Last reviewed:</strong> September 2026
            </p>

            <p className="mt-2">
              <strong>Important:</strong> Always verify current visa,
              immigration, health, park and safety requirements before travel.
            </p>
          </div>
        </section>

        {/* EA SAFARI ROUTES CONNECTION */}
        <section className="mb-14 rounded-3xl bg-gradient-to-r from-emerald-700 to-green-800 p-8 text-white shadow-xl sm:p-10">
          <div className="text-5xl">🧭 🚙 🏨 🦁</div>

          <h2 className="mt-5 text-3xl font-bold">
            Find Tanzania Travel Services
          </h2>

          <p className="mt-4 max-w-4xl leading-7 text-green-50">
            Planning Tanzania can involve safari operators, accommodation,
            transport, local experiences and connections between destinations.
            eaSafariRoutes is building a searchable travel platform to help
            travelers discover tourism services and operators across East
            Africa.
          </p>

          <p className="mt-4 max-w-4xl leading-7 text-green-50">
            Explore Tanzania, compare available travel options and connect
            directly with tourism businesses through the eaSafariRoutes
            platform.
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-3 font-bold text-green-800 shadow transition hover:bg-green-50"
          >
            Search eaSafariRoutes →
          </Link>
        </section>

        {/* USEFUL CONTACTS */}
        <section className="mb-14">
          <SectionHeading
            eyebrow="Useful Information"
            title="Useful Contacts & Official Links"
            description="Keep official information available when preparing your journey."
          />

          <div className="mt-7 grid gap-5 md:grid-cols-3">
            <ContactCard
              icon="🛂"
              title="Tanzania Immigration"
              text="Use the official immigration and visa system for current entry information."
            />

            <ContactCard
              icon="🌳"
              title="Tanzania National Parks"
              text="Use official park information when planning national park visits."
            />

            <ContactCard
              icon="🏛️"
              title="Government Information"
              text="Check current government information for official tourism and national information."
            />
          </div>
        </section>

        {/* SOURCE RECORD */}
        <section className="mb-12 rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">
            Information Source Record
          </h2>

          <div className="mt-4 space-y-2 text-sm text-gray-600">
            <p>
              <strong>Country:</strong> Tanzania
            </p>

            <p>
              <strong>Region:</strong> East Africa
            </p>

            <p>
              <strong>Primary reference:</strong> Official Tanzania government,
              tourism, immigration and national parks information.
            </p>

            <p>
              <strong>Last reviewed:</strong> September 2026
            </p>

            <p>
              <strong>Reminder:</strong> Time-sensitive information must be
              verified before travel.
            </p>
          </div>
        </section>

        {/* NAVIGATION */}
        <section className="border-t pt-8">
          <div className="flex flex-wrap gap-5">
            <Link
              href="/guides"
              className="font-semibold text-green-700 hover:underline"
            >
              ← Back to Travel Guides
            </Link>

            <Link
              href="/guides/tanzania/zanzibar"
              className="font-semibold text-teal-700 hover:underline"
            >
              Explore Zanzibar →
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}

/* COMPONENTS */

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
        {eyebrow}
      </p>

      <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </h2>

      <p className="mt-3 max-w-3xl leading-7 text-gray-600">
        {description}
      </p>
    </div>
  )
}

function FactCard({ icon, title, value, color }) {
  return (
    <div
      className={`rounded-2xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${color}`}
    >
      <div className="text-3xl">{icon}</div>

      <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>

      <p className="mt-2 text-gray-700">{value}</p>
    </div>
  )
}

function FeatureCard({ icon, title, text, color }) {
  return (
    <article
      className={`rounded-2xl bg-gradient-to-br ${color} p-7 text-white shadow-md transition hover:-translate-y-1 hover:shadow-xl`}
    >
      <div className="text-5xl">{icon}</div>

      <h3 className="mt-5 text-xl font-bold">{title}</h3>

      <p className="mt-3 leading-7 text-white/90">{text}</p>
    </article>
  )
}

function GuideCard({ icon, title, text, color }) {
  return (
    <article
      className={`rounded-2xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${color}`}
    >
      <div className="text-3xl">{icon}</div>

      <h3 className="mt-4 text-lg font-bold text-gray-900">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-gray-700">{text}</p>
    </article>
  )
}

function AnimalCard({ emoji, title }) {
  return (
    <div className="rounded-2xl border border-white/20 bg-white/10 p-5 text-center backdrop-blur">
      <div className="text-5xl">{emoji}</div>

      <p className="mt-3 font-semibold">{title}</p>
    </div>
  )
}

function DestinationCard({ icon, title, text }) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="text-4xl">{icon}</div>

      <h3 className="mt-4 text-xl font-bold text-gray-900">{title}</h3>

      <p className="mt-3 leading-7 text-gray-600">{text}</p>
    </article>
  )
}

function PlanningCard({ number, title, text }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-700 font-bold text-white">
        {number}
      </div>

      <h3 className="mt-5 font-bold text-amber-950">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-amber-900">{text}</p>
    </div>
  )
}

function InfoMiniCard({ icon, title, text }) {
  return (
    <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
      <div className="text-3xl">{icon}</div>

      <h3 className="mt-3 font-bold">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-white/90">{text}</p>
    </div>
  )
}

function BudgetCard({ icon, title, text }) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
      <div className="text-4xl">{icon}</div>

      <h3 className="mt-4 text-xl font-bold text-gray-900">{title}</h3>

      <p className="mt-3 leading-7 text-gray-600">{text}</p>
    </article>
  )
}

function CultureCard({ icon, title, text }) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="text-4xl">{icon}</div>

      <h3 className="mt-4 font-bold text-gray-900">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-gray-600">{text}</p>
    </article>
  )
}

function InfoCard({ icon, title, text, color }) {
  return (
    <article className={`rounded-2xl border p-6 shadow-sm ${color}`}>
      <div className="text-4xl">{icon}</div>

      <h3 className="mt-4 font-bold text-gray-900">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-gray-700">{text}</p>
    </article>
  )
}

function ResponsibleCard({ title, text }) {
  return (
    <div className="rounded-2xl border border-white/20 bg-white/10 p-6">
      <h3 className="font-bold">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-green-50">{text}</p>
    </div>
  )
}

function SafetyCard({ icon, title, text }) {
  return (
    <div className="rounded-2xl border border-red-200 bg-white p-6 shadow-sm">
      <div className="text-4xl">{icon}</div>

      <h3 className="mt-4 font-bold text-red-950">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-red-900">{text}</p>
    </div>
  )
}

function SourceCard({ title, text }) {
  return (
    <div className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm">
      <h3 className="font-bold text-amber-950">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-amber-900">{text}</p>
    </div>
  )
}

function ContactCard({ icon, title, text }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="text-3xl">{icon}</div>

      <h3 className="mt-4 font-bold text-gray-900">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-gray-600">{text}</p>
    </div>
  )
}
