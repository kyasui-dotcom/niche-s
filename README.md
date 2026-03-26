# Niche-s

Niche-s (`niche-s.com`) is the hub site for small niche products.

## Purpose
- Aggregate small niche SEO / SNS-friendly projects
- Provide a homepage / hub for discovery and internal linking
- Serve as the brand/home for future lightweight product launches

## Deploy
This project is configured as a simple static site for Cloudflare Workers/Assets via `wrangler.toml`.

Typical deploy:

```bash
cd niche-s
npx wrangler deploy
```

## Notes
- Start simple: homepage + project list
- Add more cards/links as new niche products ship
- Later: categories, status badges, advertising placements, analytics
