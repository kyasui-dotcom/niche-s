
const ROOT_HTML = "<!doctype html>\n<html lang=\"ja\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>Niche-s | ニッチなWebプロダクトを見つけるハブ＆プロジェクト一覧</title>\n    <meta\n      name=\"description\"\n      content=\"Niche-s（ニッチーズ）は、季節診断・比較サイト・業務支援アプリなど、小さく役立つWebプロダクトをまとめて探せるハブです。公開中サイト、育成中サービス、カテゴリ別の入口を1ページで整理しています。\"\n    />\n    <meta name=\"robots\" content=\"index,follow\" />\n    <meta name=\"theme-color\" content=\"#0f172a\" />\n    <meta property=\"og:type\" content=\"website\" />\n    <meta property=\"og:site_name\" content=\"Niche-s\" />\n    <meta property=\"og:title\" content=\"Niche-s | ニッチなWebプロダクトを見つけるハブ＆プロジェクト一覧\" />\n    <meta\n      property=\"og:description\"\n      content=\"季節系ミニサイト、比較・相場チェック、業務支援アプリをカテゴリ別にたどれる母艦サイト。\"\n    />\n    <meta property=\"og:url\" content=\"https://niche-s.com/\" />\n    <meta property=\"og:image\" content=\"https://niche-s.com/og-image.svg\" />\n    <meta property=\"og:image:type\" content=\"image/svg+xml\" />\n    <meta property=\"og:image:width\" content=\"1200\" />\n    <meta property=\"og:image:height\" content=\"630\" />\n    <meta name=\"twitter:card\" content=\"summary_large_image\" />\n    <meta name=\"twitter:title\" content=\"Niche-s | ニッチなWebプロダクトを見つけるハブ＆プロジェクト一覧\" />\n    <meta\n      name=\"twitter:description\"\n      content=\"公開中サイトと育成中サービスを、カテゴリ・用途・次の一歩で整理したNiche-s ecosystemの入口。\"\n    />\n    <meta name=\"twitter:image\" content=\"https://niche-s.com/og-image.svg\" />\n    <link rel=\"canonical\" href=\"https://niche-s.com/\" />\n    <link rel=\"sitemap\" type=\"application/xml\" href=\"https://niche-s.com/sitemap.xml\" />\n    <link rel=\"stylesheet\" href=\"./styles.css\" />\n    <script type=\"application/ld+json\">\n      {\n        \"@context\": \"https://schema.org\",\n        \"@graph\": [\n          {\n            \"@type\": \"WebSite\",\n            \"name\": \"Niche-s\",\n            \"url\": \"https://niche-s.com/\",\n            \"inLanguage\": \"ja\",\n            \"description\": \"季節系ミニサイト、比較・相場チェック、業務支援アプリなどの小さなWebプロダクトを束ねるハブ\",\n            \"about\": [\"診断ツール\", \"比較サイト\", \"業務支援アプリ\", \"ミニWebプロダクト\"]\n          },\n          {\n            \"@type\": \"CollectionPage\",\n            \"name\": \"Niche-s Projects\",\n            \"url\": \"https://niche-s.com/#projects\",\n            \"inLanguage\": \"ja\",\n            \"description\": \"Niche-s ecosystem で公開中・育成中のプロダクト一覧\",\n            \"hasPart\": {\n              \"@type\": \"ItemList\",\n              \"itemListOrder\": \"https://schema.org/ItemListOrderAscending\",\n              \"numberOfItems\": 8,\n              \"itemListElement\": [\n                {\n                  \"@type\": \"ListItem\",\n                  \"position\": 1,\n                  \"url\": \"https://niche-s.com/gw2026-bridge/\",\n                  \"name\": \"ゴールデンウィーク 2026 有給つなぎ診断\"\n                },\n                {\n                  \"@type\": \"ListItem\",\n                  \"position\": 2,\n                  \"url\": \"https://niche-s.com/mothers-day-2026/\",\n                  \"name\": \"母の日 2026 プレゼント予算診断\"\n                },\n                {\n                  \"@type\": \"ListItem\",\n                  \"position\": 3,\n                  \"url\": \"https://niche-s.com/mothers-day/\",\n                  \"name\": \"母の日 楽天ギフト予算診断\"\n                },\n                {\n                  \"@type\": \"ListItem\",\n                  \"position\": 4,\n                  \"url\": \"https://kaitorihikaku.net\",\n                  \"name\": \"買取比較.net\"\n                },\n                {\n                  \"@type\": \"ListItem\",\n                  \"position\": 5,\n                  \"url\": \"https://app.ichigoichie-en.com/\",\n                  \"name\": \"一期一会\"\n                },\n                {\n                  \"@type\": \"ListItem\",\n                  \"position\": 6,\n                  \"url\": \"https://niche-s.com/dehumidifier/\",\n                  \"name\": \"部屋干し除湿機サイズ診断\"\n                },\n                {\n                  \"@type\": \"ListItem\",\n                  \"position\": 7,\n                  \"url\": \"https://freelancer-client-acquisition-playbook.ichigoichie-en.workers.dev/\",\n                  \"name\": \"フリーランスの新規案件・フォロー・リピート導線ガイド\"\n                },\n                {\n                  \"@type\": \"ListItem\",\n                  \"position\": 8,\n                  \"url\": \"https://niche-s.com/moving/\",\n                  \"name\": \"引っ越し手続き・比較・準備ハブ\"\n                }\n              ]\n            }\n          },\n          {\n            \"@type\": \"BreadcrumbList\",\n            \"itemListElement\": [\n              {\n                \"@type\": \"ListItem\",\n                \"position\": 1,\n                \"name\": \"Niche-s\",\n                \"item\": \"https://niche-s.com/\"\n              },\n              {\n                \"@type\": \"ListItem\",\n                \"position\": 2,\n                \"name\": \"Projects\",\n                \"item\": \"https://niche-s.com/#projects\"\n              }\n            ]\n          },\n          {\n            \"@type\": \"FAQPage\",\n            \"mainEntity\": [\n              {\n                \"@type\": \"Question\",\n                \"name\": \"Niche-s とは何ですか？\",\n                \"acceptedAnswer\": {\n                  \"@type\": \"Answer\",\n                  \"text\": \"Niche-s は、季節系ミニサイト、比較・相場チェック、業務支援アプリなど、小さく役立つWebプロダクトを束ねて見つけやすくするハブです。\"\n                }\n              },\n              {\n                \"@type\": \"Question\",\n                \"name\": \"このサイトでは何が見つかりますか？\",\n                \"acceptedAnswer\": {\n                  \"@type\": \"Answer\",\n                  \"text\": \"ゴールデンウィークや母の日の季節系診断、売却前の比較サイト、関係維持や業務支援のアプリなど、用途ごとの入口をまとめて探せます。\"\n                }\n              },\n              {\n                \"@type\": \"Question\",\n                \"name\": \"公開中と育成中の違いは？\",\n                \"acceptedAnswer\": {\n                  \"@type\": \"Answer\",\n                  \"text\": \"公開中はすぐ使える状態のプロダクト、育成中は導線や機能を磨きながら伸ばしているプロダクトです。Niche-s では両方を同じ母艦から把握できます。\"\n                }\n              }\n            ]\n          },\n          {\n            \"@type\": \"Organization\",\n            \"name\": \"Niche-s\",\n            \"url\": \"https://niche-s.com/\"\n          }\n        ]\n      }\n    </script>\n  </head>\n  <body>\n    <main class=\"shell\">\n      <section class=\"hero card\">\n        <p class=\"eyebrow\">Niche-s / ニッチーズ</p>\n        <h1>ニッチな小さなWebプロダクトを<br />まとめて見つけるハブ</h1>\n        <p class=\"lede\">\n          <strong>Niche-s</strong> は、検索で拾いやすい小さなサイト、SNSで共有しやすい診断ツール、比較・情報整理系の軽量プロダクトを束ねる母艦です。\n          単発で終わらせず、見つけやすく、回遊しやすく、育てやすい形に整えていきます。\n        </p>\n        <div class=\"hero-actions\">\n          <a href=\"#projects\" class=\"button primary\">公開中プロダクトを見る</a>\n          <a href=\"#routes\" class=\"button ghost\">目的から探す</a>\n          <a href=\"#categories\" class=\"button ghost\">カテゴリから探す</a>\n          <a href=\"#faq\" class=\"button ghost\">よくある質問</a>\n        </div>\n        <ul class=\"hero-points\">\n          <li>比較・診断・情報整理・業務支援などの小さなWebプロダクト群</li>\n          <li>公開中サイトと育成中サービスをひとつの入口で整理</li>\n          <li>伸びそうな案件へ内部リンクを集めて、発見性を底上げ</li>\n        </ul>\n      </section>\n\n      <section class=\"card stats\">\n        <div class=\"section-head compact\">\n          <p class=\"section-label\">Snapshot</p>\n          <h2>いまの ecosystem 概況</h2>\n        </div>\n        <div class=\"stats-grid\">\n          <article class=\"stat-card\">\n            <strong>8件</strong>\n            <span>掲載プロダクト</span>\n          </article>\n          <article class=\"stat-card\">\n            <strong>3領域</strong>\n            <span>季節 / 比較 / 業務支援</span>\n          </article>\n          <article class=\"stat-card\">\n            <strong>2タイプ</strong>\n            <span>今すぐ使える公開中 / 伸ばしている育成中</span>\n          </article>\n        </div>\n        <div class=\"snapshot-links\" aria-label=\"注目プロダクトへの近道\">\n          <a href=\"https://niche-s.com/mothers-day/\">いまの季節案件: 母の日 楽天ギフト予算診断</a>\n          <a href=\"https://niche-s.com/moving/\">新着実用ハブ: 引っ越し手続き・比較・準備</a>\n          <a href=\"https://kaitorihikaku.net\" target=\"_blank\" rel=\"noopener noreferrer\">実用系の主力: 買取比較.net</a>\n          <a href=\"https://app.ichigoichie-en.com/\" target=\"_blank\" rel=\"noopener noreferrer\">育成中の中核: 一期一会</a>\n        </div>\n      </section>\n\n      <section class=\"card announcement\">\n        <div class=\"section-head\">\n          <p class=\"section-label\">Hub update</p>\n          <h2>母艦としての役割を先に育てる</h2>\n        </div>\n        <p>\n          Niche-s は単なるリンク置き場ではなく、<strong>どんな種類の小さなプロダクトがあるか</strong>、<strong>次にどこを見るべきか</strong>、<strong>どれが公開済みか</strong>をまとめて伝える整理役です。\n          まずは回遊しやすい一覧とカテゴリ導線を整え、今後は新着・人気・更新ログ・カテゴリ別まとめページを育てていきます。\n        </p>\n        <div class=\"announcement-points\">\n          <article>\n            <h3>季節案件を逃さない</h3>\n            <p>タイミング勝負のプロダクトをハブ側で先に強調し、旬の流入を取りこぼしにくくします。</p>\n          </article>\n          <article>\n            <h3>次に見るべき案件を明示</h3>\n            <p>季節→比較、ガイド→SaaS のように、近い悩み同士をつないで回遊を増やします。</p>\n          </article>\n          <article>\n            <h3>個別サイトの母艦として機能</h3>\n            <p>各プロダクト単体では伝わりにくい全体像や役割を、このトップで補完します。</p>\n          </article>\n        </div>\n      </section>\n\n      <section id=\"routes\" class=\"card routes\">\n        <div class=\"section-head\">\n          <p class=\"section-label\">Best next click</p>\n          <h2>目的から探す</h2>\n          <p class=\"section-copy\">「何を見るべきか分からない」を減らすために、最初の入口を用途別に置いています。</p>\n        </div>\n        <div class=\"route-grid\">\n          <article class=\"route-card\">\n            <h3>連休やイベント前にすぐ使いたい</h3>\n            <p>季節トレンドを短時間で確認したい人向け。検索とSNSの両方で広がりやすい導線です。</p>\n            <div class=\"route-links\">\n              <a href=\"https://niche-s.com/gw2026-bridge/\" target=\"_blank\" rel=\"noopener noreferrer\">GW 2026 有給つなぎ診断</a>\n              <a href=\"https://niche-s.com/mothers-day-2026/\" target=\"_blank\" rel=\"noopener noreferrer\">母の日 2026 プレゼント予算診断</a>\n              <a href=\"https://niche-s.com/mothers-day/\" target=\"_blank\" rel=\"noopener noreferrer\">母の日 楽天ギフト予算診断</a>\n              <a href=\"https://niche-s.com/dehumidifier/\" target=\"_blank\" rel=\"noopener noreferrer\">部屋干し除湿機サイズ診断</a>\n            </div>\n          </article>\n          <article class=\"route-card\">\n            <h3>買う・売る前に相場を見たい</h3>\n            <p>迷いを短時間で減らしたい人向け。実用ニーズが強く、検索流入を積み上げやすい領域です。</p>\n            <div class=\"route-links\">\n              <a href=\"https://kaitorihikaku.net\" target=\"_blank\" rel=\"noopener noreferrer\">買取比較.net</a>\n              <a href=\"https://niche-s.com/moving/\" target=\"_blank\" rel=\"noopener noreferrer\">引っ越し手続き・比較・準備ハブ</a>\n            </div>\n          </article>\n          <article class=\"route-card\">\n            <h3>人との関係や業務を少し楽にしたい</h3>\n            <p>単発の診断より密度のあるプロダクトを試したい人向け。今後の中核LP候補です。</p>\n            <div class=\"route-links\">\n              <a href=\"https://app.ichigoichie-en.com/\" target=\"_blank\" rel=\"noopener noreferrer\">一期一会</a>\n              <a href=\"https://freelancer-client-acquisition-playbook.ichigoichie-en.workers.dev/\" target=\"_blank\" rel=\"noopener noreferrer\">フリーランスの新規案件・フォロー・リピート導線ガイド</a>\n            </div>\n          </article>\n        </div>\n      </section>\n\n      <section id=\"categories\" class=\"card categories\">\n        <div class=\"section-head\">\n          <p class=\"section-label\">Categories</p>\n          <h2>いま育てている領域</h2>\n        </div>\n        <div class=\"category-grid\">\n          <article class=\"category-card\">\n            <h3>季節・イベント系</h3>\n            <p>年中行事や連休前に検索されやすい診断・確認ツール。</p>\n            <ul class=\"inline-list\">\n              <li><a href=\"https://niche-s.com/gw2026-bridge/\" target=\"_blank\" rel=\"noopener noreferrer\">GW 2026 有給つなぎ診断</a></li>\n              <li><a href=\"https://niche-s.com/mothers-day-2026/\" target=\"_blank\" rel=\"noopener noreferrer\">母の日 2026 プレゼント予算診断</a></li>\n              <li><a href=\"https://niche-s.com/mothers-day/\" target=\"_blank\" rel=\"noopener noreferrer\">母の日 楽天ギフト予算診断</a></li>\n              <li><a href=\"https://niche-s.com/dehumidifier/\" target=\"_blank\" rel=\"noopener noreferrer\">部屋干し除湿機サイズ診断</a></li>\n            </ul>\n          </article>\n          <article class=\"category-card\">\n            <h3>比較・相場チェック</h3>\n            <p>買う・売る・選ぶ前の迷いを短時間で減らす比較系プロダクト。</p>\n            <ul class=\"inline-list\">\n              <li><a href=\"https://kaitorihikaku.net\" target=\"_blank\" rel=\"noopener noreferrer\">買取比較.net</a></li>\n              <li><a href=\"https://niche-s.com/moving/\" target=\"_blank\" rel=\"noopener noreferrer\">引っ越し手続き・比較・準備ハブ</a></li>\n            </ul>\n          </article>\n          <article class=\"category-card\">\n            <h3>業務・関係維持支援</h3>\n            <p>個人や小規模チームの仕事を少し楽にする実用アプリ。</p>\n            <ul class=\"inline-list\">\n              <li><a href=\"https://app.ichigoichie-en.com/\" target=\"_blank\" rel=\"noopener noreferrer\">一期一会</a></li>\n              <li><a href=\"https://freelancer-client-acquisition-playbook.ichigoichie-en.workers.dev/\" target=\"_blank\" rel=\"noopener noreferrer\">フリーランスの新規案件・フォロー・リピート導線ガイド</a></li>\n            </ul>\n          </article>\n        </div>\n      </section>\n\n      <section class=\"card ecosystem-links\">\n        <div class=\"section-head\">\n          <p class=\"section-label\">Ecosystem paths</p>\n          <h2>次に見やすい導線を先に置く</h2>\n          <p class=\"section-copy\">各プロダクトを単発で終わらせないために、近い悩みどうしのつながりをハブ側でも見える化しています。</p>\n        </div>\n        <div class=\"ecosystem-grid\">\n          <article class=\"ecosystem-card\">\n            <h3>母の日ギフトを探しているなら</h3>\n            <p>まずは <strong>母の日 楽天ギフト予算診断</strong> で条件を絞り、比較しながら候補を見たい人は <strong>母の日 2026 プレゼント予算診断</strong> にも流れやすい構成です。</p>\n            <div class=\"project-actions\">\n              <a class=\"button primary\" href=\"https://niche-s.com/mothers-day/\">楽天ギフト診断を見る</a>\n              <a class=\"button ghost\" href=\"https://niche-s.com/mothers-day-2026/\" target=\"_blank\" rel=\"noopener noreferrer\">予算診断を見る</a>\n            </div>\n          </article>\n          <article class=\"ecosystem-card\">\n            <h3>比較ニーズで入ったなら</h3>\n            <p><strong>買取比較.net</strong> で強い実需を拾いつつ、季節系や他の比較プロダクトにも戻りやすいよう、このハブを中継点にしています。</p>\n            <div class=\"project-actions\">\n              <a class=\"button primary\" href=\"https://kaitorihikaku.net\" target=\"_blank\" rel=\"noopener noreferrer\">買取比較.netを見る</a>\n              <a class=\"button ghost\" href=\"#categories\">他カテゴリも見る</a>\n            </div>\n          </article>\n          <article class=\"ecosystem-card\">\n            <h3>ガイドから実用アプリへ進むなら</h3>\n            <p><strong>フリーランス向けガイド</strong> で課題整理 → <strong>一期一会</strong> で継続運用、という流れが自然になるように業務支援系を束ねています。</p>\n            <div class=\"project-actions\">\n              <a class=\"button primary\" href=\"https://freelancer-client-acquisition-playbook.ichigoichie-en.workers.dev/\" target=\"_blank\" rel=\"noopener noreferrer\">ガイドを見る</a>\n              <a class=\"button ghost\" href=\"https://app.ichigoichie-en.com/\" target=\"_blank\" rel=\"noopener noreferrer\">一期一会を見る</a>\n            </div>\n          </article>\n        </div>\n      </section>\n\n      <section id=\"projects\" class=\"card projects\">\n        <div class=\"section-head\">\n          <p class=\"section-label\">Projects</p>\n          <h2>公開中 / 育成中のプロダクト</h2>\n          <p class=\"section-copy\">まず触って価値が伝わるものを上に、育成中のものを下に並べています。</p>\n        </div>\n        <div class=\"project-grid\">\n          <article class=\"project-card featured\">\n            <div class=\"project-tag\">公開中</div>\n            <h3>ゴールデンウィーク 2026 有給つなぎ診断</h3>\n            <p>\n              2026年のGWで、有給をどこに入れると何連休になるかを30秒で確認できるミニツール。\n              季節トレンドに乗せやすく、SNS共有とも相性のよい軽量プロダクトです。\n            </p>\n            <div class=\"project-meta\">\n              <span>カテゴリ: 季節 / 診断</span>\n              <span>向いている人: 連休前にすぐ確認したい人</span>\n              <span>流入想定: SEO + SNS</span>\n              <span>公開先: niche-s.com/gw2026-bridge/</span>\n            </div>\n            <div class=\"project-actions\">\n              <a class=\"button primary\" href=\"https://niche-s.com/gw2026-bridge/\" target=\"_blank\" rel=\"noopener noreferrer\">サイトを見る</a>\n              <a class=\"button ghost\" href=\"https://niche-s.com/gw2026-bridge/#ideas\" target=\"_blank\" rel=\"noopener noreferrer\">共有ネタを見る</a>\n            </div>\n          </article>\n\n          <article class=\"project-card\">\n            <div class=\"project-tag tinted\">公開準備中</div>\n            <h3>母の日 2026 プレゼント予算診断</h3>\n            <p>\n              予算・好み・急ぎ具合から、母の日ギフトの最初の候補を30秒で絞る軽量ミニサイト。\n              アフィリエイト導線を最初から組み込みやすく、季節検索とSNS共有の両方を狙える案件です。\n            </p>\n            <div class=\"project-meta\">\n              <span>カテゴリ: 季節 / ギフト比較</span>\n              <span>向いている人: 予算から候補を絞りたい人</span>\n              <span>流入想定: SEO + SNS</span>\n              <span>公開先: niche-s.com/mothers-day-2026/</span>\n            </div>\n            <div class=\"project-actions\">\n              <a class=\"button primary\" href=\"https://niche-s.com/mothers-day-2026/\" target=\"_blank\" rel=\"noopener noreferrer\">公開先を見る</a>\n            </div>\n          </article>\n\n          <article class=\"project-card\">\n            <div class=\"project-tag tinted\">公開準備中</div>\n            <h3>母の日 楽天ギフト予算診断</h3>\n            <p>\n              予算・カテゴリ・贈り方から条件を作り、Rakuten API だけで実商品の候補を出す MVP。\n              診断の軽さと、そのまま楽天の商品比較へ進める即時性を両立させた季節案件です。\n            </p>\n            <div class=\"project-meta\">\n              <span>カテゴリ: 季節 / 楽天送客</span>\n              <span>向いている人: 診断後すぐ商品候補まで見たい人</span>\n              <span>流入想定: SEO + SNS</span>\n              <span>公開先: niche-s.com/mothers-day/</span>\n            </div>\n            <div class=\"project-actions\">\n              <a class=\"button primary\" href=\"https://niche-s.com/mothers-day/\" target=\"_blank\" rel=\"noopener noreferrer\">公開先を見る</a>\n            </div>\n          </article>\n\n          <article class=\"project-card\">\n            <div class=\"project-tag\">公開中</div>\n            <h3>引っ越し手続き・比較・準備ハブ</h3>\n            <p>\n              引っ越し前後のやることを、チェックリスト、住所変更、ライフライン切替、業者比較、費用目安の5本に分けて整理した実用ハブ。\n              一発検索で入りやすい手続き系クエリと、比較系クエリを同居させやすい構成です。\n            </p>\n            <div class=\"project-meta\">\n              <span>カテゴリ: 比較 / 手続き整理</span>\n              <span>向いている人: 引っ越し準備の抜け漏れを減らしたい人</span>\n              <span>流入想定: SEO</span>\n              <span>公開先: niche-s.com/moving/</span>\n            </div>\n            <div class=\"project-actions\">\n              <a class=\"button primary\" href=\"https://niche-s.com/moving/\" target=\"_blank\" rel=\"noopener noreferrer\">サイトを見る</a>\n              <a class=\"button ghost\" href=\"https://niche-s.com/moving/cost-estimate.html\" target=\"_blank\" rel=\"noopener noreferrer\">費用目安を見る</a>\n            </div>\n          </article>\n\n          <article class=\"project-card\">\n            <div class=\"project-tag\">公開中</div>\n            <h3>買取比較.net</h3>\n            <p>\n              商品名や型番から、標準相場・すぐ売る価格・おすすめ販路をすばやく確認できる比較サイト。\n              実用ニーズが明確で、検索導線を積み上げやすい案件です。\n            </p>\n            <div class=\"project-meta\">\n              <span>カテゴリ: 比較 / 相場チェック</span>\n              <span>向いている人: 売却前にざっくり相場を知りたい人</span>\n              <span>流入想定: SEO</span>\n              <span>公開先: kaitorihikaku.net</span>\n            </div>\n            <div class=\"project-actions\">\n              <a class=\"button primary\" href=\"https://kaitorihikaku.net\" target=\"_blank\" rel=\"noopener noreferrer\">サイトを見る</a>\n            </div>\n          </article>\n\n          <article class=\"project-card\">\n            <div class=\"project-tag\">公開中</div>\n            <h3>部屋干し除湿機サイズ診断</h3>\n            <p>\n              部屋の広さ・洗濯量・使用頻度・悩みから、部屋干し向け除湿機の比較スタート地点を30秒で整理する実用ミニツール。\n              目安の除湿能力、向いている方式、比較時のチェックポイントまで一気に出るので、梅雨前の「何Lから見ればいい？」をその場で片づけやすくしました。\n            </p>\n            <div class=\"project-meta\">\n              <span>カテゴリ: 季節 / 家電比較</span>\n              <span>向いている人: 梅雨前に除湿機のサイズ感を絞りたい人</span>\n              <span>流入想定: SEO + SNS</span>\n              <span>公開先: niche-s.com/dehumidifier/</span>\n            </div>\n            <div class=\"project-actions\">\n              <a class=\"button primary\" href=\"https://niche-s.com/dehumidifier/\" target=\"_blank\" rel=\"noopener noreferrer\">サイトを見る</a>\n            </div>\n          </article>\n\n          <article class=\"project-card\">\n            <div class=\"project-tag tinted\">育成中</div>\n            <h3>一期一会</h3>\n            <p>\n              名刺管理で終わらせず、次に誰へ連絡するか・何を書くかまで支える関係維持アシスタント。\n              プロダクト密度が高いので、今後はLP改善や導線最適化の中核候補です。\n            </p>\n            <div class=\"project-meta\">\n              <span>カテゴリ: 業務支援 / SaaS</span>\n              <span>向いている人: 関係維持を仕組み化したい人</span>\n              <span>流入想定: 指名 + SEO</span>\n              <span>公開先: app.ichigoichie-en.com</span>\n            </div>\n            <div class=\"project-actions\">\n              <a class=\"button primary\" href=\"https://app.ichigoichie-en.com/\" target=\"_blank\" rel=\"noopener noreferrer\">サイトを見る</a>\n            </div>\n          </article>\n\n          <article class=\"project-card\">\n            <div class=\"project-tag tinted\">育成中</div>\n            <h3>フリーランスの新規案件・フォロー・リピート導線ガイド</h3>\n            <p>\n              フリーランス向けに、新規案件の獲得、名刺交換後フォロー、既存顧客からのリピート受注までを1ページで整理した軽量メディア。\n              関係維持の課題を自然に <strong>一期一会</strong> へつなげる送客ハブとして使える導線設計です。\n            </p>\n            <div class=\"project-meta\">\n              <span>カテゴリ: 業務支援 / 集客メディア</span>\n              <span>向いている人: 営業が属人化しがちなフリーランス</span>\n              <span>流入想定: SEO</span>\n              <span>公開先: freelancer-client-acquisition-playbook.ichigoichie-en.workers.dev</span>\n            </div>\n            <div class=\"project-actions\">\n              <a class=\"button primary\" href=\"https://freelancer-client-acquisition-playbook.ichigoichie-en.workers.dev/\" target=\"_blank\" rel=\"noopener noreferrer\">サイトを見る</a>\n              <a class=\"button ghost\" href=\"https://app.ichigoichie-en.com/\" target=\"_blank\" rel=\"noopener noreferrer\">一期一会を見る</a>\n            </div>\n          </article>\n        </div>\n      </section>\n\n      <section class=\"card roadmap\">\n        <div class=\"section-head\">\n          <p class=\"section-label\">Next</p>\n          <h2>次にこのハブで足したいこと</h2>\n        </div>\n        <ul class=\"roadmap-list\">\n          <li>新着プロダクト / 更新済みページの一覧</li>\n          <li>カテゴリ別のまとめページと関連記事導線</li>\n          <li>各プロダクトの一言比較と「誰向けか」表示</li>\n          <li>将来的な広告枠や送客導線の自然な組み込み</li>\n        </ul>\n      </section>\n\n      <section id=\"faq\" class=\"card faq\">\n        <div class=\"section-head\">\n          <p class=\"section-label\">FAQ</p>\n          <h2>よくある質問</h2>\n        </div>\n        <div class=\"faq-list\">\n          <article>\n            <h3>Niche-s とは？</h3>\n            <p>季節系ミニサイト、比較・相場チェック、業務支援アプリなど、小さく役立つWebプロダクトをまとめて見つけやすくするハブです。</p>\n          </article>\n          <article>\n            <h3>このページの使い方は？</h3>\n            <p>まず「目的から探す」で自分に近い入口を選び、次に「公開中 / 育成中のプロダクト」で個別ページを確認する使い方を想定しています。</p>\n          </article>\n          <article>\n            <h3>公開中と育成中の違いは？</h3>\n            <p>公開中はすぐ使える状態、育成中は導線や訴求を改善しながら伸ばしている状態です。両方を同じ母艦で追えるようにしています。</p>\n          </article>\n        </div>\n      </section>\n\n      <section id=\"about\" class=\"card about\">\n        <div class=\"section-head\">\n          <p class=\"section-label\">About</p>\n          <h2>Niche-s でやること</h2>\n        </div>\n        <div class=\"about-grid\">\n          <div>\n            <h3>1. 小さく作る</h3>\n            <p>大きなサービスを1本作り込むより、役割が明確な小さなページやツールを増やします。</p>\n          </div>\n          <div>\n            <h3>2. 反応を見る</h3>\n            <p>検索・SNSどちらでも見つけられる可能性がある形を優先し、伸びそうなものを育てます。</p>\n          </div>\n          <div>\n            <h3>3. ハブで束ねる</h3>\n            <p>個別案件が増えても散らからないように、このトップから整理して辿れるようにします。</p>\n          </div>\n        </div>\n      </section>\n    </main>\n  </body>\n</html>\n";
const ROOT_CSS = ":root {\n  color-scheme: light;\n  --bg: #f8fafc;\n  --card: #ffffff;\n  --text: #0f172a;\n  --muted: #475569;\n  --line: #dbe4f0;\n  --accent: #2563eb;\n  --accent-soft: #dbeafe;\n  --dark: #0b1220;\n  --success-bg: #dcfce7;\n  --success-text: #166534;\n  --draft-bg: #ede9fe;\n  --draft-text: #6d28d9;\n}\n* {\n  box-sizing: border-box;\n}\nhtml {\n  scroll-behavior: smooth;\n}\nbody {\n  margin: 0;\n  font-family: Inter, \"Hiragino Sans\", \"Noto Sans JP\", sans-serif;\n  background: linear-gradient(180deg, #eff6ff 0%, #f8fafc 24%, #ffffff 100%);\n  color: var(--text);\n}\na {\n  color: var(--accent);\n}\n.shell {\n  width: min(1080px, calc(100vw - 32px));\n  margin: 0 auto;\n  padding: 32px 0 56px;\n}\n.card {\n  background: var(--card);\n  border: 1px solid var(--line);\n  border-radius: 24px;\n  padding: 24px;\n  margin-bottom: 20px;\n  box-shadow: 0 18px 50px rgba(15, 23, 42, 0.06);\n}\n.hero {\n  background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);\n}\n.hero h1 {\n  font-size: clamp(2.1rem, 5vw, 3.5rem);\n  line-height: 1.06;\n  margin: 8px 0 14px;\n}\n.eyebrow,\n.section-label {\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: var(--accent);\n}\n.lede,\n.hero-points,\n.announcement p,\n.project-card p,\n.project-meta,\n.about p,\n.category-card p,\n.section-copy,\n.roadmap-list,\n.route-card p,\n.route-links,\n.inline-list,\n.faq-list p {\n  color: var(--muted);\n}\n.hero-actions,\n.project-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 46px;\n  padding: 0 18px;\n  border-radius: 999px;\n  border: 1px solid var(--line);\n  text-decoration: none;\n  font-weight: 700;\n  cursor: pointer;\n  background: #fff;\n  color: var(--text);\n  transition: transform 120ms ease, box-shadow 120ms ease, border-color 120ms ease;\n}\n.button.primary {\n  background: var(--accent);\n  border-color: var(--accent);\n  color: #fff;\n}\n.button:hover,\n.button:focus-visible {\n  transform: translateY(-1px);\n  box-shadow: 0 10px 24px rgba(37, 99, 235, 0.14);\n}\n.hero-points,\n.roadmap-list,\n.inline-list {\n  margin: 18px 0 0;\n  padding-left: 18px;\n  display: grid;\n  gap: 6px;\n}\n.section-head h2 {\n  margin: 8px 0 0;\n  font-size: 1.6rem;\n}\n.section-head.compact h2 {\n  font-size: 1.35rem;\n}\n.section-copy {\n  margin: 12px 0 0;\n}\n.project-grid,\n.about-grid,\n.category-grid,\n.route-grid,\n.stats-grid,\n.faq-list {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  gap: 16px;\n}\n.project-card,\n.category-card,\n.about-grid > div,\n.route-card,\n.stat-card,\n.faq-list article {\n  border: 1px solid var(--line);\n  border-radius: 20px;\n  padding: 18px;\n  background: #fbfdff;\n}\n.project-card.featured {\n  background: linear-gradient(180deg, #eff6ff 0%, #ffffff 100%);\n  border-color: #93c5fd;\n}\n.project-card h3,\n.about-grid h3,\n.category-card h3,\n.route-card h3,\n.faq-list h3 {\n  margin: 10px 0 8px;\n}\n.project-tag {\n  display: inline-flex;\n  font-size: 0.78rem;\n  font-weight: 700;\n  border-radius: 999px;\n  padding: 4px 10px;\n  background: var(--success-bg);\n  color: var(--success-text);\n}\n.project-tag.tinted {\n  background: var(--draft-bg);\n  color: var(--draft-text);\n}\n.project-meta {\n  display: grid;\n  gap: 6px;\n  font-size: 0.92rem;\n  margin: 12px 0 16px;\n}\n.stats {\n  background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);\n}\n.snapshot-links {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 16px;\n}\n.snapshot-links a {\n  display: inline-flex;\n  align-items: center;\n  min-height: 40px;\n  padding: 0 14px;\n  border-radius: 999px;\n  background: #eff6ff;\n  border: 1px solid #bfdbfe;\n  color: var(--accent);\n  font-weight: 700;\n  text-decoration: none;\n}\n.snapshot-links a:hover,\n.snapshot-links a:focus-visible {\n  text-decoration: none;\n  box-shadow: 0 10px 24px rgba(37, 99, 235, 0.12);\n}\n.stat-card {\n  text-align: center;\n  background: linear-gradient(180deg, #f8fbff 0%, #ffffff 100%);\n}\n.stat-card strong {\n  display: block;\n  font-size: 1.9rem;\n  color: var(--dark);\n}\n.stat-card span {\n  display: block;\n  margin-top: 6px;\n  color: var(--muted);\n}\n.route-card {\n  background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);\n}\n.route-links {\n  display: grid;\n  gap: 10px;\n  margin-top: 14px;\n}\n.route-links a,\n.inline-list a {\n  font-weight: 600;\n  text-decoration: none;\n}\n.route-links a:hover,\n.inline-list a:hover,\n.route-links a:focus-visible,\n.inline-list a:focus-visible {\n  text-decoration: underline;\n}\n.roadmap {\n  background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);\n}\n.faq-list article {\n  background: #ffffff;\n}\n.announcement-points,\n.ecosystem-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 16px;\n  margin-top: 18px;\n}\n.announcement-points article,\n.ecosystem-card {\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  padding: 18px;\n  background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);\n}\n.announcement-points h3,\n.ecosystem-card h3 {\n  margin: 0 0 8px;\n}\n.announcement-points p,\n.ecosystem-card p {\n  margin: 0;\n  color: var(--muted);\n}\n.ecosystem-card .project-actions {\n  margin-top: 16px;\n}\n@media (max-width: 720px) {\n  .shell {\n    width: min(100vw - 20px, 1080px);\n    padding-top: 20px;\n  }\n  .card {\n    padding: 18px;\n    border-radius: 20px;\n  }\n  .hero h1 br {\n    display: none;\n  }\n  .hero h1 {\n    line-height: 1.18;\n    font-size: clamp(1.9rem, 8vw, 2.5rem);\n  }\n  .hero-actions,\n  .project-actions,\n  .snapshot-links {\n    flex-direction: column;\n  }\n  .snapshot-links a {\n    width: 100%;\n    justify-content: center;\n    text-align: center;\n    min-height: 46px;\n    padding: 10px 14px;\n  }\n  .button {\n    width: 100%;\n  }\n}\n";
const DEHUMIDIFIER_HTML = "<!doctype html>\n<html lang=\"ja\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>部屋干し除湿機サイズ診断 | 梅雨前に30秒で目安がわかる</title>\n    <meta\n      name=\"description\"\n      content=\"部屋の広さ・洗濯頻度・部屋干し量・梅雨の悩みから、部屋干し向け除湿機の目安容量と向いているタイプを30秒で診断。梅雨前の比較検討に。\"\n    />\n    <meta name=\"robots\" content=\"index,follow\" />\n    <meta name=\"theme-color\" content=\"#0f172a\" />\n    <link rel=\"canonical\" href=\"https://niche-s.com/dehumidifier/\" />\n    <meta property=\"og:type\" content=\"website\" />\n    <meta property=\"og:title\" content=\"部屋干し除湿機サイズ診断 | 梅雨前に30秒で目安がわかる\" />\n    <meta\n      property=\"og:description\"\n      content=\"部屋の広さ・洗濯量・悩みから、除湿機の目安容量と比較ポイントをすぐ整理。\"\n    />\n    <meta property=\"og:url\" content=\"https://niche-s.com/dehumidifier/\" />\n    <meta property=\"og:image\" content=\"https://niche-s.com/dehumidifier/og-image.svg\" />\n    <meta name=\"twitter:card\" content=\"summary_large_image\" />\n    <meta name=\"twitter:title\" content=\"部屋干し除湿機サイズ診断\" />\n    <meta name=\"twitter:description\" content=\"梅雨前に30秒で、部屋干し向け除湿機の目安容量を整理。\" />\n    <meta name=\"twitter:image\" content=\"https://niche-s.com/dehumidifier/og-image.svg\" />\n    <link rel=\"stylesheet\" href=\"./styles.css\" />\n    <script type=\"application/ld+json\">\n      {\n        \"@context\": \"https://schema.org\",\n        \"@graph\": [\n          {\n            \"@type\": \"WebApplication\",\n            \"name\": \"部屋干し除湿機サイズ診断\",\n            \"applicationCategory\": \"UtilitiesApplication\",\n            \"operatingSystem\": \"Any\",\n            \"inLanguage\": \"ja\",\n            \"url\": \"https://niche-s.com/dehumidifier/\",\n            \"description\": \"部屋干し向け除湿機の目安容量と選び方を30秒で整理する無料ミニ診断\"\n          },\n          {\n            \"@type\": \"FAQPage\",\n            \"mainEntity\": [\n              {\n                \"@type\": \"Question\",\n                \"name\": \"除湿機は何L/日を目安に見ればいいですか？\",\n                \"acceptedAnswer\": {\n                  \"@type\": \"Answer\",\n                  \"text\": \"部屋の広さだけでなく、部屋干しの洗濯量や毎日の使用頻度でも必要な余力は変わります。このページでは簡易的に6L未満・6〜8L・8〜10L・10L以上の目安へ整理しています。\"\n                }\n              },\n              {\n                \"@type\": \"Question\",\n                \"name\": \"コンプレッサー式とデシカント式はどちら向きですか？\",\n                \"acceptedAnswer\": {\n                  \"@type\": \"Answer\",\n                  \"text\": \"梅雨〜夏の除湿力重視ならコンプレッサー式が有力、冬の部屋干しや軽さ重視ならデシカント式、迷うなら通年バランス型のハイブリッドを比較候補にすると選びやすいです。\"\n                }\n              }\n            ]\n          }\n        ]\n      }\n    </script>\n  </head>\n  <body>\n    <main class=\"shell\">\n      <section class=\"hero card\">\n        <p class=\"eyebrow\">Niche-s seasonal tool</p>\n        <h1>部屋干し除湿機、<br />どのサイズ感から見ればいい？</h1>\n        <p class=\"lede\">\n          部屋の広さ・洗濯量・悩みを入れると、<strong>最初に比較すべき除湿能力の目安</strong>と、<strong>向いている方式</strong>を30秒で整理します。\n          梅雨前に「どこから比較するか分からない」を減らすための軽量チェックです。\n        </p>\n        <div class=\"hero-points\">\n          <span>30秒診断</span>\n          <span>SEO + SNS向け</span>\n          <span> affiliate-first </span>\n        </div>\n      </section>\n\n      <section class=\"card diagnostic\">\n        <div class=\"section-head\">\n          <p class=\"section-label\">Quick input</p>\n          <h2>4つだけ選ぶ</h2>\n        </div>\n        <form id=\"diagnosticForm\" class=\"form-grid\">\n          <label>\n            <span>部屋の広さ</span>\n            <select id=\"roomSize\">\n              <option value=\"small\">6畳未満</option>\n              <option value=\"medium\" selected>6〜10畳</option>\n              <option value=\"large\">11〜15畳</option>\n              <option value=\"xlarge\">16畳以上</option>\n            </select>\n          </label>\n          <label>\n            <span>部屋干しの量</span>\n            <select id=\"laundryLoad\">\n              <option value=\"light\">少なめ（1人分中心）</option>\n              <option value=\"medium\" selected>普通（2人分くらい）</option>\n              <option value=\"heavy\">多め（家族ぶん）</option>\n            </select>\n          </label>\n          <label>\n            <span>使う頻度</span>\n            <select id=\"usageFrequency\">\n              <option value=\"sometimes\">雨の日中心</option>\n              <option value=\"often\" selected>週に数回</option>\n              <option value=\"daily\">ほぼ毎日</option>\n            </select>\n          </label>\n          <label>\n            <span>いちばん困っていること</span>\n            <select id=\"mainPain\">\n              <option value=\"drying\" selected>洗濯物が乾きにくい</option>\n              <option value=\"mold\">湿気・カビっぽさ</option>\n              <option value=\"space\">置き場所・重さが気になる</option>\n              <option value=\"power\">電気代が不安</option>\n            </select>\n          </label>\n        </form>\n      </section>\n\n      <section id=\"result\" class=\"card result\" aria-live=\"polite\">\n        <div class=\"section-head\">\n          <p class=\"section-label\">Your starting point</p>\n          <h2>最初に見るべき目安</h2>\n        </div>\n        <div class=\"result-top\">\n          <div>\n            <p class=\"result-kicker\">おすすめの比較スタート</p>\n            <h3 id=\"capacityLabel\">8〜10L/日クラス</h3>\n            <p id=\"summaryText\" class=\"summary\"></p>\n          </div>\n          <div class=\"score-card\">\n            <span>優先方式</span>\n            <strong id=\"typeLabel\">コンプレッサー式寄り</strong>\n            <small id=\"typeReason\"></small>\n          </div>\n        </div>\n\n        <div class=\"recommend-grid\">\n          <article class=\"recommend-card accent\">\n            <h3>まず比べる軸</h3>\n            <ul id=\"checkpoints\"></ul>\n          </article>\n          <article class=\"recommend-card\">\n            <h3>向いている人</h3>\n            <p id=\"fitText\"></p>\n          </article>\n          <article class=\"recommend-card\">\n            <h3>買う前のひとこと</h3>\n            <p id=\"cautionText\"></p>\n          </article>\n        </div>\n\n        <section class=\"money-block\">\n          <div class=\"section-head compact\">\n            <p class=\"section-label\">Monetization hook</p>\n            <h2>このあと自然につなげやすい比較導線</h2>\n          </div>\n          <div class=\"cta-grid\">\n            <a id=\"rakutenLink\" class=\"cta-card\" href=\"https://search.rakuten.co.jp/search/mall/%E9%99%A4%E6%B9%BF%E6%A9%9F%20%E9%83%A8%E5%B1%8B%E5%B9%B2%E3%81%97/\" target=\"_blank\" rel=\"noopener noreferrer sponsored\">\n              <strong>楽天で候補を見る</strong>\n              <span>価格帯とレビュー件数をざっと比較したい向け</span>\n            </a>\n            <a id=\"amazonLink\" class=\"cta-card\" href=\"https://www.amazon.co.jp/s?k=%E9%99%A4%E6%B9%BF%E6%A9%9F+%E9%83%A8%E5%B1%8B%E5%B9%B2%E3%81%97\" target=\"_blank\" rel=\"noopener noreferrer sponsored\">\n              <strong>Amazonで候補を見る</strong>\n              <span>方式・容量の在庫比較を早く進めたい向け</span>\n            </a>\n            <a id=\"yahooLink\" class=\"cta-card\" href=\"https://shopping.yahoo.co.jp/search?p=%E9%99%A4%E6%B9%BF%E6%A9%9F+%E9%83%A8%E5%B1%8B%E5%B9%B2%E3%81%97\" target=\"_blank\" rel=\"noopener noreferrer sponsored\">\n              <strong>Yahoo!ショッピングで候補を見る</strong>\n              <span>ポイント還元込みで見たい向け</span>\n            </a>\n          </div>\n          <p class=\"affiliate-note\">\n            ※ 現時点では検索結果ページへの比較導線です。将来アフィリエイトIDや個別比較記事へ差し替えやすい構成にしています。\n          </p>\n        </section>\n      </section>\n\n      <section class=\"card share-card\">\n        <div class=\"section-head compact\">\n          <p class=\"section-label\">SNS hook</p>\n          <h2>シェア用ひとこと</h2>\n        </div>\n        <textarea id=\"shareCopy\" readonly></textarea>\n        <button id=\"copyButton\" class=\"button primary\" type=\"button\">診断結果をコピー</button>\n        <p id=\"copyStatus\" class=\"copy-status\" aria-live=\"polite\"></p>\n      </section>\n\n      <section class=\"card notes\">\n        <div class=\"section-head\">\n          <p class=\"section-label\">How to think</p>\n          <h2>ざっくり選び方</h2>\n        </div>\n        <div class=\"notes-grid\">\n          <article>\n            <h3>乾燥速度を優先</h3>\n            <p>梅雨〜夏の部屋干し中心なら、まずは除湿能力とタンク容量を確認。家族ぶんを頻繁に干すなら余力が大事です。</p>\n          </article>\n          <article>\n            <h3>静音・軽さを優先</h3>\n            <p>寝室兼用や移動前提なら、サイズ・持ち手・動作音の記載も早めに見ると失敗しにくいです。</p>\n          </article>\n          <article>\n            <h3>電気代だけで決めない</h3>\n            <p>消費電力だけでなく、乾くまでの時間差も実使用コストに効きます。まずは使い方に合う方式を絞るのが先です。</p>\n          </article>\n        </div>\n      </section>\n\n      <section class=\"card faq\">\n        <div class=\"section-head\">\n          <p class=\"section-label\">FAQ</p>\n          <h2>よくある疑問</h2>\n        </div>\n        <details>\n          <summary>この診断だけで機種を決めていい？</summary>\n          <p>まだ入口です。ここでは「何L/日クラスから比較するか」「どの方式寄りか」を整理し、次の比較を楽にするのが目的です。</p>\n        </details>\n        <details>\n          <summary>衣類乾燥除湿機と普通の除湿機の違いは？</summary>\n          <p>衣類乾燥向けは送風や部屋干し導線が強いモデルが多めです。部屋干し中心なら、その表記があるモデルを優先して比較すると分かりやすいです。</p>\n        </details>\n      </section>\n    </main>\n\n    <script src=\"./script.js\"></script>\n  </body>\n</html>\n";
const DEHUMIDIFIER_CSS = ":root {\n  color-scheme: light;\n  --bg: #eff6ff;\n  --card: rgba(255, 255, 255, 0.94);\n  --ink: #0f172a;\n  --muted: #475569;\n  --line: #cbd5e1;\n  --accent: #0284c7;\n  --accent-2: #14b8a6;\n  --accent-soft: #e0f2fe;\n  --shadow: 0 20px 50px rgba(15, 23, 42, 0.08);\n}\n* { box-sizing: border-box; }\nbody {\n  margin: 0;\n  font-family: Inter, \"Hiragino Sans\", \"Noto Sans JP\", sans-serif;\n  background: linear-gradient(180deg, #dbeafe 0%, #eff6ff 35%, #f8fafc 100%);\n  color: var(--ink);\n}\n.shell { width: min(1100px, calc(100% - 32px)); margin: 0 auto; padding: 32px 0 72px; }\n.card {\n  background: var(--card);\n  border: 1px solid rgba(148, 163, 184, 0.26);\n  border-radius: 28px;\n  padding: 28px;\n  box-shadow: var(--shadow);\n  margin-bottom: 20px;\n}\n.hero {\n  background: linear-gradient(135deg, rgba(2,132,199,0.12), rgba(20,184,166,0.1));\n}\n.eyebrow, .section-label {\n  text-transform: uppercase; letter-spacing: 0.12em; font-size: 0.74rem; font-weight: 700; color: var(--accent);\n}\nh1 { font-size: clamp(2rem, 5vw, 3.7rem); line-height: 1.05; margin: 8px 0 16px; }\nh2 { font-size: clamp(1.35rem, 3vw, 2rem); margin: 0; }\nh3 { margin-top: 0; font-size: 1.08rem; }\n.lede, p, li, summary, span, small, textarea, select, button { line-height: 1.7; }\n.lede { font-size: 1.06rem; color: var(--muted); max-width: 760px; }\n.hero-points { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 20px; }\n.hero-points span, .score-card, .cta-card span, .affiliate-note {\n  color: var(--muted);\n}\n.hero-points span {\n  padding: 8px 14px; border-radius: 999px; background: white; border: 1px solid rgba(2,132,199,0.15); font-size: 0.95rem;\n}\n.section-head { display: grid; gap: 4px; margin-bottom: 18px; }\n.section-head.compact { margin-bottom: 14px; }\n.form-grid, .recommend-grid, .cta-grid, .notes-grid {\n  display: grid; gap: 16px;\n}\n.form-grid { grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }\nlabel span { display: block; font-weight: 700; margin-bottom: 8px; }\nselect, textarea, .button {\n  width: 100%; border-radius: 16px; border: 1px solid var(--line); font: inherit;\n}\nselect, textarea { padding: 14px 16px; background: white; color: var(--ink); }\n.result-top {\n  display: grid; grid-template-columns: 1.6fr 0.9fr; gap: 16px; align-items: start; margin-bottom: 18px;\n}\n.result-kicker { margin: 0 0 6px; color: var(--accent); font-weight: 700; }\n.summary { margin-top: 10px; color: var(--muted); }\n.score-card {\n  background: var(--accent-soft); border-radius: 22px; padding: 18px; border: 1px solid rgba(2,132,199,0.18);\n}\n.score-card strong { display: block; font-size: 1.2rem; color: var(--ink); margin: 6px 0; }\n.recommend-grid { grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }\n.recommend-card, .cta-card { border: 1px solid var(--line); border-radius: 22px; padding: 18px; background: white; }\n.recommend-card.accent { background: linear-gradient(180deg, #f0f9ff, #ffffff); }\n.recommend-card ul { margin: 0; padding-left: 1.2rem; }\n.money-block { margin-top: 18px; padding-top: 18px; border-top: 1px solid rgba(148, 163, 184, 0.25); }\n.cta-grid { grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }\n.cta-card { text-decoration: none; color: inherit; display: block; transition: transform 0.15s ease, border-color 0.15s ease; }\n.cta-card:hover { transform: translateY(-2px); border-color: var(--accent); }\n.cta-card strong { display: block; margin-bottom: 6px; font-size: 1.02rem; }\n.affiliate-note { font-size: 0.92rem; margin-top: 14px; }\ntextarea { min-height: 132px; resize: vertical; }\n.button {\n  cursor: pointer; padding: 14px 18px; font-weight: 700; background: var(--ink); color: white; border: none; margin-top: 12px;\n}\n.button.primary { background: linear-gradient(135deg, var(--accent), #2563eb); }\n.copy-status { min-height: 1.6em; margin: 10px 0 0; color: var(--accent); font-weight: 700; }\n.notes-grid { grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }\ndetails { padding: 14px 0; border-top: 1px solid rgba(148, 163, 184, 0.26); }\ndetails:first-of-type { border-top: none; padding-top: 0; }\nsummary { cursor: pointer; font-weight: 700; }\n@media (max-width: 760px) {\n  .shell { width: min(100% - 20px, 1100px); padding-top: 20px; }\n  .card { padding: 20px; border-radius: 22px; }\n  .result-top { grid-template-columns: 1fr; }\n}\n";
const DEHUMIDIFIER_JS = "const roomSize = document.getElementById('roomSize');\nconst laundryLoad = document.getElementById('laundryLoad');\nconst usageFrequency = document.getElementById('usageFrequency');\nconst mainPain = document.getElementById('mainPain');\n\nconst capacityLabel = document.getElementById('capacityLabel');\nconst summaryText = document.getElementById('summaryText');\nconst typeLabel = document.getElementById('typeLabel');\nconst typeReason = document.getElementById('typeReason');\nconst fitText = document.getElementById('fitText');\nconst cautionText = document.getElementById('cautionText');\nconst checkpoints = document.getElementById('checkpoints');\nconst shareCopy = document.getElementById('shareCopy');\nconst copyButton = document.getElementById('copyButton');\nconst copyStatus = document.getElementById('copyStatus');\nconst rakutenLink = document.getElementById('rakutenLink');\nconst amazonLink = document.getElementById('amazonLink');\nconst yahooLink = document.getElementById('yahooLink');\n\nconst capacityMap = [\n  { min: 0, label: '6L/日未満クラス', query: '除湿機 コンパクト 部屋干し', caution: '軽さ優先だと乾燥速度は控えめになりがち。レビューで衣類乾燥時間も確認。'},\n  { min: 4, label: '6〜8L/日クラス', query: '除湿機 6L 8L 部屋干し', caution: '一人暮らし〜二人暮らしの梅雨対策向け。タンク容量が小さすぎると連続運転で手間が出ます。'},\n  { min: 7, label: '8〜10L/日クラス', query: '除湿機 8L 10L 衣類乾燥', caution: '家族ぶんや頻度高めならこの辺から比較開始が無難。サイズ感も必ず確認。'},\n  { min: 10, label: '10L/日以上クラス', query: '除湿機 10L 12L 14L 衣類乾燥', caution: '乾燥力は強い反面、重さ・価格・運転音の確認が重要。'}\n];\n\nfunction calculate() {\n  let score = 0;\n  if (roomSize.value === 'medium') score += 2;\n  if (roomSize.value === 'large') score += 4;\n  if (roomSize.value === 'xlarge') score += 6;\n\n  if (laundryLoad.value === 'medium') score += 2;\n  if (laundryLoad.value === 'heavy') score += 4;\n\n  if (usageFrequency.value === 'often') score += 2;\n  if (usageFrequency.value === 'daily') score += 4;\n\n  if (mainPain.value === 'drying') score += 2;\n  if (mainPain.value === 'mold') score += 2;\n  if (mainPain.value === 'power') score += 1;\n\n  const capacity = [...capacityMap].reverse().find((item) => score >= item.min) || capacityMap[0];\n\n  let recommendedType = 'コンプレッサー式寄り';\n  let reason = '梅雨〜夏の部屋干し乾燥力を優先しやすい条件です。';\n  if (mainPain.value === 'space') {\n    recommendedType = 'デシカント式も有力';\n    reason = '持ち運びや軽さ・サイズ感を先に見たい条件です。';\n  } else if (mainPain.value === 'power') {\n    recommendedType = 'コンプレッサー式寄り';\n    reason = '梅雨時の電気代バランスを見やすい方式です。';\n  } else if (usageFrequency.value === 'daily' && laundryLoad.value === 'heavy') {\n    recommendedType = 'ハイブリッド式も比較候補';\n    reason = '通年で高頻度に使うなら、季節をまたぐ扱いやすさにも価値があります。';\n  }\n\n  capacityLabel.textContent = capacity.label;\n  summaryText.textContent = `${describeRoom()}・${describeLaundry()}・${describeFrequency()}なら、まずは ${capacity.label} から比較し始めると候補が絞りやすいです。`;\n  typeLabel.textContent = recommendedType;\n  typeReason.textContent = reason;\n  fitText.textContent = buildFitText(capacity.label, recommendedType);\n  cautionText.textContent = capacity.caution;\n\n  checkpoints.innerHTML = [\n    `${capacity.label} 前後で「衣類乾燥」表記があるか`,\n    'タンク容量と連続排水対応の有無',\n    mainPain.value === 'space' ? '本体サイズ・重さ・持ち手の使いやすさ' : '運転音と夜間利用レビュー',\n    usageFrequency.value === 'daily' ? '毎日回す前提で手入れしやすいか' : '必要な時だけ出して使いやすいか'\n  ].map((item) => `<li>${item}</li>`).join('');\n\n  updateLinks(capacity.query, recommendedType);\n  updateShareCopy(capacity.label, recommendedType);\n}\n\nfunction describeRoom() {\n  return ({ small: 'コンパクトな部屋', medium: '標準的な部屋', large: '広めの部屋', xlarge: 'かなり広めの空間' })[roomSize.value];\n}\nfunction describeLaundry() {\n  return ({ light: '洗濯量は少なめ', medium: '洗濯量は普通', heavy: '洗濯量は多め' })[laundryLoad.value];\n}\nfunction describeFrequency() {\n  return ({ sometimes: '使うのは雨の日中心', often: '週に数回は使う', daily: 'ほぼ毎日使う' })[usageFrequency.value];\n}\nfunction buildFitText(capacity, type) {\n  return `${capacity} を見ると、「大きすぎて候補が多すぎる」も「小さすぎて後悔する」も避けやすめ。${type} を軸に見ると、レビュー比較の観点も揃えやすいです。`;\n}\nfunction updateLinks(query, type) {\n  const encoded = encodeURIComponent(`${query} ${type}`);\n  rakutenLink.href = `https://search.rakuten.co.jp/search/mall/${encoded}/`;\n  amazonLink.href = `https://www.amazon.co.jp/s?k=${encoded}`;\n  yahooLink.href = `https://shopping.yahoo.co.jp/search?p=${encoded}`;\n}\nfunction updateShareCopy(capacity, type) {\n  shareCopy.value = `部屋干し除湿機サイズ診断をやってみた。\\n・目安: ${capacity}\\n・優先方式: ${type}\\n・条件: ${describeRoom()} / ${describeLaundry()} / ${describeFrequency()}\\n梅雨前に比較の入口を整理したい人向け。\\nhttps://niche-s.com/dehumidifier/`;\n}\n\n[roomSize, laundryLoad, usageFrequency, mainPain].forEach((element) => {\n  element.addEventListener('change', calculate);\n});\n\ncopyButton.addEventListener('click', async () => {\n  try {\n    await navigator.clipboard.writeText(shareCopy.value);\n    copyStatus.textContent = 'コピーしました。SNSやメモにそのまま貼れます。';\n  } catch (error) {\n    shareCopy.focus();\n    shareCopy.select();\n    copyStatus.textContent = '自動コピーできなかったので、選択状態にしました。';\n  }\n});\n\ncalculate();\n";
const ROOT_SITEMAP = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n  <url>\n    <loc>https://niche-s.com/</loc>\n    <changefreq>weekly</changefreq>\n    <priority>1.0</priority>\n  </url>\n  <url>\n    <loc>https://niche-s.com/mothers-day/</loc>\n    <changefreq>daily</changefreq>\n    <priority>0.9</priority>\n  </url>\n  <url>\n    <loc>https://niche-s.com/moving/</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.9</priority>\n  </url>\n  <url>\n    <loc>https://niche-s.com/dehumidifier/</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.9</priority>\n  </url>\n  <url>\n    <loc>https://niche-s.com/moving/checklist.html</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n  <url>\n    <loc>https://niche-s.com/moving/address-change.html</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n  <url>\n    <loc>https://niche-s.com/moving/utilities.html</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n  <url>\n    <loc>https://niche-s.com/moving/mover-comparison.html</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n  <url>\n    <loc>https://niche-s.com/moving/cost-estimate.html</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n</urlset>\n";

