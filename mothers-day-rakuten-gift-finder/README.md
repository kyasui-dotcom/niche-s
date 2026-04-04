# 母の日 楽天ギフト予算診断

母の日向けの軽量 MVP。予算・カテゴリ・贈り方・急ぎ具合から条件を作り、**Rakuten Ichiba Item Search API だけ**で商品候補を引いてきます。

## 何を作ったか
- Cloudflare Worker + static assets の最小構成
- `/api/diagnose` で Rakuten API をプロキシ
- 予算帯ごとの価格フィルタ付き診断UI
- 商品画像 / 価格 / レビュー / ショップ名 / 楽天導線の表示
- OG / sitemap / robots / JSON-LD 付き

## 必要な設定
Wrangler secret に以下を設定してください。

```bash
wrangler secret put RAKUTEN_APPLICATION_ID
wrangler secret put RAKUTEN_ACCESS_KEY
wrangler secret put RAKUTEN_AFFILIATE_ID
```

`RAKUTEN_APPLICATION_ID` と `RAKUTEN_ACCESS_KEY` は必須です。
`RAKUTEN_AFFILIATE_ID` は任意です。送客を楽天アフィリエイトとして計測したい場合に使います。

## ローカル確認
```bash
cd mothers-day-rakuten-gift-finder
node --check src/index.js
python3 -m http.server 8787 -d public
```

API 動作確認は、Wrangler の secret が設定された状態で `wrangler dev` を使うのが前提です。

## デプロイ
```bash
cd mothers-day-rakuten-gift-finder
wrangler deploy
```

## 補足
- API レスポンスは Worker 側で 5 分キャッシュ
- 実商品の固定レビューではなく、その時点の楽天候補を条件で絞る方式
- Rakuten auth は `applicationId + accessKey` 前提に更新済み
- 母の日以外の季節ギフトにも転用しやすい構成
