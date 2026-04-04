# Golden Week 2026 Planner

Tiny static microsite for a timely niche: show how many consecutive days off someone can create around Japan's Golden Week 2026 with 0-4 PTO days.

## What shipped
- Single-page static microsite in Japanese
- PTO limit selector (0-4 days)
- Auto-calculated best vacation windows inside 2026-04-25 to 2026-05-10
- Share-friendly copy blocks for SNS
- Basic SEO metadata + WebApplication schema

## Likely discovery
- SEO: queries like `ゴールデンウィーク 2026 有給`, `GW 2026 何連休`, `2026 ゴールデンウィーク 休み`.
- SNS: shareable hook because people ask the same question every spring.

## Quick deploy ideas
### Cloudflare Pages
- Build command: none
- Output directory: `golden-week-2026-planner`

### GitHub
- Good candidate for a tiny standalone repo or subdirectory publish.

## Next improvements
1. Add company-holiday custom mode
2. Add OG image asset instead of placeholder path
3. Add 2027 toggle if this gets traction
4. Add copy-to-clipboard button for share text
