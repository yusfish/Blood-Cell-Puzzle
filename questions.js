/**
 * questions.js — 血球拼圖題庫
 * 由 editor.html 自動產生於 2026/5/15 下午10:08:03
 * 請勿手動修改，使用 editor.html 編輯後重新匯出。
 *
 * 更新步驟：
 *   1. 將此檔案覆蓋遊戲資料夾中的舊 questions.js
 *   2. 重新整理 game.html 即完成更新
 */

const QUESTIONS = [
  {
    "text": "分葉核嗜中性球",
    "sub": "Segmented neutrophil",
    "diff": 1,
    "answer": {
      "body": "B03",
      "cyto": "C03",
      "nucleus": "N05",
      "nucleolus": "NU0",
      "inclusion": "I00"
    },
    "hint": "【簡介】外周血最常見的白血球，佔 50–70%，為細菌感染的第一道防線，具吞噬及殺菌能力。\n\n【細胞體】中等大小，直徑約 10–14 µm，略大於紅血球的 1.5 倍。\n【細胞質】豐富，淡粉紅色，含大量細緻淡紫色次級（嗜中性）顆粒，均勻分布。\n【細胞核】深紫色，分 3–4 葉，各葉間以纖細染色質絲相連，此為成熟標誌。\n【核仁】無核仁（成熟細胞）。\n【包含體】正常無包含體。",
    "photos": [
      {
        "src": "photos/segmented-neutrophil-1.jpg",
        "credit": "Teresa Scordino MD/American Society of Hematology (ASH)"
      },
      {
        "src": "photos/segmented-neutrophil-2.jpg",
        "credit": "Seyed Mohammad Sadegh Pezeshki (Ph.D.)/American Society of Hematology (ASH)"
      }
    ]
  },
  {
    "text": "嗜酸性球",
    "sub": "Eosinophil",
    "diff": 1,
    "answer": {
      "body": "B03",
      "cyto": "C04",
      "nucleus": "N06",
      "nucleolus": "NU0",
      "inclusion": "I00"
    },
    "hint": "【簡介】佔外周血白血球 1–4%，參與過敏反應與對抗寄生蟲感染，可釋放毒性蛋白破壞寄生蟲。\n\n【細胞體】中等大小，直徑約 12–15 µm，與嗜中性球相近。\n【細胞質】充滿粗大、均勻的橘紅色嗜酸性顆粒，顆粒具折光性，為最重要的辨識特徵。\n【細胞核】中等深紫色，典型呈 2 葉，形如眼鏡或啞鈴，葉間有細絲連接。\n【核仁】無核仁（成熟細胞）。\n【包含體】正常無包含體。",
    "photos": [
      {
        "src": "photos/eosinophil-1.jpg",
        "credit": "Teresa Scordino/American Society of Hematology (ASH)"
      },
      {
        "src": "photos/eosinophil-2.jpg",
        "credit": "John Anastasi, MD; Timothy C Carll, MD/American Society of Hematology (ASH)"
      }
    ]
  },
  {
    "text": "嗜鹼性球",
    "sub": "Basophil",
    "diff": 1,
    "answer": {
      "body": "B03",
      "cyto": "C05",
      "nucleus": "N06",
      "nucleolus": "NU0",
      "inclusion": "I00"
    },
    "hint": "【簡介】外周血最稀少的白血球，僅佔 0–1%。顆粒內含組織胺與肝素，參與過敏及發炎反應。\n\n【細胞體】中等大小，直徑約 10–14 µm。\n【細胞質】含大量粗大、深紫藍色嗜鹼性顆粒，顆粒常遮蓋並覆蓋於核上，為最重要辨識特徵。\n【細胞核】深紫色，通常呈 2 葉，但常被顆粒遮蔽而難以清楚辨認。\n【核仁】無核仁（成熟細胞）。\n【包含體】正常無包含體。",
    "photos": [
      {
        "src": "photos/basophil-1.jpg",
        "credit": "Peter Maslak/American Society of Hematology (ASH)"
      },
      {
        "src": "photos/basophil-2.jpg",
        "credit": "Najmaldin Saki, PhD/American Society of Hematology (ASH)"
      }
    ]
  },
  {
    "text": "淋巴球",
    "sub": "Lymphocyte",
    "diff": 1,
    "answer": {
      "body": "B01",
      "cyto": "C01",
      "nucleus": "N01",
      "nucleolus": "NU0",
      "inclusion": "I00"
    },
    "hint": "【簡介】外周血第二多的白血球，佔 20–40%，分 T 細胞與 B 細胞，負責特異性免疫反應。\n\n【細胞體】體積最小的白血球，直徑僅 7–10 µm，與紅血球相近或略大。\n【細胞質】極稀少，僅呈淡藍色薄環圍繞核旁，幾乎被核完全佔據。\n【細胞核】大而圓，深紫色，染色質緻密凝塊狀，幾乎填滿整個細胞，核質比極高。\n【核仁】成熟淋巴球無可見核仁。\n【包含體】正常無包含體。",
    "photos": [
      {
        "src": "photos/small-lymphocyte-1.jpg",
        "credit": "Teresa Scordino/American Society of Hematology (ASH)"
      },
      {
        "src": "photos/small-lymphocyte-2.jpg",
        "credit": "Javad Garavand/American Society of Hematology (ASH)"
      }
    ]
  },
  {
    "text": "單核球",
    "sub": "Monocyte",
    "diff": 1,
    "answer": {
      "body": "B04",
      "cyto": "C06",
      "nucleus": "N07",
      "nucleolus": "NU0",
      "inclusion": "I00"
    },
    "hint": "【簡介】外周血體積最大的白血球，佔 2–8%。進入組織後分化為巨噬細胞，具強大吞噬能力，參與先天免疫與抗原呈現。\n\n【細胞體】體積最大，直徑 15–20 µm，為紅血球的 2–3 倍。\n【細胞質】豐富，灰藍色，表面呈毛玻璃樣（ground-glass），常含細小透明空泡與細微嗜天青顆粒。\n【細胞核】中等紫色，呈馬蹄形、腎形或深度折疊狀，染色質呈蕾絲網狀（lacy pattern），較嗜中性球疏鬆。\n【核仁】成熟單核球通常無明顯核仁。\n【包含體】正常無包含體。",
    "photos": [
      {
        "src": "photos/monocyte-1.jpg",
        "credit": "Peter Maslak/American Society of Hematology (ASH)"
      },
      {
        "src": "photos/monocyte-2.jpg",
        "credit": "Peter Maslak/American Society of Hematology (ASH)"
      }
    ]
  },
  {
    "text": "桿狀核球",
    "sub": "Band neutrophil",
    "diff": 2,
    "answer": {
      "body": "B03",
      "cyto": "C03",
      "nucleus": "N04",
      "nucleolus": "NU0",
      "inclusion": "I00"
    },
    "hint": "【簡介】嗜中性球的晚期前驅細胞，為分葉核前一階段。急性感染或骨髓刺激時增多，稱為「核左移」（left shift）。\n\n【細胞體】中等大小，直徑約 10–14 µm，與分葉核嗜中性球相近。\n【細胞質】淡粉紅色，含細緻嗜中性顆粒，與分葉核嗜中性球相似。\n【細胞核】深紫色，呈粗厚 C 形、S 形或彎曲的腸型，寬度均勻，尚未縊縮成分葉，無細絲連接，此為與分葉核的關鍵區別。\n【核仁】無核仁。\n【包含體】正常無包含體。",
    "photos": [
      {
        "src": "photos/band-neutrophil-1.jpg",
        "credit": "Teresa Scordino MD/American Society of Hematology (ASH)"
      },
      {
        "src": "photos/band-neutrophil-2.jpg",
        "credit": "Teresa Scordino MD/American Society of Hematology (ASH)"
      }
    ]
  },
  {
    "text": "反應性淋巴球",
    "sub": "Reactive / Atypical lymphocyte",
    "diff": 2,
    "answer": {
      "body": "B03",
      "cyto": "C07",
      "nucleus": "N03",
      "nucleolus": "NU1",
      "inclusion": "I00"
    },
    "hint": "【簡介】由抗原刺激活化的淋巴球，常見於病毒感染，尤其是 EBV（傳染性單核球增多症）與 CMV 感染，又稱為異型淋巴球（Downey cell）。\n\n【細胞體】體積明顯增大，直徑可達 15–25 µm，遠大於小淋巴球，邊緣常受周圍紅血球壓迫而呈不規則形。\n【細胞質】豐富，深藍色，邊緣顏色更深（深藍色邊帶），是最重要的辨識特徵，偶見空泡。\n【細胞核】中等紫色，不規則或卵圓形，有折疊或輕度分葉，染色質較小淋巴球疏鬆，核質比降低。\n【核仁】可見 1 個小核仁，染色質較為開放。\n【包含體】正常無包含體。",
    "photos": [
      {
        "src": "photos/reactive-lymphocyte-1.jpg",
        "credit": "Peter Maslak/American Society of Hematology (ASH)"
      },
      {
        "src": "photos/reactive-lymphocyte-2.jpg",
        "credit": "Peter Maslak/American Society of Hematology (ASH)"
      }
    ]
  },
  {
    "text": "漿細胞",
    "sub": "Plasma cell",
    "diff": 2,
    "answer": {
      "body": "B03",
      "cyto": "C08",
      "nucleus": "N02",
      "nucleolus": "NU0",
      "inclusion": "I00"
    },
    "hint": "【簡介】由 B 淋巴球終末分化而來，負責大量分泌抗體（免疫球蛋白）。正常不出現於外周血，多見於骨髓；外周血出現提示漿細胞瘤或多發性骨髓瘤。\n\n【細胞體】中等大小，直徑約 10–15 µm，外形卵圓或圓形。\n【細胞質】深藍色，豐富，因大量核糖體（製造免疫球蛋白）而深染，偏心分布。核旁常見淡染的 Golgi 體區（核周暈，perinuclear hof），為重要辨識標誌。\n【細胞核】小而圓，偏心位置（eccentric），染色質呈車輪狀或時鐘面狀（clock-face）放射排列，由深染塊交替淡染區構成，極具特徵。\n【核仁】成熟漿細胞通常無明顯核仁。\n【包含體】正常無包含體；可見 Russell body（粉紅色球狀免疫球蛋白包含體）。",
    "photos": [
      {
        "src": "photos/plasma-cell-1.jpg",
        "credit": "Timothy C Carll, MD/American Society of Hematology (ASH)"
      },
      {
        "src": "photos/plasma-cell-2.jpg",
        "credit": "Gabriel Coradini, BSc/American Society of Hematology (ASH)"
      }
    ]
  },
  {
    "text": "晚幼粒球",
    "sub": "Metamyelocyte",
    "diff": 2,
    "answer": {
      "body": "B03",
      "cyto": "C03",
      "nucleus": "N08",
      "nucleolus": "NU0",
      "inclusion": "I00"
    },
    "hint": "【簡介】嗜中性球發育第四階段（芽細胞→早幼粒→中幼粒→晚幼粒→桿狀核→分葉核）。正常僅見於骨髓；外周血出現代表骨髓受刺激（如感染、G-CSF使用）或病態造血。\n\n【細胞體】中等大小，直徑約 12–16 µm。\n【細胞質】豐富，淡粉紅色，含嗜中性次級顆粒，初級顆粒已消失，外觀與桿狀核球相似。\n【細胞核】中等紫色，呈腎形或明顯凹陷，一側平坦或凹入，但尚未縊縮成桿狀，為此階段的形態特徵。\n【核仁】無核仁（已消失）。\n【包含體】正常無包含體。",
    "photos": [
      {
        "src": "photos/metamyelocyte-1.jpg",
        "credit": "Teresa Scordino MD/American Society of Hematology (ASH)"
      },
      {
        "src": "photos/metamyelocyte-2.jpg",
        "credit": "cellwiki.net"
      }
    ]
  },
  {
    "text": "毒性嗜中性球（Döhle body）",
    "sub": "Toxic neutrophil with Döhle body",
    "diff": 2,
    "answer": {
      "body": "B03",
      "cyto": "C03",
      "nucleus": "N05",
      "nucleolus": "NU0",
      "inclusion": "I03"
    },
    "hint": "【簡介】嗜中性球受嚴重感染、敗血症、燙傷或化療刺激後出現的毒性形態變化，反映骨髓在應激狀態下加速釋放細胞。\n\n【細胞體】中等大小，與正常嗜中性球相近。\n【細胞質】淡粉紅色，含正常嗜中性顆粒；可見細胞質嗜鹼性增強（較藍）的毒性變化。\n【細胞核】深紫色，分葉核，外觀與成熟嗜中性球相似。\n【核仁】無核仁。\n【包含體】Döhle body：細胞質中的淡藍灰色橢圓形包含體，位於細胞周邊，由殘留的粗面內質網（rER）構成，是毒性變化的主要標誌之一。",
    "photos": [
      {
        "src": "photos/toxic-neutrophil-dohle-1.jpg",
        "credit": "John Lazarchick/American Society of Hematology (ASH)"
      },
      {
        "src": "photos/toxic-neutrophil-dohle-2.jpg",
        "credit": "Işıl Erdoğan Özünal/American Society of Hematology (ASH)"
      }
    ]
  },
  {
    "text": "中幼粒球",
    "sub": "Myelocyte",
    "diff": 3,
    "answer": {
      "body": "B03",
      "cyto": "C02",
      "nucleus": "N09",
      "nucleolus": "NU1",
      "inclusion": "I00"
    },
    "hint": "【簡介】嗜中性球發育第三階段，首次出現次級（嗜中性）顆粒，是骨髓中最後一個仍能分裂增殖的前驅細胞。正常僅見於骨髓。\n\n【細胞體】中等大小，直徑約 12–18 µm，比早幼粒球略小。\n【細胞質】淡粉紅色，含混合顆粒：粗大深紫紅色初級（嗜天青）顆粒逐漸減少，淡粉色次級顆粒開始出現並增多。\n【細胞核】中等紫色，圓形或卵圓形，一側略扁平或有輕微凹陷，染色質開始凝聚，較早幼粒球緻密，核仁隱約可見。\n【核仁】可見 1 個不清晰的小核仁，漸趨消失。\n【包含體】正常無包含體。",
    "photos": [
      {
        "src": "photos/myelocyte-1.jpg",
        "credit": "cellwiki.net"
      },
      {
        "src": "photos/myelocyte-2.jpg",
        "credit": "cellwiki.net"
      }
    ]
  },
  {
    "text": "早幼粒球",
    "sub": "Promyelocyte",
    "diff": 3,
    "answer": {
      "body": "B04",
      "cyto": "C02",
      "nucleus": "N09",
      "nucleolus": "NU2",
      "inclusion": "I01"
    },
    "hint": "【簡介】嗜中性球發育第二階段，為骨髓中體積最大的有核前驅細胞。正常僅見於骨髓；外周血大量出現（> 20%）須優先排除急性早幼粒細胞白血病（APL / AML-M3），具 PML-RARA 基因融合。\n\n【細胞體】體積大，直徑可達 15–25 µm，是各分化階段中最大者。\n【細胞質】豐富，淡藍色至粉紅色，充滿大量粗大、深紫紅色嗜天青初級顆粒，散布全胞質，為最重要辨識特徵。\n【細胞核】中等紫色，大而圓形或卵圓形，染色質較芽細胞緻密，核仁仍清晰可見。\n【核仁】可見 1–2 個明顯核仁。\n【包含體】大量嗜天青初級顆粒（即初級顆粒本身即為包含體的前身）。",
    "photos": [
      {
        "src": "photos/promyelocyte-1.jpg",
        "credit": "cellwiki.net"
      },
      {
        "src": "photos/promyelocyte-2.jpg",
        "credit": "Najmaldin Saki, PhD/American Society of Hematology (ASH)"
      }
    ]
  },
  {
    "text": "芽細胞",
    "sub": "Blast",
    "diff": 3,
    "answer": {
      "body": "B04",
      "cyto": "C01",
      "nucleus": "N10",
      "nucleolus": "NU3",
      "inclusion": "I00"
    },
    "hint": "【簡介】最原始、最未成熟的造血細胞。正常骨髓中佔 < 5%；外周血出現芽細胞或骨髓芽細胞 ≥ 20% 為急性白血病（AML 或 ALL）的診斷標準。\n\n【細胞體】體積大，直徑 15–20 µm，核質比極高。\n【細胞質】極稀少，淡藍色薄環，幾乎被核占滿，無顆粒（淋巴芽細胞型）或少量嗜天青顆粒（骨髓芽細胞型）。\n【細胞核】大，圓形或略不規則，染色質極細緻疏鬆如絲絨狀（fine chromatin），核膜清晰，為未成熟細胞的重要特徵。\n【核仁】明顯，可見 1–3 個大核仁，清晰可辨，為未成熟細胞的標誌。\n【包含體】無（與含 Auer rod 的芽細胞區別）。",
    "photos": [
      {
        "src": "photos/blast-1.jpg",
        "credit": "Elizabeth L. Courville, MD/American Society of Hematology (ASH)"
      },
      {
        "src": "photos/blast-2.jpg",
        "credit": "cellwiki.net"
      }
    ]
  },
  {
    "text": "含 Auer rod 芽細胞",
    "sub": "Blast with Auer rod",
    "diff": 3,
    "answer": {
      "body": "B04",
      "cyto": "C01",
      "nucleus": "N10",
      "nucleolus": "NU3",
      "inclusion": "I02"
    },
    "hint": "【簡介】與一般芽細胞形態相同，但細胞質中出現 Auer rod（奧爾小體）。Auer rod 為 AML 的特異性標誌，可直接區分 AML 與 ALL，在 APL（AML-M3）中可出現多條，稱為「柴束（faggot cell）」。\n\n【細胞體】體積大，直徑 15–20 µm，核質比高。\n【細胞質】稀少，淡藍色，幾乎無顆粒，與一般芽細胞相同。\n【細胞核】大，圓形，染色質細緻疏鬆，核膜清晰。\n【核仁】明顯，可見 1–3 個大核仁。\n【包含體】Auer rod：細胞質中的針狀或棒狀粉紅色晶體，由嗜天青初級顆粒融合而成，MPO 染色陽性，為 AML 的病理性診斷依據。",
    "photos": [
      {
        "src": "photos/blast-auer-rod-1.jpg",
        "credit": "Najmaldin Saki, PhD/American Society of Hematology (ASH)"
      },
      {
        "src": "photos/blast-auer-rod-2.jpg",
        "credit": "Teresa Scordino/American Society of Hematology (ASH)"
      }
    ]
  },
  {
    "text": "變性嗜中性球",
    "sub": "Degenerated neutrophil",
    "diff": 3,
    "answer": {
      "body": "B05",
      "cyto": "C09",
      "nucleus": "N11",
      "nucleolus": "NU0",
      "inclusion": "I03"
    },
    "hint": "【簡介】細胞死亡過程中的形態學表現，非獨立細胞類型。見於嚴重感染、敗血症、樣本體外放置過久，或化療後骨髓抑制時。\n\n【細胞體】不規則，略縮小，邊緣可呈鋸齒狀（crenation），整體形態失常。\n【細胞質】蒼白，退化，幾乎失去正常染色，顆粒消失或模糊，可見空泡與不規則斑塊。\n【細胞核】深紫色，固縮（pyknosis）：核縮小、深染、結構消失；或碎裂（karyorrhexis）：核破碎成不規則碎片，為細胞凋亡的形態標誌。\n【核仁】無核仁（退化消失）。\n【包含體】可見 Döhle body（若為毒性變化所致），或退化性空泡。",
    "photos": [
      {
        "src": "photos/degenerated-neutrophil-1.jpg",
        "credit": " Brent B."
      },
      {
        "src": "photos/degenerated-neutrophil-2.jpg",
        "credit": "Teresa Scordino MD/American Society of Hematology (ASH)"
      }
    ]
  },
  {
    "text": "毒性嗜中性球（毒性顆粒）",
    "sub": "Toxic neutrophil with toxic granulation",
    "diff": 3,
    "answer": {
      "body": "B03",
      "cyto": "C03",
      "nucleus": "N05",
      "nucleolus": "NU0",
      "inclusion": "I04"
    },
    "hint": "【簡介】嗜中性球毒性變化之一，反映骨髓在嚴重感染或全身性炎症（如膿毒症）下的應激狀態。毒性顆粒出現程度可作為感染嚴重度的參考指標。\n\n【細胞體】中等大小，與正常嗜中性球相近，外形可能略不規則。\n【細胞質】淡粉紅色背景，正常次級顆粒仍存在；另見粗大深紫黑色毒性顆粒散布其中，比正常嗜天青顆粒更大更深，由初級顆粒異常染色所致。\n【細胞核】深紫色，分葉核，外觀與正常嗜中性球相似，可能伴有核左移。\n【核仁】無核仁。\n【包含體】毒性顆粒（toxic granulation）：粗大深紫黑色，不均勻分布於細胞質，為區別正常嗜中性球的關鍵。可與 Döhle body 同時出現。",
    "photos": [
      {
        "src": "photos/toxic-neutrophil-granule-1.jpg",
        "credit": "Teresa Kraus/American Society of Hematology (ASH)"
      },
      {
        "src": "photos/toxic-neutrophil-granule-2.jpg",
        "credit": "Sumitha Baskaran/American Society of Hematology (ASH)"
      }
    ]
  }
];
