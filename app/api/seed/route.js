import { NextResponse } from 'next/server';
import { query } from '../../../lib/db';

export async function GET(request) {
  try {
    await query(`
      CREATE TABLE IF NOT EXISTS vendors (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        category TEXT,
        location TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    const vendors = [
      { name: "Serengeti Explorer", category: "Safari", location: "Tanzania" },
      { name: "Mara Migration Camp", category: "Camp", location: "Kenya" },
      { name: "Kilimanjaro Summit Tours", category: "Trekking", location: "Tanzania" },
      { name: "Zanzibar Beach Resort", category: "Hotel", location: "Zanzibar" },
      { name: "Ngorongoro Crater Lodge", category: "Safari", location: "Tanzania" },
      { name: "Amboseli Elephant Camp", category: "Camp", location: "Kenya" },
      { name: "Tsavo Wilderness Lodge", category: "Safari", location: "Kenya" },
      { name: "Lake Nakuru Retreat", category: "Hotel", location: "Kenya" },
      { name: "Bwindi Gorilla Trek", category: "Wildlife", location: "Uganda" },
      { name: "Murchison Falls Safari", category: "Safari", location: "Uganda" },
      { name: "Queen Elizabeth Park Lodge", category: "Camp", location: "Uganda" },
      { name: "Kigali Serena Hotel", category: "Hotel", location: "Rwanda" },
      { name: "Volcanoes National Park Lodge", category: "Wildlife", location: "Rwanda" },
      { name: "Victoria Falls Safari", category: "Adventure", location: "Zimbabwe" },
      { name: "Hwange National Park Camp", category: "Safari", location: "Zimbabwe" },
      { name: "Chobe Game Lodge", category: "Safari", location: "Botswana" },
      { name: "Okavango Delta Camp", category: "Camp", location: "Botswana" },
      { name: "Etosha Pan Safari", category: "Safari", location: "Namibia" },
      { name: "Sossusvlei Desert Lodge", category: "Hotel", location: "Namibia" },
      { name: "Cape Town Coastline Tours", category: "Tours", location: "South Africa" },
      { name: "Kruger National Park Camp", category: "Safari", location: "South Africa" },
      { name: "Drakensberg Mountain Retreat", category: "Adventure", location: "South Africa" },
      { name: "Garden Route Adventures", category: "Tours", location: "South Africa" },
      { name: "Cairo Pyramids View Hotel", category: "Hotel", location: "Egypt" },
      { name: "Luxor Nile Cruise", category: "Cruise", location: "Egypt" },
      { name: "Marrakech Medina Riad", category: "Hotel", location: "Morocco" },
      { name: "Atlas Mountain Guides", category: "Adventure", location: "Morocco" },
      { name: "Sahara Desert Camp", category: "Camp", location: "Morocco" },
      { name: "Seychelles Island Resort", category: "Beach", location: "Seychelles" },
      { name: "Mauritius Lagoon Hotel", category: "Beach", location: "Mauritius" },
      { name: "Madagascar Lemur Forest Camp", category: "Wildlife", location: "Madagascar" },
      { name: "Zanzibar Spice Tour Agency", category: "Tours", location: "Zanzibar" },
      { name: "Mombasa Beach Hotel", category: "Hotel", location: "Kenya" },
      { name: "Diani Beach Resort", category: "Beach", location: "Kenya" },
      { name: "Nairobi City Tours", category: "Tours", location: "Kenya" },
      { name: "Tarangire Safari Lodge", category: "Safari", location: "Tanzania" },
      { name: "Lake Manyara Tree Lodge", category: "Camp", location: "Tanzania" },
      { name: "Ruaha National Park Camp", category: "Safari", location: "Tanzania" },
      { name: "Selous Game Reserve Lodge", category: "Safari", location: "Tanzania" }
    ];

    let insertedCount = 0;
    for (const v of vendors) {
      await query(
        `INSERT INTO vendors (name, category, location) VALUES ($1, $2, $3) ON CONFLICT DO NOTHING`,
        [v.name, v.category, v.location]
      );
      insertedCount++;
    }

    return NextResponse.json({
      success: true,
      inserted: insertedCount,
      message: `Successfully seeded all ${insertedCount} vendors into Neon Postgres!`
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
