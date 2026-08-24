// KATO member contact scraper — one-off harvest route.
//
// Drop at: app/api/kato-harvest/route.ts   (or pages/api/kato-harvest.ts)
// Run once:  https://www.easafariroutes.com/api/kato-harvest
// Returns:   CSV of every KATO member with phone, email, address, website.
//
// DELETE THIS ROUTE once you have the CSV. Same lesson as debug-listingstable:
// an open endpoint that harvests third-party contacts is not something to
// leave on a public domain.
//
// Runtime: ~400 requests at 400ms spacing = about 3 minutes. If your host
// caps function duration (Vercel free tier is 10s), run it with ?from=0&to=50
// and step through in batches, or run the same logic locally with `node`.
//
// Before you use the output: KATO publishes these as trade contacts, and its
// terms of service and Kenya's Data Protection Act both apply to bulk
// outreach. Identify yourself and your company in every first contact, and
// honour opt-outs. KATO also invites direct contact at info@katokenya.org —
// asking them for a partnership list is faster than 397 cold calls, and it
// keeps you on the right side of the association you want vendors from.

const BASE = "https://katokenya.org";
const DIRECTORY = `${BASE}/kato-members-directory/`;
const PROFILE = `${BASE}/membership-account/profile/`;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

function decode(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&#8217;|&#039;|&#39;/g, "'")
    .replace(/&#8211;/g, "-")
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function csvCell(v: string): string {
  return `"${(v ?? "").replace(/"/g, '""')}"`;
}

// Normalise the many phone formats KATO stores into E.164 Kenyan numbers.
// Handles: "(070) 546-9726", "0202667271/4or0722514841/0714606886",
//          "+254 722 123 456", "0722 123456".
function normalisePhones(raw: string): string[] {
  if (!raw) return [];
  const out = new Set<string>();
  const chunks = raw.split(/or|\/|,|;|\s{2,}/i);
  for (const chunk of chunks) {
    const digits = chunk.replace(/\D/g, "");
    if (digits.length < 9) continue;
    let n = digits;
    if (n.startsWith("254")) n = n.slice(3);
    else if (n.startsWith("0")) n = n.slice(1);
    // Kenyan subscriber numbers are 9 digits after the country code.
    if (n.length > 9) n = n.slice(-9);
    if (n.length === 9) out.add(`+254${n}`);
  }
  return [...out];
}

async function getSlugs(): Promise<{ slug: string; name: string; level: string }[]> {
  const rows: { slug: string; name: string; level: string }[] = [];
  for (let page = 1; page <= 10; page++) {
    const url = page === 1 ? DIRECTORY : `${DIRECTORY}?ps&pn=${page}&limit=50`;
    const html = await fetch(url, { headers: { "user-agent": "Mozilla/5.0" } }).then((r) => r.text());
    // Each row: profile link, then the member name, then the level cell.
    const re = /membership-account\/profile\/([a-z0-9-]+)"[^>]*>([^<]+)<\/a>[\s\S]{0,400?}?/gi;
    const seen = new Set<string>();
    let m: RegExpExecArray | null;
    while ((m = re.exec(html))) {
      const slug = m[1];
      const name = decode(m[2]);
      if (!name || seen.has(slug)) continue;
      seen.add(slug);
      // Level sits in the same table row; grab the nearest match after the link.
      const after = html.slice(m.index, m.index + 1200);
      const lvl = after.match(/(Category [A-E]|Associate Member|Affiliates|Provisional|Corporate)/);
      rows.push({ slug, name, level: lvl ? lvl[1] : "" });
    }
    if (!/pn=\d+&limit=50">\s*Next/i.test(html) && page > 1) break;
    await sleep(400);
  }
  // De-duplicate across pages.
  const uniq = new Map(rows.map((r) => [r.slug, r]));
  return [...uniq.values()];
}

async function getProfile(slug: string) {
  const html = await fetch(`${PROFILE}${slug}`, {
    headers: { "user-agent": "Mozilla/5.0" },
  }).then((r) => r.text());

  const field = (label: string) => {
    const re = new RegExp(`${label}[\\s\\S]{0,80}?<\\/strong>([\\s\\S]{0,300}?)<\\/(?:p|div|li)>`, "i");
    const m = html.match(re);
    return m ? decode(m[1]) : "";
  };

  const email = (html.match(/mailto:([^"'>\s]+)/i) || [, ""])[1];
  const site = (html.match(/href="(https?:\/\/(?!katokenya\.org)[^"]+)"[^>]*>\s*(?:Visit Website|Home)/i) || [, ""])[1];

  return {
    email,
    address: field("Address"),
    phoneRaw: field("Phone Number"),
    website: site,
  };
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const from = Number(url.searchParams.get("from") ?? 0);
  const to = Number(url.searchParams.get("to") ?? 9999);

  const members = (await getSlugs()).slice(from, to);
  const lines = ["name,level,phone_primary,phone_all,email,address,website,profile_url,phone_raw"];

  for (const m of members) {
    try {
      const p = await getProfile(m.slug);
      const phones = normalisePhones(p.phoneRaw);
      lines.push(
        [
          csvCell(m.name),
          csvCell(m.level),
          csvCell(phones[0] ?? ""),
          csvCell(phones.join(" | ")),
          csvCell(p.email),
          csvCell(p.address),
          csvCell(p.website),
          csvCell(`${PROFILE}${m.slug}`),
          csvCell(p.phoneRaw),
        ].join(",")
      );
    } catch {
      lines.push([csvCell(m.name), csvCell(m.level), "", "", "", "", "", csvCell(`${PROFILE}${m.slug}`), csvCell("FETCH FAILED")].join(","));
    }
    await sleep(400); // be a polite guest on someone else's server
  }

  return new Response(lines.join("\n"), {
    headers: {
      "content-type": "text/csv; charset=utf-8",
      "content-disposition": 'attachment; filename="kato-members-contacts.csv"',
    },
  });
}
