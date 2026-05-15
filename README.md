# 🩸 血球拼圖遊戲
### Blood Cell Puzzle Game

一款以血液學形態學為主題的互動式教學遊戲，適合醫學生、醫事檢驗科學生及醫療專業人員使用。

---

## 🎮 遊戲模式

### 模式 A｜拼圖
將散落在桌面上的血球零件（細胞體、細胞質、細胞核、核仁、包含體）拖曳到中央組合區，依照題目拼出正確的血球構造。

### 模式 B｜找錯
畫面中央顯示一顆有**一個零件被替換成錯誤**的血球，找出錯誤層次並拖曳正確零件取代它。

---

## 📁 資料夾結構

```
blood-cell-game/
│
├── game.html             ← 主遊戲（從這裡開始）
├── editor.html           ← 題庫編輯器
├── parts.js              ← 零件圖庫定義
├── questions.js          ← 題庫
│
├── menu-bg.jpg           ← 開始選單背景圖（1920×1080 建議）
├── table-bg.jpg          ← 遊戲桌面背景圖（1920×1080 建議）
│
├── parts/                ← 零件 PNG 圖片（512×512，透明背景）
│   ├── body/             B01.png  B03.png  B04.png  B05.png
│   ├── cyto/             C01.png ～ C09.png
│   ├── nucleus/          N01.png ～ N11.png
│   ├── nucleolus/        NU0.png ～ NU3.png
│   └── inclusion/        I00.png ～ I04.png
│
├── photos/               ← 答對後顯示的真實顯微鏡照片
│   ├── segmented-neutrophil-1.jpg
│   ├── segmented-neutrophil-2.jpg
│   └── ...（每種細胞 2 張）
│
└── music/                ← 背景音樂（MP3）
    ├── menu-bg.mp3       ← 選單固定曲
    ├── track-1.mp3       ← 輕快集中
    ├── track-2.mp3       ← 沉穩思考
    └── track-3.mp3       ← 活潑挑戰
```

---

## 🩺 題庫內容

| 難度 | 細胞種類 |
|---|---|
| ⭐ 初級（5 題） | 分葉核嗜中性球、嗜酸性球、嗜鹼性球、淋巴球、單核球 |
| ⭐⭐ 中級（5 題） | 桿狀核球、反應性淋巴球、漿細胞、晚幼粒球、毒性嗜中性球（Döhle body）|
| ⭐⭐⭐ 困難（6 題） | 中幼粒球、早幼粒球、芽細胞、含 Auer rod 芽細胞、變性嗜中性球、毒性嗜中性球（毒性顆粒）|

---

## ✏️ 更新題庫

### 使用編輯器（推薦）

1. 用瀏覽器開啟 `editor.html`
2. 點「＋ 新增題目」或選擇現有題目編輯
3. 設定各層零件、填寫形態學提示、加入照片路徑
4. 按「⬇ 匯出 questions.js」下載
5. 將下載的 `questions.js` 覆蓋舊檔
6. 重新整理 `game.html` 即完成更新

### 匯入現有題庫

在編輯器右上角點「📂 匯入 questions.js」，選擇檔案即可載入繼續編輯。

---

## 🖼️ 自訂圖片

### 背景圖片

| 檔案 | 用途 | 建議規格 |
|---|---|---|
| `menu-bg.jpg` | 開始選單背景 | 1920×1080，JPG/PNG/WebP |
| `table-bg.jpg` | 遊戲桌面背景 | 1920×1080，JPG/PNG/WebP |

兩張圖片均使用 `cover` 自動填滿螢幕，主要視覺建議置中。

### 零件圖片

- 規格：**512×512 px，PNG，透明背景**
- 風格建議：Pastel macaron color palette，soft watercolor outline，Procreate art style
- 命名規則需與 `parts.js` 中的 `id` 一致（如 `B03.png`、`C07.png`）
- 若圖片不存在，遊戲自動退回 Canvas 程式繪製

### AI 圖片生成提示詞

每個零件的提示詞已寫在 `parts.js` 的 `prompt` 欄位，在 `[BASE]` 處替換為：

```
medical illustration style, pastel macaron color palette,
soft watercolor outline, semi-realistic texture,
transparent background, isolated single component,
cute educational illustration, Procreate art style,
soft glow highlight on top-left, 512x512px,
PNG with alpha transparent background,
no shadow, no background color
```

---

## 🎵 背景音樂

| 檔案 | 用途 | 播放時機 |
|---|---|---|
| `music/menu-bg.mp3` | 選單固定曲 | 開啟頁面後自動播放 |
| `music/track-1.mp3` | 輕快集中 | 遊戲中（可選擇）|
| `music/track-2.mp3` | 沉穩思考 | 遊戲中（可選擇）|
| `music/track-3.mp3` | 活潑挑戰 | 遊戲中（可選擇）|

建議格式：MP3，44.1kHz Stereo，2–3 分鐘，無縫循環。

> **注意：** 部分瀏覽器在使用者互動前會阻擋自動播放。點選任意按鈕後音樂即會開始，無需額外操作。

---

## 🖥️ 系統需求

- **瀏覽器：** Chrome、Edge、Firefox、Safari 最新版本
- **螢幕：** 最低 900px 寬、560px 高（建議桌機或橫向平板）
- **網路：** 部署後無需網路（純靜態）

---

## 🚀 部署到 GitHub Pages

