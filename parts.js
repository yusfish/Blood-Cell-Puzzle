/**
 * parts.js — 血球拼圖零件圖庫（重整版 v2）
 *
 * ID 命名規則：
 *   B01–B05   body      細胞體（由小到大）
 *   C01–C09   cyto      細胞質（質地 / 顆粒）
 *   N01–N11   nuc       細胞核（形狀）
 *   NU0–NU3   nuo       核仁（由無到明顯）
 *   I00–I04   inc       包含體
 *
 * 圖片規格：512×512 px，PNG，透明背景
 * 路徑：parts/{layer}/{id}.png
 *
 * BASE_PROMPT（每張圖的 [BASE] 替換為此段）：
 *   "medical illustration style, pastel macaron color palette,
 *    soft watercolor outline, semi-realistic texture,
 *    transparent background, isolated single component,
 *    cute educational illustration, Procreate art style,
 *    soft glow highlight on top-left, 512x512px,
 *    PNG with alpha transparent background,
 *    no shadow, no background color"
 */

const PARTS_DEF = {

  /* ════════════════════════════════════════════════════
     BODY — 細胞體外殼（決定整體大小）
     size：相對畫布半徑比例
     col：[highlight, midtone, shadow]
     ════════════════════════════════════════════════════ */
  body: [
    {
      id: 'B01', name: '小圓形體',
      img: 'parts/body/B01.png',
      size: 0.54,
      col: ['#FFE8E0','#F5C0B0','#E8988A'], edge: '#D08880',
      // 適用：小淋巴球（7–8 µm）
      prompt: `A single very small round blood cell body, salmon-pink color,
        smooth circular border with subtle gradient shading,
        pale pink cytoplasm shell with soft inner glow,
        no nucleus, no granules visible, transparent interior,
        [BASE]`
    },
    {
      id: 'B03', name: '中圓形體',
      img: 'parts/body/B03.png',
      size: 0.72,
      col: ['#FDEAF2','#F4CCDE','#E8A8C8'], edge: '#CC8CB8',
      // 適用：嗜中性球、嗜酸性球、嗜鹼性球、桿狀核球、漿細胞（10–12 µm）
      //        反應性淋巴球、晚幼粒球、中幼粒球（13–15 µm）
      prompt: `A single medium round blood cell body, pale pink-lavender color,
        smooth circular border, soft radial gradient shading,
        translucent cytoplasm shell, no nucleus, no granules,
        suitable for neutrophils, eosinophils, basophils, band cells,
        plasma cells, reactive lymphocytes, metamyelocytes, myelocytes,
        [BASE]`
    },
    {
      id: 'B04', name: '大圓形體',
      img: 'parts/body/B04.png',
      size: 0.86,
      col: ['#E0EEF8','#B8D8EC','#90BCD8'], edge: '#78A4C4',
      // 適用：單核球、早幼粒球、芽細胞（16–20 µm）
      prompt: `A single large round blood cell body, pale blue-gray color,
        smooth circular border, soft radial gradient,
        translucent cytoplasm shell, monocyte or blast scale,
        [BASE]`
    },
    {
      id: 'B05', name: '不規則退化體',
      img: 'parts/body/B05.png',
      size: 0.80,
      col: ['#EEE8E4','#D8CCBE','#BCA898'], edge: '#A89080',
      // 適用：變性或受損細胞
      prompt: `A single degenerated or damaged blood cell body,
        irregular slightly shrunken shape, pale grayish-beige color,
        crenated or blurred border, pale washed-out cytoplasm,
        slightly collapsed or irregular circle, signs of cell damage,
        [BASE]`
    },
  ],

  /* ════════════════════════════════════════════════════
     CYTO — 細胞質（圓形裁切，透明背景）
     ════════════════════════════════════════════════════ */
  cyto: [
    {
      id: 'C01', name: '淡藍稀少質',
      img: 'parts/cyto/C01.png', type: 'plain-blue',
      // 適用：小淋巴球、芽細胞
      prompt: `Blood cell cytoplasm layer only, very scant pale sky-blue cytoplasm,
        agranular and smooth, extremely thin rim of light blue,
        nearly absent, very light and translucent,
        [BASE]`
    },
    {
      id: 'C02', name: '淡粉混合顆粒質',
      img: 'parts/cyto/C02.png', type: 'mixed-granule',
      // 適用：中幼粒球、早幼粒球
      prompt: `Blood cell cytoplasm layer only, pale pink-lavender cytoplasm
        with mixed primary dark purple (azurophilic) and secondary pink granules,
        granules medium-sized and evenly scattered throughout,
        soft pink background with mixed dark and light granule dots,
        [BASE]`
    },
    {
      id: 'C03', name: '嗜中性顆粒質',
      img: 'parts/cyto/C03.png', type: 'neutro',
      // 適用：嗜中性球、桿狀核球、晚幼粒球
      prompt: `Neutrophil cytoplasm layer only, pale pink cytoplasm
        filled with numerous fine lilac-pink secondary granules,
        tiny granules evenly distributed like fine dust,
        soft dusty rose and lavender tones, delicate even texture,
        [BASE]`
    },
    {
      id: 'C04', name: '嗜酸性顆粒質',
      img: 'parts/cyto/C04.png', type: 'eosino',
      // 適用：嗜酸性球
      prompt: `Eosinophil cytoplasm layer only, pale cytoplasm
        packed with large coarse bright orange-red granules,
        granules are uniform round beads, vivid coral-orange color,
        densely packed, refractile shiny appearance,
        [BASE]`
    },
    {
      id: 'C05', name: '嗜鹼性顆粒質',
      img: 'parts/cyto/C05.png', type: 'baso',
      // 適用：嗜鹼性球
      prompt: `Basophil cytoplasm layer only, large coarse deep purple-blue granules
        overlying and obscuring the nucleus,
        granules are irregular and very dark violet-purple,
        abundant densely packed dark granules covering the cell,
        [BASE]`
    },
    {
      id: 'C06', name: '灰藍空泡質',
      img: 'parts/cyto/C06.png', type: 'mono',
      // 適用：單核球
      prompt: `Monocyte cytoplasm layer only, abundant grayish-blue cytoplasm
        with a ground-glass or frosted appearance,
        scattered small clear cytoplasmic vacuoles,
        dusky blue-gray opaque texture, irregular fine granularity,
        [BASE]`
    },
    {
      id: 'C07', name: '深藍豐富質',
      img: 'parts/cyto/C07.png', type: 'reactive-lymph',
      // 適用：反應性淋巴球
      prompt: `Reactive lymphocyte cytoplasm layer only, abundant deep royal-blue cytoplasm,
        intensely basophilic deep blue, deeper blue at periphery paling toward nucleus,
        occasionally vacuolated, irregular border indented by adjacent red blood cells,
        [BASE]`
    },
    {
      id: 'C08', name: '深藍偏心質',
      img: 'parts/cyto/C08.png', type: 'plasma',
      // 適用：漿細胞
      prompt: `Plasma cell cytoplasm layer only, abundant deep royal-blue cytoplasm,
        eccentric distribution, perinuclear hof visible as a pale clear halo near nucleus,
        intensely basophilic, may contain pale pink Russell body globules,
        [BASE]`
    },
    {
      id: 'C09', name: '退化蒼白質',
      img: 'parts/cyto/C09.png', type: 'degenerated',
      // 適用：變性或受損細胞
      prompt: `Degenerated blood cell cytoplasm layer only, pale washed-out gray-pink cytoplasm,
        pyknotic or lysed appearance, indistinct granules,
        vacuoles and irregular patches, degraded texture,
        pale and nearly transparent, loss of normal staining,
        [BASE]`
    },
  ],

  /* ════════════════════════════════════════════════════
     NUCLEUS — 細胞核
     ════════════════════════════════════════════════════ */
  nucleus: [
    {
      id: 'N01', name: '小圓深核',
      img: 'parts/nucleus/N01.png', type: 'small-round',
      // 適用：小淋巴球
      prompt: `Blood cell nucleus only, very small round shape,
        deeply stained dark purple-violet, dense clumped heterochromatin,
        smooth round outline, nucleus nearly fills the entire cell,
        very dark condensed chromatin blocks, no nucleolus,
        [BASE]`
    },
    {
      id: 'N02', name: '車輪狀核',
      img: 'parts/nucleus/N02.png', type: 'cartwheel',
      // 適用：漿細胞
      prompt: `Plasma cell nucleus only, small round eccentric nucleus,
        classic cartwheel or clock-face chromatin pattern,
        alternating dark heterochromatin and pale euchromatin radiating from center,
        dark purple spokes on lighter background,
        [BASE]`
    },
    {
      id: 'N03', name: '不規則折疊核',
      img: 'parts/nucleus/N03.png', type: 'irregular',
      // 適用：反應性淋巴球
      prompt: `Reactive lymphocyte nucleus only, irregular ovoid or slightly lobulated shape,
        moderately condensed chromatin, indented or folded outline,
        medium-dark purple, coarser chromatin than small lymphocyte,
        eccentric position within cell,
        [BASE]`
    },
    {
      id: 'N04', name: '桿狀核',
      img: 'parts/nucleus/N04.png', type: 'band',
      // 適用：桿狀核球（Band neutrophil）
      prompt: `Band neutrophil nucleus only, thick curved band or sausage shape,
        uniform width throughout with no filament constrictions,
        dark purple, condensed chromatin, C-shaped or S-shaped curve,
        distinguishable from segmented by absence of thin connecting filaments,
        [BASE]`
    },
    {
      id: 'N05', name: '分葉核',
      img: 'parts/nucleus/N05.png', type: 'segmented',
      // 適用：嗜中性球（Segmented neutrophil）
      prompt: `Segmented neutrophil nucleus only, 3 to 4 distinct lobes,
        lobes connected by very thin hair-like chromatin filaments,
        dark purple, condensed chromatin,
        each lobe is a rounded sub-unit clearly separated,
        [BASE]`
    },
    {
      id: 'N06', name: '二葉核',
      img: 'parts/nucleus/N06.png', type: 'bilobed',
      // 適用：嗜酸性球、嗜鹼性球
      prompt: `Bilobed nucleus only, two round lobes connected by a short thin strand,
        medium-dark purple, condensed chromatin,
        spectacles or eyeglass shape, symmetric two-lobe design,
        [BASE]`
    },
    {
      id: 'N07', name: '馬蹄折疊核',
      img: 'parts/nucleus/N07.png', type: 'horseshoe',
      // 適用：單核球
      prompt: `Monocyte nucleus only, horseshoe or deeply kidney-indented shape,
        medium purple, moderately condensed lacy chromatin pattern,
        characteristic irregular folded outline with linear grooves,
        [BASE]`
    },
    {
      id: 'N08', name: '腎形核',
      img: 'parts/nucleus/N08.png', type: 'kidney',
      // 適用：晚幼粒球（Metamyelocyte）
      prompt: `Metamyelocyte nucleus only, kidney-bean shape with clear indentation,
        not yet band-shaped, round on one side and concave on the other,
        medium-dark purple, moderately condensed chromatin,
        transitional maturity between round and band,
        [BASE]`
    },
    {
      id: 'N09', name: '圓形中等核',
      img: 'parts/nucleus/N09.png', type: 'round-mid',
      // 適用：中幼粒球、早幼粒球
      prompt: `Myelocyte or promyelocyte nucleus only, round or slightly oval shape,
        medium purple, finely dispersed intermediate chromatin,
        slightly more open than mature cells but less than blast,
        one side may be slightly flattened,
        [BASE]`
    },
    {
      id: 'N10', name: '大圓淡核',
      img: 'parts/nucleus/N10.png', type: 'large-round',
      // 適用：芽細胞（Blast）
      prompt: `Blast cell nucleus only, large round or slightly irregular shape,
        pale purple-lavender color, very fine dispersed open chromatin,
        immature delicate chromatin pattern, large relative to cell,
        prominent nucleoli visible inside,
        [BASE]`
    },
    {
      id: 'N11', name: '退化固縮核',
      img: 'parts/nucleus/N11.png', type: 'pyknotic',
      // 適用：變性或受損細胞
      prompt: `Degenerated cell nucleus only, pyknotic shrunken appearance,
        small dense dark purple irregular clump,
        karyorrhexis: fragmented chromatin pieces,
        dark violet and irregular, signs of apoptosis or necrosis,
        [BASE]`
    },
  ],

  /* ════════════════════════════════════════════════════
     NUCLEOLUS — 核仁
     ════════════════════════════════════════════════════ */
  nucleolus: [
    {
      id: 'NU0', name: '無核仁',
      img: 'parts/nucleolus/NU0.png', type: 'none',
      prompt: null
    },
    {
      id: 'NU1', name: '1個小核仁',
      img: 'parts/nucleolus/NU1.png', type: 'small',
      // 適用：反應性淋巴球、中幼粒球
      prompt: `A single small nucleolus inside a cell nucleus,
        one pale lavender-white round dot, small and distinct,
        subtle soft glow, delicate circular outline,
        [BASE]`
    },
    {
      id: 'NU2', name: '1–2個核仁',
      img: 'parts/nucleolus/NU2.png', type: 'medium',
      // 適用：早幼粒球
      prompt: `One or two nucleoli inside a cell nucleus,
        pale lavender-white round shapes, moderately prominent,
        soft glow around each, slightly larger than NU1,
        [BASE]`
    },
    {
      id: 'NU3', name: '明顯大核仁',
      img: 'parts/nucleolus/NU3.png', type: 'prominent',
      // 適用：芽細胞（Blast）
      prompt: `One to three large prominent nucleoli inside a blast cell nucleus,
        pale lavender-white large round shapes,
        clearly visible and prominent, characteristic of immature blast cells,
        large relative to nucleus size, bright glow,
        [BASE]`
    },
  ],

  /* ════════════════════════════════════════════════════
     INCLUSION — 包含體
     ════════════════════════════════════════════════════ */
  inclusion: [
    {
      id: 'I00', name: '無包含體',
      img: 'parts/inclusion/I00.png', type: 'none',
      prompt: null
    },
    {
      id: 'I01', name: '嗜天青顆粒',
      img: 'parts/inclusion/I01.png', type: 'azurophilic',
      // 適用：早幼粒球
      prompt: `Azurophilic primary granules in blood cell cytoplasm,
        large coarse dark purple-red granules larger than neutrophil secondary granules,
        scattered irregularly in cytoplasm,
        prominent dark reddish-violet color, primary azurophilic granules,
        [BASE]`
    },
    {
      id: 'I02', name: 'Auer rod',
      img: 'parts/inclusion/I02.png', type: 'auer',
      // 適用：AML 芽細胞
      prompt: `Auer rod inclusion body in a blast cell cytoplasm,
        a single needle-shaped bright pink-red crystalline rod,
        elongated and thin, placed diagonally in cytoplasm,
        vivid pink-magenta color, sharp pointed ends,
        [BASE]`
    },
    {
      id: 'I03', name: 'Döhle body',
      img: 'parts/inclusion/I03.png', type: 'dohle',
      // 適用：毒性嗜中性球
      prompt: `Döhle body inclusion in neutrophil cytoplasm,
        a small pale blue-gray oval patch near the cell periphery,
        soft light blue color, smooth oval shape,
        discrete and small, peripheral location,
        [BASE]`
    },
    {
      id: 'I04', name: '毒性顆粒',
      img: 'parts/inclusion/I04.png', type: 'toxic-granule',
      // 適用：感染時毒性嗜中性球
      prompt: `Toxic granulation in neutrophil cytoplasm,
        prominent coarse dark purple-black granules,
        larger and darker than normal neutrophil granules,
        irregularly distributed throughout cytoplasm, sign of infection,
        [BASE]`
    },
  ],

};

/*
 * ════════════════════════════════════════════════════════
 * 生成圖片總覽
 * ════════════════════════════════════════════════════════
 * parts/body/      B01 B03 B04 B05   4 張（B02 已合併入 B03）
 * parts/cyto/      C01~C09   9 張
 * parts/nucleus/   N01~N11  11 張
 * parts/nucleolus/ NU1~NU3   3 張（NU0 無需生成）
 * parts/inclusion/ I01~I04   4 張（I00 無需生成）
 * ─────────────────────────────────
 * 合計需生成：32 張
 * ════════════════════════════════════════════════════════
 */
