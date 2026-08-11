import { NextResponse } from "next/server";
import { query } from "@/lib/db"; // adjust import path to match your project
import { requireAdmin } from "@/lib/auth";

export async function GET(request) {
  const auth = await requireAdmin(request);
  if (auth.error) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  try {
    // 1. Make sure listings table exists with the full schema your frontend reads
    await query(`
      CREATE TABLE IF NOT EXISTS listings (
        id SERIAL PRIMARY KEY,
        type TEXT,
        category TEXT,
        title TEXT NOT NULL,
        vendor TEXT,
        vendor_office TEXT,
        location TEXT,
        map_link TEXT,
        description TEXT,
        includes TEXT,
        price_value NUMERIC,
        currency TEXT,
        price_label TEXT,
        off_peak_label TEXT,
        season TEXT,
        image TEXT,
        keywords TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // 2. Your real 39 vendors — replace this array with your actual data
    //    (pull from your vendor sheet / CSV, one object per row)
    const listings = [
      {
        type: "Safari",
        category: "Safari",
        title: "Serengeti Explorer",
        vendor: "Serengeti Explorer Ltd",
        vendorOffice: "Arusha, Tanzania",
        location: "Serengeti, Tanzania",
        mapLink: "",
        description: "",
        includes: "",
        priceValue: null,
        currency: "USD",
        priceLabel: "",
        offPeakLabel: "",
        season: "",
        image: "",
        keywords: "",
      },
      // ... add the remaining 38 vendors here in the same shape
    ];

    let insertedCount = 0;

    // 3. Insert into listings, not vendors — this is the table your site actually reads
    for (const v of listings) {
      await query(
        `INSERT INTO listings
          (type, category, title, vendor, vendor_office, location, map_link,
           description, includes, price_value, currency, price_label,
           off_peak_label, season, image, keywords)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16)
         ON CONFLICT DO NOTHING`,
        [
          v.type, v.category, v.title, v.vendor, v.vendorOffice, v.location,
          v.mapLink, v.description, v.includes, v.priceValue, v.currency,
          v.priceLabel, v.offPeakLabel, v.season, v.image, v.keywords,
        ]
      );
      insertedCount++;
    }

    return NextResponse.json({
      success: true,
      inserted: insertedCount,
      message: `Successfully seeded ${insertedCount} listings into Neon!`,
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
