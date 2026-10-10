# ポートフォリオサイト 設計書

## アーキテクチャ概要

静的サイト構成。ビルドステップなし。

```
shimejii.github.io/
├── index.html      # ページ構造・マークアップ
├── main.css        # デザインシステム・レイアウト・コンポーネントスタイル
├── main.js         # 資格カード描画・ソート機能
└── cert.json       # 資格データ（データソース）
```

---

## コンポーネント設計

### ヘッダー (`<header>`)

| 要素 | 説明 |
|------|------|
| `<h1>` | サイト名テキスト、中央揃え |
| 背景 | `--brand-100` |
| 下ボーダー | `20px double var(--brand-400)` |
| 高さ | `100px`、flex で垂直中央揃え |

---

### 自己紹介セクション (`.profile`)

| 要素 | 説明 |
|------|------|
| レイアウト | flex、横並び、`space-between` |
| ボーダー | `5px solid var(--brand-500)` |
| 角丸 | `12px` |
| プロフィール画像 | Gravatar URL（200px） |
| 説明文 | `<p>` タグ内テキスト |

#### レスポンシブ対応

| ブレークポイント | レイアウト |
|----------------|-----------|
| 通常（768px 以上） | flex 横並び（`flex-direction: row`） |
| 小画面（767px 以下） | 縦積み（`flex-direction: column`）、画像・テキストを中央揃え |

---

### 資格セクション

#### ソートコントロール (`.circle-select`)

```
[ 取得年月 | 名前 ]   ← ラジオボタン擬似実装
```

- input[type=radio] を `display: none` で非表示
- `<label>` のクリックで選択状態を制御
- 選択中: `--radio-btn-success`
- 未選択: `--radio-btn`

#### 矢印装飾 (`.yazirushi`)

```
──────────────────────────────
                             ╲  ← .line02（45deg 回転）
```

- `.line01`: 横線（幅 300px、高さ 5px）
- `.line02`: 右端に絶対配置した斜め線（幅 30px、`rotate(45deg)`）

#### 資格カード (`.card`)

```
┌──────────────┐
│ 取得年月: Y/M │  ← .date-label（角丸バッジ）
│              │
│   資格名      │  ← <h3>
│              │
└──────────────┘
```

| プロパティ | 値 |
|-----------|-----|
| 幅 | 120px |
| 高さ | 160px |
| 背景 | `--card`（brand-100） |
| ボーダー | `1px solid var(--card-border)` |
| 角丸 | 12px |
| ホバー背景 | `--card-success`（success-100） |
| ホバーアニメ | `translateY(-4px)`, duration: 0.4s, ease-out |

---

### 経歴セクション (`.timeline`)

現状はプレーンな div リスト。タイムライン UI への拡張を想定。

---

## データフロー

```
cert.json
    │
    │ fetch() [非同期]
    ▼
main.js: certifications 配列（元データとして保持）
    │
    │ render(certs)
    ▼
DOM: .certification コンテナに .card を動的挿入
    │
    │ ラジオボタン change イベント
    ▼
[...certifications] でコピー（元データを破壊しない）
    │
    │ sort()
    ▼
render(sorted)
```

---

## CSS カスタムプロパティ設計

### カラートークン階層

```
Primitive tokens          Semantic tokens
──────────────────        ──────────────────────────
--brand-100               --card
--brand-500               --card-border, --background
--success-100             --card-success
--success-300             --radio-btn-success
--brand-300               --radio-btn
--neutral-50              --character-white, --background
--neutral-500             --character-black, --radio-btn-character
```

### タイポグラフィ

- フォント: `やさしさゴシック`、フォールバック `sans-serif`
- `font-family` は `:root` に定義

---

## 拡張ポイント

| 箇所 | 拡張内容 |
|------|---------|
| `cert.json` | 資格追加・更新（ビュー変更不要） |
| `.timeline` | 経歴エントリの追加、タイムライン UI への発展 |
| `:root` | ダークモード対応（セマンティックトークンの値を上書き） |
| `main.js` | `vendor` フィールドを使ったベンダー別フィルター機能 |
