## Introduction

「おいたま」のポートフォリオサイト。自己紹介・資格・経歴をまとめた静的 Web サイト。  
GitHub Pages でホスティングされ、バニラ HTML / CSS / JavaScript で実装されている。

## Requirements

### Requirement 1

**User Story:** サイト訪問者として、一貫したデザインシステムのもとでページを閲覧したい。そうすることで、統一感のある見た目を体験できる。

#### Acceptance Criteria

1. CSS カスタムプロパティは `:root` に以下のコードで定義されていること（正とする）。

```css
:root {
    /* --primary: #4f46e5; */
    --primary: #28A8D3;
    --brand-50: #eaf6fb;
    --brand-100: #bce4f1;
    --brand-200: #9cd7eb;
    --brand-300: #6fc5e2;
    --brand-400: #53b9dc;
    --brand-500: #28a8d3;
    --brand-600: #2499c0;
    --brand-700: #1c7796;
    --brand-800: #165c74;
    --brand-900: #114759;

    --neutral-50: #ebeded;
    --neutral-100: #c1c6c7;
    --neutral-200: #a3aaac;
    --neutral-300: #798386;
    --neutral-400: #5f6b6f;
    --neutral-500: #37464b;
    --neutral-600: #324044;
    --neutral-700: #273235;
    --neutral-800: #1e2729;
    --neutral-900: #171d20;

    --success-50: #edfbea;
    --success-100: #c8f1bc;
    --success-200: #adeb9c;
    --success-300: #88e26f;
    --success-400: #71dc53;
    --success-500: #4dd328;
    --success-600: #46c024;
    --success-700: #37961c;
    --success-800: #2a7416;
    --success-900: #205911;

    --warning-50: #fafbea;
    --warinig-100: #f0f1bc;
    --warinig-200: #e8eb9c;
    --warning-300: #dee26f;
    --warning-400: #d8dc53;
    --warning-500: #ced328;
    --warning-600: #bbc024;
    --warning-700: #92961c;
    --warning-800: #717416;
    --warning-900: #575911;

    --info-50: #eaf6fb;
    --info-100: #bce4f1;
    --info-200: #9cd7eb;
    --info-300: #6fc5e2;
    --info-400: #53b9dc;
    --info-500: #28a8d3;
    --info-600: #2499c0;
    --info-700: #1c7796;
    --info-800: #165c74;
    --info-900: #114759;

    --error-50: #fbeaea;
    --error-100: #f1bcbc;
    --error-200: #eb9c9c;
    --error-300: #e26f6f;
    --error-400: #dc5353;
    --error-500: #d32828;
    --error-600: #c02424;
    --error-700: #961c1c;
    --error-800: #741616;
    --error-900: #591111;

    --background: var(--neutral-50);
    --backgroud-h2: var(--neutral-50);
    --character-black: var(--neutral-500);
    --character-white: var(--neutral-50);
    --card: var(--brand-100);
    --card-border: var(--brand-500);
    --card-success: var(--success-100);
    --radio-btn: var(--brand-300);
    --radio-btn-success: var(--success-300);
    --radio-btn-character: var(--neutral-500);
    font-family: "やさしさゴシック", sans-serif;
}
```

2. `h2` にはブランドカラーの左ボーダー（10px solid）が付いていること。
3. `section` には角丸（12px）と上マージン（50px）が適用されていること。

---

### Requirement 2

**User Story:** サイト訪問者として、ページ全体の構成を把握したい。そうすることで、どこに何があるかを素早く理解できる。

#### Acceptance Criteria

1. サイトは単一の `index.html` で構成され、`main.css` と `main.js` を読み込んでいること。
2. ページタイトルは「おいたまのプロフィールページです。」であること。
3. フォントは「やさしさゴシック」が使用されており、`font-family` は `:root` で定義されていること。

---

### Requirement 3

**User Story:** サイト訪問者として、ヘッダーでサイトの目的を把握したい。そうすることで、誰のサイトかをひと目で認識できる。

#### Acceptance Criteria

1. ヘッダーにサイト名「おいたまのプロフィールサイトです」が `<h1>` で表示されていること。
2. ヘッダーの下端が `--brand-400` の二重線ボーダーで区切られていること。
3. ヘッダーの背景色が `--brand-100` であること。

---

### Requirement 4

**User Story:** サイト訪問者として、運営者の自己紹介を読みたい。そうすることで、どんな人物かを理解できる。

#### Acceptance Criteria

1. セクション見出しが「🍄自己紹介」であること。
2. Gravatar から取得したプロフィール画像が表示されていること。
3. 以下の自己紹介テキストが表示されていること。
   > SI業界でシステムエンジニアとして勤務しています。既存システムの運用・改善に携わる中で、より「ものづくり」に近い領域への関心が強まり、現在はインフラおよびアプリケーションの設計・構築領域への関わり方を模索しています。
4. プロフィール画像と説明文がブランドカラーのボーダーで囲まれたカード内に横並びで配置されていること。小画面（モバイル）では縦積みに切り替わること。

---

### Requirement 5

**User Story:** サイト訪問者として、運営者が取得した資格を一覧で確認したい。そうすることで、スキルレベルや専門性を把握できる。

#### Acceptance Criteria

1. セクション見出しが「🏆資格」であること。
2. 資格データが `cert.json` から非同期で取得されること。
3. `cert.json` のスキーマが以下の通りであること。

```json
{
  "certifications": [
    {
      "vendor": "string",
      "name": "string",
      "year": number,
      "month": number
    }
  ]
}
```

4. 各資格がカード形式（幅 120px × 高さ 160px）で表示され、取得年月と資格名を含んでいること。
5. カードが flex-wrap で横並びに表示され、画面幅に応じて折り返すこと。
6. カードにホバーすると上方向にアニメーション（translateY -4px）し、背景色が `--card-success` に変化すること。
7. ソートコントロール（ラジオボタン）が「取得年月」「名前」の 2 通りの並び替えを提供すること。
   - 取得年月ソート: 年→月の昇順
   - 名前ソート: 日本語ロケール (`ja`) での辞書順昇順
8. ソートコントロールがピル型（角丸）の見た目で表示され、選択中の項目が `--radio-btn-success` でハイライトされること。
9. 矢印装飾（`.yazirushi`）がソートコントロールとカード一覧の間に表示されること。

---

### Requirement 6

**User Story:** サイト訪問者として、運営者のキャリア経歴を時系列で確認したい。そうすることで、どのような経験を積んできたかを理解できる。

#### Acceptance Criteria

1. セクション見出しが「🧑‍💻経歴」であること。
2. 経歴がタイムライン形式で表示されること。
3. 現時点で「2025/07〜 ServiceNow 維持保守」が表示されていること（今後追加予定）。

---

### Requirement 7

**User Story:** 開発者として、保守しやすい構成でサイトを管理したい。そうすることで、コンテンツの追加・変更を低コストで行える。

#### Acceptance Criteria

1. JavaScript が `DOMContentLoaded` イベント以降に動作すること。
2. 外部ライブラリ・フレームワークを使用せず、バニラ HTML / CSS / JS で実装されていること。
3. サイトが GitHub Pages で静的ホスティングできること。
4. `cert.json` を変更するだけで資格情報を追加・更新できること（データとビューの分離）。
