# Handoff - 母の日 楽天ギフト予算診断

## Shipped
- 新規プロジェクト `mothers-day-rakuten-gift-finder/`
- Cloudflare Worker で `/api/diagnose` を実装
- Rakuten Ichiba Item Search API only の商品取得フロー
- 静的フロントで診断UI / 予算帯ガイド / FAQ / SEO 基本セット

## Architecture
- `src/index.js`: Worker 本体。`/api/diagnose` で Rakuten API を呼ぶ
- `public/index.html`: LP + 診断フォーム
- `public/script.js`: API 呼び出しと描画
- `public/styles.css`: 軽量スタイル
- `wrangler.toml`: Worker + assets 構成

## Secrets required
- `RAKUTEN_APPLICATION_ID` **必須**
- `RAKUTEN_ACCESS_KEY` **必須**
- `RAKUTEN_AFFILIATE_ID` 任意

この subagent にはチャット上の実キーが見えていなかったため、コードは secret 注入前提で作成。
もし main 側でキーが見えているなら、そのまま `wrangler secret put ...` → `wrangler deploy` で即公開可能。

## Suggested next steps
1. 実キー投入後に API 応答を確認
2. `niche-s` 配下の `/mothers-day/` 実装との挙動差分があればこちらへ逆反映する
3. 人気条件の深掘り下層ページ（例: 5000円 花 / 3000円 スイーツ）を増やす
4. reviewCount や asuraku 系フラグを使った並び順をさらに調整
