export async function GET(request) {
  // ← ADD THIS AUTH CHECK
  const auth = await requireAdmin(request);
  
  if (auth.error) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  try {
    // 1. Ensure your vendors table exists in Neon
    await query(`
      CREATE TABLE IF NOT EXISTS vendors (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        category TEXT,
        location TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    // Example sample vendors array (replace or expand with your 39 vendors)
    const vendors = [
      { name: "Serengeti Explorer", category: "Safari", location: "Tanzania" },
      { name: "Mara Migration Camp", category: "Camp", location: "Kenya" },
      // ... add your vendors here
    ];
    let insertedCount = 0;
    // 2. Insert vendors into Neon PostgreSQL
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
      message: `Successfully seeded ${insertedCount} vendors into Neon!`
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