1. 在 [github.com](https://github.com) 建立新的 Repository（Public）
2. 將所有檔案上傳至 Repository
3. 進入 `Settings` → `Pages`
4. Source 選 `Deploy from a branch`，Branch 選 `main`，資料夾選 `/ (root)`
5. 儲存後等待約 1–2 分鐘

部署完成後網址為：
```
https://你的帳號.github.io/blood-cell-game/game.html
```

### 更新題庫（部署後）

1. 用 `editor.html` 匯出新的 `questions.js`
2. 前往 GitHub Repository，點選 `questions.js`
3. 右上角點鉛筆圖示（Edit this file）
4. 貼上新內容 → Commit changes
5. 約 1 分鐘後網站自動更新

---

## 📋 零件 ID 對照表

### 細胞體 Body

| ID | 名稱 | 適用細胞 |
|---|---|---|
| B01 | 小圓形體 | 淋巴球 |
| B03 | 中圓形體 | 嗜中性球、嗜酸性球、嗜鹼性球、桿狀核球、漿細胞、反應性淋巴球、晚幼粒球、中幼粒球 |
| B04 | 大圓形體 | 單核球、早幼粒球、芽細胞 |
| B05 | 不規則退化體 | 變性細胞 |

### 細胞質 Cytoplasm

| ID | 名稱 | 適用細胞 |
|---|---|---|
| C01 | 淡藍稀少質 | 淋巴球、芽細胞 |
| C02 | 淡粉混合顆粒質 | 中幼粒球、早幼粒球 |
| C03 | 嗜中性顆粒質 | 嗜中性球、桿狀核球、晚幼粒球 |
| C04 | 嗜酸性顆粒質 | 嗜酸性球 |
| C05 | 嗜鹼性顆粒質 | 嗜鹼性球 |
| C06 | 灰藍空泡質 | 單核球 |
| C07 | 深藍豐富質 | 反應性淋巴球 |
| C08 | 深藍偏心質 | 漿細胞 |
| C09 | 退化蒼白質 | 變性細胞 |

### 細胞核 Nucleus

| ID | 名稱 | 適用細胞 |
|---|---|---|
| N01 | 小圓深核 | 淋巴球 |
| N02 | 車輪狀核 | 漿細胞 |
| N03 | 不規則折疊核 | 反應性淋巴球 |
| N04 | 桿狀核 | 桿狀核球 |
| N05 | 分葉核 | 嗜中性球 |
| N06 | 二葉核 | 嗜酸性球、嗜鹼性球 |
| N07 | 馬蹄折疊核 | 單核球 |
| N08 | 腎形核 | 晚幼粒球 |
| N09 | 圓形中等核 | 中幼粒球、早幼粒球 |
| N10 | 大圓淡核 | 芽細胞 |
| N11 | 退化固縮核 | 變性細胞 |

### 核仁 Nucleolus

| ID | 名稱 | 適用細胞 |
|---|---|---|
| NU0 | 無核仁 | 成熟白血球 |
| NU1 | 1 個小核仁 | 反應性淋巴球、中幼粒球 |
| NU2 | 1–2 個核仁 | 早幼粒球 |
| NU3 | 明顯大核仁 | 芽細胞 |

### 包含體 Inclusion

| ID | 名稱 | 適用細胞 |
|---|---|---|
| I00 | 無包含體 | 正常細胞 |
| I01 | 嗜天青顆粒 | 早幼粒球 |
| I02 | Auer rod | AML 芽細胞 |
| I03 | Döhle body | 毒性嗜中性球 |
| I04 | 毒性顆粒 | 毒性嗜中性球 |

---

## 📸 照片命名規則

每題對應 2 張照片，放在 `photos/` 資料夾：

| 細胞 | 照片檔名 |
|---|---|
| 分葉核嗜中性球 | `segmented-neutrophil-1.jpg` / `-2.jpg` |
| 嗜酸性球 | `eosinophil-1.jpg` / `-2.jpg` |
| 嗜鹼性球 | `basophil-1.jpg` / `-2.jpg` |
| 淋巴球 | `small-lymphocyte-1.jpg` / `-2.jpg` |
| 單核球 | `monocyte-1.jpg` / `-2.jpg` |
| 桿狀核球 | `band-neutrophil-1.jpg` / `-2.jpg` |
| 反應性淋巴球 | `reactive-lymphocyte-1.jpg` / `-2.jpg` |
| 漿細胞 | `plasma-cell-1.jpg` / `-2.jpg` |
| 晚幼粒球 | `metamyelocyte-1.jpg` / `-2.jpg` |
| 毒性嗜中性球（Döhle） | `toxic-neutrophil-dohle-1.jpg` / `-2.jpg` |
| 中幼粒球 | `myelocyte-1.jpg` / `-2.jpg` |
| 早幼粒球 | `promyelocyte-1.jpg` / `-2.jpg` |
| 芽細胞 | `blast-1.jpg` / `-2.jpg` |
| 含 Auer rod 芽細胞 | `blast-auer-rod-1.jpg` / `-2.jpg` |
| 變性嗜中性球 | `degenerated-neutrophil-1.jpg` / `-2.jpg` |
| 毒性嗜中性球（毒性顆粒） | `toxic-neutrophil-granule-1.jpg` / `-2.jpg` |

---

*Blood Cell Puzzle Game — 血液學形態學互動教學工具*