function html(body, cache='public, max-age=300') {
  return new Response(body, { headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': cache } });
}
function text(body, type, cache='public, max-age=300') {
  return new Response(body, { headers: { 'content-type': `${type}; charset=utf-8`, 'cache-control': cache } });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/' || url.pathname === '/index.html') {
      return html(ROOT_HTML);
    }

    if (url.pathname === '/styles.css') {
      return text(ROOT_CSS, 'text/css');
    }

    if (url.pathname === '/sitemap.xml') {
      return text(ROOT_SITEMAP, 'application/xml');
    }

    if (url.pathname === '/dehumidifier/' || url.pathname === '/dehumidifier/index.html') {
      return html(DEHUMIDIFIER_HTML);
    }

    if (url.pathname === '/dehumidifier/styles.css') {
      return text(DEHUMIDIFIER_CSS, 'text/css');
    }

    if (url.pathname === '/dehumidifier/script.js') {
      return text(DEHUMIDIFIER_JS, 'application/javascript');
    }

    if (url.pathname === '/api/diagnose' || url.pathname === '/mothers-day/api/diagnose') {
      return handleDiagnose(request, env, url);
    }

    if (url.pathname === '/x-client-ops') {
      return Response.redirect('https://x.niche-s.com/', 301);
    }

    if (url.pathname.startsWith('/x-client-ops/')) {
      const redirectUrl = new URL(request.url);
      redirectUrl.hostname = 'x.niche-s.com';
      redirectUrl.pathname = url.pathname.replace(/^\/x-client-ops/, '') || '/';
      return Response.redirect(redirectUrl.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  }
};

const CATEGORY_MAP = {
  flowers: {
    label: '花・フラワーギフト',
    keywords: ['母の日 花 カーネーション ギフト', '母の日 フラワーアレンジ ギフト', '母の日 プリザーブドフラワー ギフト'],
    excludes: ['ペット', '犬', '猫', '仏花', '供花'],
    note: '定番感を優先したい人向け。レビュー件数と配送締切の確認が大事。'
  },
  sweets: {
    label: 'スイーツ・お菓子',
    keywords: ['母の日 スイーツ ギフト', '母の日 焼き菓子 ギフト', '母の日 和菓子 ギフト'],
    excludes: ['訳あり 業務用', 'ペット', '犬', '猫'],
    note: '消えもの寄りで選びやすい定番。冷蔵・常温の違いも見やすいです。'
  },
  gourmet: {
    label: 'グルメ・飲み物',
    keywords: ['母の日 グルメ ギフト', '母の日 紅茶 ギフト', '母の日 コーヒー ギフト'],
    excludes: ['ペット', '犬', '猫', '業務用'],
    note: '少し丁寧な印象を出しやすい帯。お茶時間の提案にも向いています。'
  },
  practical: {
    label: '実用品・雑貨',
    keywords: ['母の日 実用品 ギフト', '母の日 ストール ギフト', '母の日 エプロン おしゃれ ギフト'],
    excludes: ['ペット', '犬', '猫', 'メンズ'],
    note: '使いやすさで選びたい人向け。色味や素材感は商品画像で要確認。'
  },
  relax: {
    label: '癒し・セルフケア',
    keywords: ['母の日 バスギフト', '母の日 ハンドクリーム ギフト', '母の日 リラックス ギフト'],
    excludes: ['ペット', '犬', '猫', 'メンズ'],
    note: '気分転換寄りの提案に向いたカテゴリ。香りの好みは個人差があります。'
  }
};

const BUDGETS = {
  lite: { label: '3,000円前後', min: 2000, max: 3999 },
  standard: { label: '5,000円前後', min: 4000, max: 6499 },
  premium: { label: '8,000円前後', min: 6500, max: 9999 },
  luxe: { label: '10,000円以上', min: 10000, max: 20000 }
};

const PURPOSES = {
  classic: { label: '定番で外しにくい', boost: ['flowers', 'sweets'] },
  easy: { label: '気軽に受け取りやすい', boost: ['sweets', 'gourmet'] },
  useful: { label: '使ってもらいやすい', boost: ['practical', 'relax'] },
  special: { label: '少し特別感を出したい', boost: ['flowers', 'relax', 'gourmet'] }
};

const URGENCY = {
  relaxed: { label: 'まだ比較する余裕あり', fastOnly: false },
  soon: { label: '今週中には決めたい', fastOnly: false },
  urgent: { label: 'かなり直前。配送優先', fastOnly: true }
};

async function handleDiagnose(request, env, url) {
  if (request.method !== 'GET') {
    return json({ error: 'Method not allowed' }, 405);
  }

  const budgetKey = url.searchParams.get('budget') || 'standard';
  const categoryKey = url.searchParams.get('category') || 'flowers';
  const purposeKey = url.searchParams.get('purpose') || 'classic';
  const urgencyKey = url.searchParams.get('urgency') || 'relaxed';

  const budget = BUDGETS[budgetKey] || BUDGETS.standard;
  const category = CATEGORY_MAP[categoryKey] || CATEGORY_MAP.flowers;
  const purpose = PURPOSES[purposeKey] || PURPOSES.classic;
  const urgency = URGENCY[urgencyKey] || URGENCY.relaxed;

  const applicationId = env.RAKUTEN_APPLICATION_ID;
  const accessKey = env.RAKUTEN_ACCESS_KEY;
  const affiliateId = env.RAKUTEN_AFFILIATE_ID;

  if (!applicationId || !accessKey) {
    return json({
      error: 'Rakuten applicationId/accessKey is not configured.',
      setupRequired: true
    }, 500);
  }

  try {
    const keywords = buildQueries(categoryKey, purposeKey);
    const results = [];
    const seen = new Set();

    for (const keyword of keywords) {
      const items = await fetchRakutenItems({ applicationId, accessKey, affiliateId, keyword, budget, urgency });
      const filteredItems = filterItems(items, categoryKey);
      for (const item of filteredItems) {
        if (seen.has(item.itemCode)) continue;
        seen.add(item.itemCode);
        results.push(shapeItem(item, category, purpose, budget));
        if (results.length >= 9) break;
      }
      if (results.length >= 9) break;
    }

    return json({
      request: {
        budget: budgetKey,
        budgetLabel: budget.label,
        category: categoryKey,
        categoryLabel: category.label,
        purpose: purposeKey,
        purposeLabel: purpose.label,
        urgency: urgencyKey,
        urgencyLabel: urgency.label
      },
      diagnosis: {
        headline: `${budget.label}で${category.label}を探すなら、まずは「${category.label} × ${purpose.label}」から見るのが素直です。`,
        note: category.note,
        checklist: buildChecklist(urgencyKey),
        searchKeywords: keywords
      },
      items: rankItems(results, purpose, categoryKey)
    });
  } catch (error) {
    return json({
      error: error instanceof Error ? error.message : 'Rakuten API の取得に失敗しました。',
      setupRequired: false
    }, 502);
  }
}

function buildQueries(categoryKey, purposeKey) {
  const category = CATEGORY_MAP[categoryKey] || CATEGORY_MAP.flowers;
  const boostTerms = {
    classic: '人気 定番 送料無料',
    easy: '高評価 すぐ届く 送料無料',
    useful: '実用的 おしゃれ 人気',
    special: '上質 特別感 人気'
  };

  return category.keywords.map((base) => `${base} ${boostTerms[purposeKey] || boostTerms.classic}`);
}

async function fetchRakutenItems({ applicationId, accessKey, affiliateId, keyword, budget, urgency }) {
  const endpoint = new URL('https://openapi.rakuten.co.jp/ichibams/api/IchibaItem/Search/20220601');
  endpoint.searchParams.set('applicationId', applicationId);
  endpoint.searchParams.set('accessKey', accessKey);
  endpoint.searchParams.set('format', 'json');
  endpoint.searchParams.set('formatVersion', '2');
  endpoint.searchParams.set('keyword', keyword);
  endpoint.searchParams.set('hits', '12');
  endpoint.searchParams.set('page', '1');
  endpoint.searchParams.set('sort', '+itemPrice');
  endpoint.searchParams.set('availability', '1');
  endpoint.searchParams.set('minPrice', String(budget.min));
  endpoint.searchParams.set('maxPrice', String(budget.max));
  endpoint.searchParams.set('imageFlag', '1');
  if (affiliateId) endpoint.searchParams.set('affiliateId', affiliateId);
  if (urgency.fastOnly) endpoint.searchParams.set('shipOverseasFlag', '0');

  const response = await fetch(endpoint, {
    headers: {
      'User-Agent': 'niche-s-mothers-day/1.0',
      'Origin': 'https://niche-s.com'
    },
    cf: {
      cacheTtl: 900,
      cacheEverything: true
    }
  });

  const text = await response.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error(`Rakuten API returned non-JSON (${response.status}).`);
  }

  if (!response.ok) {
    throw new Error(`Rakuten API error ${response.status}: ${(data?.error_description || data?.message || text).slice(0, 240)}`);
  }

  const items = Array.isArray(data.Items) ? data.Items : [];
  return items.filter((item) => item && item.itemCode && item.itemName && item.itemUrl);
}

function shapeItem(item, category, purpose, budget) {
  const price = Number(item.itemPrice || 0);
  const reviewAverage = Number(item.reviewAverage || 0);
  const reviewCount = Number(item.reviewCount || 0);
  const image = normalizeImageUrl(
    item.mediumImageUrls?.[0]?.imageUrl ||
    item.smallImageUrls?.[0]?.imageUrl ||
    item.itemImageUrl ||
    item.imageUrl ||
    ''
  );
  const affiliateUrl = item.affiliateUrl || item.itemUrl;

  return {
    itemCode: item.itemCode,
    itemName: item.itemName,
    shopName: item.shopName,
    itemPrice: price,
    reviewAverage,
    reviewCount,
    imageUrl: image,
    itemUrl: affiliateUrl,
    catchcopy: item.catchcopy,
    itemCaption: item.itemCaption,
    genreId: item.genreId,
    shippingFlag: item.asurakuFlag === 1 || item.shippingleadtime === 1,
    diagnosisReason: buildReason(item, category, purpose, budget)
  };
}

function normalizeImageUrl(url) {
  if (!url) return '';
  if (typeof url === 'object' && url.imageUrl) return normalizeImageUrl(url.imageUrl);
  return String(url).replace(/^http:\/\//, 'https://');
}

function filterItems(items, categoryKey) {
  const category = CATEGORY_MAP[categoryKey] || CATEGORY_MAP.flowers;
  const excludes = (category.excludes || []).map((term) => term.toLowerCase());
  return items.filter((item) => {
    const text = `${item.itemName || ''} ${item.catchcopy || ''} ${item.shopName || ''}`.toLowerCase();
    return !excludes.some((term) => text.includes(term));
  });
}

function buildReason(item, category, purpose, budget) {
  const points = [];
  const price = Number(item.itemPrice || 0);
  const gap = Math.abs(price - Math.round((budget.min + budget.max) / 2));
  if (gap <= 800) points.push('予算帯の真ん中に近い');
  if (Number(item.reviewCount || 0) >= 30) points.push('レビュー件数が比較しやすい');
  if (Number(item.reviewAverage || 0) >= 4.2) points.push('評価が高め');
  if ((item.catchcopy || '').length > 0) points.push('特徴が説明しやすい');
  if (points.length === 0) points.push(`${category.label}で探しやすい価格帯`);
  return `${purpose.label}の軸で見たとき、${points.slice(0, 2).join(' / ')}候補です。`;
}

function rankItems(items, purpose, categoryKey) {
  return [...items]
    .map((item) => {
      let score = 0;
      score += Math.max(0, 40 - Math.abs(item.itemPrice - medianBudget(items)) / 120);
      score += Math.min(item.reviewCount, 120) / 6;
      score += item.reviewAverage * 8;
      if (purpose.boost.includes(categoryKey)) score += 6;
      if (item.shippingFlag) score += 4;
      return { ...item, score: Math.round(score) };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);
}

function medianBudget(items) {
  if (!items.length) return 5000;
  const prices = items.map((item) => item.itemPrice).sort((a, b) => a - b);
  return prices[Math.floor(prices.length / 2)] || 5000;
}

async function proxyToWorker(request, upstreamBase, mountPath) {
  const incomingUrl = new URL(request.url);
  const upstreamUrl = new URL(upstreamBase);
  const subpath = incomingUrl.pathname.slice(mountPath.length) || '/';
  upstreamUrl.pathname = subpath;
  upstreamUrl.search = incomingUrl.search;

  const headers = new Headers(request.headers);
  headers.set('host', upstreamUrl.host);
  headers.set('x-forwarded-host', incomingUrl.host);
  headers.set('x-forwarded-proto', incomingUrl.protocol.replace(':', ''));

  return fetch(new Request(upstreamUrl.toString(), {
    method: request.method,
    headers,
    body: request.method === 'GET' || request.method === 'HEAD' ? undefined : request.body,
    redirect: 'manual'
  }));
}

function buildChecklist(urgencyKey) {
  if (urgencyKey === 'urgent') {
    return ['最短発送', '母の日当日着の可否', 'レビュー件数', '冷蔵/常温'];
  }
  if (urgencyKey === 'soon') {
    return ['配送締切', 'レビュー件数', '価格帯の比較', 'セット内容'];
  }
  return ['価格帯', 'レビュー件数', '見た目の好み', 'ショップ評価'];
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': status === 200 ? 'public, max-age=300' : 'no-store'
    }
  });
}
