# OSARE — East Africa Safari Routes & Transit Hub

> Free information assistant & booking hub for **tourists** and **locals** across East Africa.
> A two-tier platform: **Safari / Tourism** and **Local Commute** — with photos, prices,
> off-peak deals, trusted vendor info, and one-tap **WhatsApp booking**.

Domain: **www.easafariroutes.com** · Repo: **JakasipulLab/eatransport-API**

---

## Business model

- The platform is **100% free for tourists / commuters**.
- **Vendors pay a 5% commission** on confirmed bookings — never the traveller.
- Bookings are captured as **WhatsApp leads** to `+254 758 378 729`, so every enquiry
  is tracked and shown in the **Revenue Dashboard**.

---

## Tech stack

| Layer      | Technology                                              |
|------------|---------------------------------------------------------|
| Framework  | **Next.js 15** (App Router) — frontend + API in one app |
| UI         | React 18, Tailwind CSS, shadcn/ui, lucide-react, Recharts |
| Database   | **MongoDB** (via the official `mongodb` driver)         |
| Deployment | **Render.com** (Node web service, `output: standalone`) |

> The whole app (pages **and** backend API) runs as a single Next.js service —
> there is no separate Python server. The original `server.py` (FastAPI) logic has
> been re-implemented as Next.js API routes.

---

## Project structure

```
/
├── app/
│   ├── page.js                 # Full OSARE UI: Home, Safari, Local, About, Dashboard, Admin
│   ├── layout.js               # Root layout + metadata
│   ├── globals.css             # Global styles / design tokens
│   └── api/[[...path]]/route.js # Backend API (listings, leads, stats, seed)
├── components/ui/              # shadcn/ui components
├── next.config.js              # standalone output for Render
├── render.yaml                 # Render Blueprint
├── .env.example                # Environment variable template
└── package.json
```

---

## API reference (all routes are prefixed with `/api`)

| Method | Route                              | Description                                        |
|--------|------------------------------------|----------------------------------------------------|
| GET    | `/api/listings`                    | List/search. Query: `type`, `q`, `category`        |
| POST   | `/api/listings`                    | Create a listing (admin)                           |
| PUT    | `/api/listings/:id`                | Update a listing                                   |
| DELETE | `/api/listings/:id`                | Delete a listing                                   |
| POST   | `/api/leads`                       | Create a booking lead → returns a `whatsappUrl`    |
| GET    | `/api/leads`                       | List all booking leads                             |
| GET    | `/api/stats`                       | Dashboard stats + estimated 5% commission revenue  |
| POST   | `/api/seed`                        | Reset & load 15 sample listings                    |

Every document uses a **UUID `id`** (no MongoDB ObjectID is ever exposed).

---

## Environment variables

See [`.env.example`](./.env.example). Required:

| Variable              | Purpose                                             |
|-----------------------|-----------------------------------------------------|
| `MONGO_URL`           | MongoDB connection string                           |
| `DB_NAME`             | Database name (e.g. `osare`)                        |
| `NEXT_PUBLIC_BASE_URL`| Public URL of the deployed app                      |
| `CORS_ORIGINS`        | Allowed origins (`*` for open access)               |

---

## Run locally

```bash
yarn install
cp .env.example .env      # then edit MONGO_URL / DB_NAME
yarn dev                  # http://localhost:3000
```

On first load the app auto-seeds sample data. You can also POST `/api/seed`
or click **"Reset & load sample data"** on the Admin page.

---

## Deploy to Render.com

This app is built for **MongoDB**. Render does **not** host MongoDB directly, so use
**MongoDB Atlas** (free tier) for the database — this requires **zero code changes**.

### Step 1 — Create a free MongoDB Atlas cluster
1. Sign up at <https://www.mongodb.com/atlas> and create a free **M0** cluster.
2. Add a database user + password.
3. Under **Network Access**, allow `0.0.0.0/0` (or Render's IPs).
4. Copy the connection string, e.g.
   `mongodb+srv://USER:PASS@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority`

### Step 2 — Deploy the web service on Render
1. Push this repo to `JakasipulLab/eatransport-API`.
2. In Render: **New + → Web Service → connect the repo** (or use **Blueprint** with the
   included `render.yaml`).
3. Settings:
   - **Build command:** `yarn install && yarn build`
   - **Start command:** `yarn start`
   - **Environment:** Node 20
4. Add environment variables:
   - `MONGO_URL` = your Atlas connection string
   - `DB_NAME` = `osare`
   - `NEXT_PUBLIC_BASE_URL` = your Render/`easafariroutes.com` URL
   - `CORS_ORIGINS` = `*`
5. Deploy. Once live, open the app and (if needed) POST `/api/seed` once.

### Step 3 — Point your domain
In Render → **Custom Domains**, add `easafariroutes.com` and follow the DNS
instructions from your registrar.

---

## About NEON / PostgreSQL

**NEON is PostgreSQL-only**, and this MVP currently uses **MongoDB**. Two options:

- **Recommended (no code changes):** use **MongoDB Atlas** on Render as above.
- **If you must use NEON/Postgres:** the data layer in `app/api/[[...path]]/route.js`
  needs to be rewritten from the MongoDB driver to a Postgres client (e.g. `pg` or
  Prisma) with SQL tables for `listings` and `leads`. This is a straightforward but
  separate task — ask and it can be provided as a Postgres-ready branch.

---

## License

© 2025 OSARE — easafariroutes.com. All rights reserved.
