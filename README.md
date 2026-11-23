# Republic Airways SOC Appreciation Gift Store

One-product gift ordering for SOC appreciation. Branded with Republic Airways navy/red; shoppers pick Republic or Mesa logo before choosing a product.

## Flow

1. Enter email (`/`)
2. Instructions (`/instructions`)
3. Brand: Republic or Mesa (`/brand`) — filters available colors
4. Pick 1 product + color/size (`/products`) — unavailable sizes greyed out
5. Name + fixed ship-to location (`/shipping`) — addresses TBD in `lib/shipping-locations.ts`
6. Review → submit → confirmation (`RASOC-###`)

## Setup

```bash
npm install
cp .env.local.example .env.local   # fill Supabase URL + anon key
```

Run SQL in Supabase (same project as other RA stores is fine):

1. `migrations/01-ra-soc-schema.sql`
2. `migrations/02-ra-soc-seed-products.sql`

Regenerate seed from the spreadsheet:

```bash
npm run generate-seed
# or: node scripts/generate-catalog-seed.mjs "C:\path\to\sheet.xlsx"
```

```bash
npm run dev
```

## Assets

- Republic logo: `public/images/RA-Logo.png`
- Mesa logo: drop `public/images/Mesa-Logo.png` (text fallback until then)
- Product photos: `public/images/{ItemNumber}_{ColorSlug}.jpg` (see seed `image_url`s)

## Shipping TBD

Edit `lib/shipping-locations.ts` when the two real destinations are confirmed.
