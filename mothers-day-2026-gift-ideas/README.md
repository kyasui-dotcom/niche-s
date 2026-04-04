# 母の日 2026 プレゼント予算診断

母の日向けの超軽量ミニサイト。予算・系統・準備の急ぎ具合から、最初に見るべきギフトカテゴリ候補を30秒で絞り込みます。

## 狙い
- **Monetization:** affiliate-first
- **Why now:** 母の日は検索意図が明快で、直前になるほど「何を贈るか決められない」需要が増える
- **Discovery:** SEO + SNS
- **Hook:** 「予算とタイプで、最初の1個がすぐ決まる」

## What shipped
- 1ページ静的サイト
- 予算 / 系統 / 緊急度の診断UI
- 上位3カテゴリ候補のスコア表示
- Rakuten / Amazon / Yahoo!ショッピングへの比較導線
- SNS共有向けのコピーブロック
- FAQ / OG / JSON-LD / canonical などの基本SEO整備

## Deployment
### Cloudflare Pages
- Build command: none
- Output directory: `mothers-day-2026-gift-ideas`

### Static hosting
`index.html`, `styles.css`, `script.js`, `og-image.svg`, `sitemap.xml`, `robots.txt` をそのまま置けばOKです。

## Notes
- 現状の外部リンクは検索結果ページへの比較導線。実商品レビューの断定は避けている。
- 今後アフィリエイトIDを載せる場合はリンク生成部だけ差し替えればよい。
- 補助的な広告枠は足せるが、主役は送客導線。
