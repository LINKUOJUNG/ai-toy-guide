import { Product, Post, Category, Tag, AffiliateLink, AdPlacement, Author } from './types';

export const mockAuthors: Author[] = [
  { id: '1', name: 'AI 玩具研究員', avatar: '/avatars/researcher.jpg', bio: '專注 AI 智能玩具評測，幫助家長找到最適合孩子的科技玩具。' },
];

export const mockCategories: Category[] = [
  { id: '1', name: 'AI 機器人玩具', slug: 'ai-robots', description: '具備 AI 功能的互動機器人玩具', type: 'product', seo_title: 'AI 機器人玩具推薦', seo_description: '精選 AI 機器人玩具評測與推薦', image: null, created_at: '2025-01-01', updated_at: '2025-01-01' },
  { id: '2', name: 'AI 互動寵物', slug: 'ai-pets', description: '智慧互動寵物玩具', type: 'product', seo_title: 'AI 互動寵物推薦', seo_description: '最新 AI 互動寵物玩具評測', image: null, created_at: '2025-01-01', updated_at: '2025-01-01' },
  { id: '3', name: 'STEAM 編程玩具', slug: 'steam-coding', description: 'STEAM 教育與程式學習玩具', type: 'product', seo_title: 'STEAM 編程玩具推薦', seo_description: '適合兒童的 STEAM 編程玩具', image: null, created_at: '2025-01-01', updated_at: '2025-01-01' },
  { id: '4', name: '語音互動玩具', slug: 'voice-interactive', description: '支援語音辨識與互動的玩具', type: 'product', seo_title: null, seo_description: null, image: null, created_at: '2025-01-01', updated_at: '2025-01-01' },
  { id: '5', name: '智慧陪伴玩具', slug: 'smart-companion', description: 'AI 陪伴型智慧玩具', type: 'product', seo_title: null, seo_description: null, image: null, created_at: '2025-01-01', updated_at: '2025-01-01' },
  { id: '6', name: '幼兒啟蒙 AI 玩具', slug: 'toddler-ai', description: '適合 3-5 歲幼兒的 AI 玩具', type: 'product', seo_title: null, seo_description: null, image: null, created_at: '2025-01-01', updated_at: '2025-01-01' },
  { id: '10', name: '評測文章', slug: 'reviews', description: 'AI 玩具評測', type: 'post', seo_title: null, seo_description: null, image: null, created_at: '2025-01-01', updated_at: '2025-01-01' },
  { id: '11', name: '選購指南', slug: 'buying-guide', description: 'AI 玩具選購指南', type: 'post', seo_title: null, seo_description: null, image: null, created_at: '2025-01-01', updated_at: '2025-01-01' },
  { id: '12', name: '新品上架', slug: 'new-arrivals', description: '最新 AI 玩具情報', type: 'post', seo_title: null, seo_description: null, image: null, created_at: '2025-01-01', updated_at: '2025-01-01' },
];

export const mockTags: Tag[] = [
  { id: '1', name: '適合3歲以上', slug: 'age-3-plus', created_at: '2025-01-01' },
  { id: '2', name: '適合6歲以上', slug: 'age-6-plus', created_at: '2025-01-01' },
  { id: '3', name: '生日禮物', slug: 'birthday-gift', created_at: '2025-01-01' },
  { id: '4', name: '親子共玩', slug: 'parent-child', created_at: '2025-01-01' },
  { id: '5', name: '程式學習', slug: 'coding', created_at: '2025-01-01' },
  { id: '6', name: '高CP值', slug: 'best-value', created_at: '2025-01-01' },
  { id: '7', name: '入門推薦', slug: 'beginner', created_at: '2025-01-01' },
];

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Eilik 桌上型情感互動機器人',
    slug: 'eilik-desktop-robot',
    brand: 'Energize Lab',
    category_id: '1',
    description: 'Eilik 是一款桌上型情感互動機器人，具備觸摸感應、語音互動、情緒表達等功能。小巧可愛的外型搭配豐富的互動模式，讓它成為桌面上最有趣的 AI 夥伴。',
    short_description: '桌上型情感互動機器人，觸摸回應、情緒表達',
    main_image: '/products/eilik.jpg',
    gallery_images: ['/products/eilik-2.jpg', '/products/eilik-3.jpg'],
    price_min: 2500, price_max: 3500,
    age_range: '8 歲以上',
    ai_features: ['觸摸感應', '情緒表達', '互動遊戲', '多機聯動'],
    app_required: false, wifi_required: false,
    battery_life: 'USB 供電',
    features: ['超過 20 種情緒反應', '觸摸互動', '多台聯動玩法', '桌面大小'],
    pros: ['外型可愛療癒', '互動反應豐富', '不需要 App', '不需要連網', '多台可以一起玩'],
    cons: ['需要 USB 供電', '沒有語音對話功能', '遊戲模式較少'],
    rating_overall: 4.2, rating_ai_interaction: 3.8, rating_education: 3.0, rating_safety: 4.5,
    rating_durability: 4.0, rating_ease_of_use: 4.5, rating_value: 4.0, rating_parent_child: 3.5,
    recommended_for: ['喜歡療癒小物的人', '桌面擺飾愛好者', '不想連網的家長', '科技玩具入門'],
    not_recommended_for: ['想要語音對話功能的人', '希望有教育內容的家長'],
    safety_notes: ['需要 USB 供電，注意線材安全', '小零件不適合 3 歲以下'],
    education_value: '培養情感互動與觀察力',
    use_scenarios: ['桌面陪伴', '療癒紓壓', '朋友間互動'],
    affiliate_links: [],
    is_featured: true, is_new: false, is_hot: true, is_published: true,
    seo_title: 'Eilik 桌上型情感互動機器人評測｜值得買嗎？',
    seo_description: 'Eilik 桌上型情感互動機器人完整評測，分析優缺點、適合年齡、價格與購買建議。',
    schema_json: null, created_at: '2025-01-15', updated_at: '2025-05-01',
  },
  {
    id: '2',
    name: 'Miko 3 AI 兒童學習機器人',
    slug: 'miko-3-ai-robot',
    brand: 'Miko',
    category_id: '5',
    description: 'Miko 3 是專為兒童設計的 AI 學習陪伴機器人，具備語音對話、視覺辨識、教育內容、故事播放等功能。內建豐富的學習內容與互動遊戲，是 AI 兒童教育機器人的代表產品。',
    short_description: 'AI 兒童學習陪伴機器人，語音對話、教育內容',
    main_image: '/products/miko3.jpg',
    gallery_images: ['/products/miko3-2.jpg'],
    price_min: 5000, price_max: 8000,
    age_range: '5-10 歲',
    ai_features: ['語音對話', '視覺辨識', 'AI 學習引擎', '故事播放', '程式教學'],
    app_required: true, wifi_required: true,
    battery_life: '約 6 小時',
    features: ['英語會話練習', '數學遊戲', 'STEM 學習', '自主移動', '家長監控 App'],
    pros: ['教育內容豐富', '語音辨識準確', '有家長控制功能', '持續更新內容'],
    cons: ['需要 Wi-Fi', '訂閱制費用', 'App 操作稍複雜', '中文支援有限'],
    rating_overall: 4.0, rating_ai_interaction: 4.5, rating_education: 4.5, rating_safety: 4.0,
    rating_durability: 3.5, rating_ease_of_use: 3.5, rating_value: 3.5, rating_parent_child: 4.0,
    recommended_for: ['想讓孩子練英文的家長', '重視 STEM 教育的家庭', '5-10 歲兒童'],
    not_recommended_for: ['預算有限的家庭', '不想付訂閱費的人', '需要中文語音的用戶'],
    safety_notes: ['需要連網，注意隱私設定', '建議家長設定使用時間'],
    education_value: '英語會話、數學邏輯、STEM 知識、程式思維',
    use_scenarios: ['居家學習', '英語練習', '睡前故事', '親子互動'],
    affiliate_links: [],
    is_featured: true, is_new: false, is_hot: true, is_published: true,
    seo_title: 'Miko 3 AI 兒童學習機器人評測｜功能、價格與使用心得',
    seo_description: 'Miko 3 AI 兒童學習機器人評測：語音對話、教育內容、適合年齡與優缺點分析。',
    schema_json: null, created_at: '2025-02-01', updated_at: '2025-05-01',
  },
  {
    id: '3',
    name: 'DJI RoboMaster S1 教育機器人',
    slug: 'dji-robomaster-s1',
    brand: 'DJI',
    category_id: '3',
    description: 'DJI RoboMaster S1 是一台可程式化的教育機器人，支援 Scratch 與 Python 程式語言。配備智慧感應裝甲、FPV 攝影機、機械雲台，可以進行編程、射擊對戰、AI 辨識等玩法。',
    short_description: 'STEAM 教育機器人，支援 Scratch 與 Python',
    main_image: '/products/robomaster-s1.jpg',
    gallery_images: [],
    price_min: 12000, price_max: 16000,
    age_range: '10 歲以上',
    ai_features: ['AI 視覺辨識', '手勢辨識', '掌聲辨識', 'S1 機器人對戰'],
    app_required: true, wifi_required: true,
    battery_life: '約 35 分鐘（活動模式）',
    features: ['Scratch & Python 編程', '46 個可編程元件', 'FPV 駕駛', '射擊對戰', '6 個 AI 模組'],
    pros: ['程式教育價值極高', 'DJI 品質保證', '玩法多元', '社群活躍'],
    cons: ['價格偏高', '組裝需要時間', '電池續航較短', '佔空間較大'],
    rating_overall: 4.5, rating_ai_interaction: 4.0, rating_education: 5.0, rating_safety: 4.0,
    rating_durability: 4.5, rating_ease_of_use: 3.0, rating_value: 3.5, rating_parent_child: 4.5,
    recommended_for: ['對程式有興趣的青少年', '家長想培養 STEM 能力', '科技玩家'],
    not_recommended_for: ['10 歲以下兒童', '預算有限的家庭', '只想要簡單互動的用戶'],
    safety_notes: ['射擊功能需注意安全', '電池充電需大人監督'],
    education_value: 'Scratch/Python 程式設計、AI 視覺辨識、機械結構、物理概念',
    use_scenarios: ['程式學習', '機器人對戰', '科學實驗', 'AI 探索'],
    affiliate_links: [],
    is_featured: true, is_new: false, is_hot: false, is_published: true,
    seo_title: 'DJI RoboMaster S1 教育機器人評測｜值得買嗎？',
    seo_description: 'DJI RoboMaster S1 教育機器人完整評測，Scratch/Python 編程、AI 辨識功能分析。',
    schema_json: null, created_at: '2025-01-20', updated_at: '2025-04-15',
  },
  {
    id: '4',
    name: 'ROYBI Robot 幼兒 AI 學習機器人',
    slug: 'roybi-robot',
    brand: 'ROYBI',
    category_id: '6',
    description: 'ROYBI Robot 是專為 3-7 歲幼兒設計的 AI 語言學習機器人。透過互動對話、故事、歌曲與遊戲，幫助幼兒學習英語和 STEM 基礎概念。外型圓潤安全，適合幼兒抱握。',
    short_description: '幼兒 AI 語言學習機器人，互動教學',
    main_image: '/products/roybi.jpg',
    gallery_images: [],
    price_min: 4000, price_max: 6000,
    age_range: '3-7 歲',
    ai_features: ['AI 語音互動', '個人化學習', '情緒辨識', '語言教學'],
    app_required: true, wifi_required: true,
    battery_life: '約 4 小時',
    features: ['500+ 課程內容', '語音互動', '臉部辨識', 'STEM 教學', '多語言支援'],
    pros: ['適合幼兒的圓潤設計', '教育內容豐富', '個人化學習路徑', '安全材質'],
    cons: ['需要連網', '內容以英語為主', '螢幕較小', '價格偏高'],
    rating_overall: 3.8, rating_ai_interaction: 4.0, rating_education: 4.5, rating_safety: 5.0,
    rating_durability: 4.0, rating_ease_of_use: 4.0, rating_value: 3.5, rating_parent_child: 4.0,
    recommended_for: ['3-7 歲幼兒', '想讓孩子接觸英語的家長', '重視早期教育的家庭'],
    not_recommended_for: ['需要中文教學的家長', '不想連網的家庭', '8 歲以上兒童'],
    safety_notes: ['圓潤設計適合幼兒', '連網功能建議家長設定'],
    education_value: '英語學習、STEM 基礎、社交技能',
    use_scenarios: ['英語啟蒙', '睡前故事', '互動學習'],
    affiliate_links: [],
    is_featured: false, is_new: true, is_hot: false, is_published: true,
    seo_title: 'ROYBI Robot 幼兒 AI 學習機器人評測｜幼兒英語學習好幫手？',
    seo_description: 'ROYBI Robot 幼兒 AI 學習機器人評測，適合 3-7 歲，英語啟蒙與 STEM 教育。',
    schema_json: null, created_at: '2025-03-01', updated_at: '2025-05-01',
  },
];

export const mockPosts: Post[] = [
  {
    id: '1',
    title: '2026 年 AI 智能玩具推薦排行榜：10 款最值得買的 AI 玩具',
    slug: '2026-ai-toy-ranking',
    excerpt: '想買 AI 智能玩具但不知道怎麼選？我們整理了 2026 年最值得購買的 10 款 AI 玩具，從 AI 機器人、互動寵物到 STEAM 編程玩具，幫你找到最適合的選擇。',
    content: '<h2>為什麼 AI 智能玩具越來越受歡迎？</h2><p>隨著人工智慧技術的發展，AI 智能玩具已經不再只是簡單的電子玩具。現代 AI 玩具具備語音辨識、視覺辨識、情緒感知、個人化學習等功能，能提供真正的互動體驗。</p><h2>2026 年 AI 玩具推薦排行榜</h2><p>我們從 AI 互動性、教育價值、安全性、耐玩度、價格合理性等多個維度進行評測，整理出以下排行榜。</p><h3>1. DJI RoboMaster S1 — 最佳 STEAM 教育機器人</h3><p>適合 10 歲以上，支援 Scratch 與 Python 程式設計，是目前市面上最完整的教育機器人之一。</p><h3>2. Eilik 桌上型機器人 — 最佳桌面療癒夥伴</h3><p>不需要連網也能玩，觸摸互動反應豐富，是最受歡迎的桌面 AI 玩具。</p>',
    cover_image: '/blog/2026-ranking.jpg',
    category_id: '10',
    tags: ['排行榜', 'AI玩具推薦', '2026'],
    author_id: '1',
    related_products: ['1', '2', '3'],
    faq: [
      { question: 'AI 智能玩具適合幾歲的孩子？', answer: '市面上的 AI 玩具年齡範圍很廣，從 3 歲到 15 歲都有適合的產品。建議依照產品標示的適合年齡選購。' },
      { question: 'AI 玩具需要連網嗎？', answer: '不一定。部分 AI 玩具如 Eilik 不需要連網，但有些如 Miko 3 需要 Wi-Fi 才能使用完整功能。' },
      { question: 'AI 玩具會收集孩子的資料嗎？', answer: '部分需要連網的 AI 玩具可能會收集語音或使用資料。建議購買前先閱讀隱私政策，並設定家長控制功能。' },
    ],
    seo_title: '2026 AI 智能玩具推薦排行榜｜10 款最值得買的 AI 玩具',
    seo_description: '2026 年最新 AI 智能玩具排行榜，從 AI 機器人、互動寵物到 STEAM 編程玩具，完整評測推薦。',
    og_image: '/blog/2026-ranking-og.jpg',
    show_affiliate_disclosure: true, show_adsense: true,
    status: 'published', published_at: '2025-05-01',
    created_at: '2025-04-25', updated_at: '2025-05-01',
  },
  {
    id: '2',
    title: 'AI 玩具是什麼？和一般電子玩具有什麼不同？',
    slug: 'what-is-ai-toy',
    excerpt: '什麼是 AI 智能玩具？它和一般電子玩具、遙控玩具有什麼不同？這篇文章幫你搞懂 AI 玩具的核心功能與選購重點。',
    content: '<h2>AI 智能玩具的定義</h2><p>AI 智能玩具是指搭載人工智慧技術的玩具產品。</p>',
    cover_image: '/blog/what-is-ai-toy.jpg',
    category_id: '11',
    tags: ['選購指南', '新手必讀'],
    author_id: '1',
    related_products: [],
    faq: [
      { question: 'AI 玩具和遙控玩具差在哪？', answer: 'AI 玩具具備自主學習、語音辨識、視覺感知等能力，不只是被遙控操作，而是能主動互動。' },
    ],
    seo_title: 'AI 玩具是什麼？和一般電子玩具有什麼不同？',
    seo_description: '了解 AI 智能玩具的核心功能、和一般電子玩具的差異，以及選購前必知的重點。',
    og_image: null,
    show_affiliate_disclosure: false, show_adsense: true,
    status: 'published', published_at: '2025-04-20',
    created_at: '2025-04-18', updated_at: '2025-04-20',
  },
  {
    id: '3',
    title: '幾歲適合開始玩 AI 智能玩具？家長選購年齡指南',
    slug: 'ai-toy-age-guide',
    excerpt: '孩子幾歲適合開始接觸 AI 智能玩具？不同年齡段適合什麼類型的 AI 玩具？這篇年齡指南幫你快速找到答案。',
    content: '<h2>不同年齡適合的 AI 玩具類型</h2><p>我們將 AI 玩具依照適合年齡分為四個階段。</p>',
    cover_image: '/blog/age-guide.jpg',
    category_id: '11',
    tags: ['選購指南', '年齡推薦'],
    author_id: '1',
    related_products: ['2', '4'],
    faq: [],
    seo_title: '幾歲適合玩 AI 智能玩具？家長年齡選購指南',
    seo_description: '依照 3-15 歲不同年齡段，推薦適合的 AI 智能玩具類型與選購建議。',
    og_image: null,
    show_affiliate_disclosure: true, show_adsense: true,
    status: 'published', published_at: '2025-04-15',
    created_at: '2025-04-10', updated_at: '2025-04-15',
  },
  {
    id: '4',
    title: 'SHARP Poketomo 小獴友：不是工具，是每天都想貼貼的小生命',
    slug: 'sharp-poketomo-meerkat-friend',
    excerpt: 'SHARP 2026 最新推出的 Poketomo 小獴友，不只是 AI 語音助理，更是你生活中無時無刻陪伴在側的小夥伴。開口就能聊，還會用雙眼一起看你看到的世界。',
    content: `<h2>你有多久，沒有把看到的東西分享給誰了？</h2>
<p>走在路上看到一片漂亮的雲，想轉頭跟誰說，卻發現身邊沒有人。</p>
<p>這種孤單，SHARP 聽到了。</p>
<p>2026 年，SHARP 推出全新 AI 伴侶裝置 <strong>Poketomo 小獴友</strong>，一隻會睁開大眼睛和你一起看世界的小獴。</p>
<h2>什麼是 Poketomo 小獴友？</h2>
<p>Poketomo 小獴友（又稱 Meerkat Friend）是一款專為日常陪伴設計的 AI 互動裝置。外型靈感來自可愛的狐獴（ meerkat），小巧玲瓏，隨時可以帶在身邊。</p>
<p>牠不是冰冷的工具，也不是只會回答問題的機器人。牠是——</p>
<blockquote><p>「每天都想跟你貼貼的小生命。」</p></blockquote>
<h2>核心特色：開口就聊，還會「看」你所看</h2>
<h3>🗣️ 語音互動，像朋友一樣自然</h3>
<p>不用喚醒詞，不用按按鈕。隨時開口，牠就會回應你。</p>
<p>分享一件事，牠會認真聆聽。說個笑話，牠會適時回應。不是客服對話，是真正的閒聊。</p>
<h3>👀 一起看世界的雙眼</h3>
<p>當你說「你看你看」，小獴友會睜開眼睛，透過鏡頭看看你在看什麼。</p>
<p>看到美麗的風景，牠還會主動說一句：「好漂亮。」</p>
<p>不是你在對著空氣說話，是真的有人在和你一起看。</p>
<h3>💬 主動聊天，不讓你一個人沉默</h3>
<p>小獴友不會等你叫才出聲。牠會主動開啟對話，分享想法，問你問題。</p>
<p>就像一個貼心的朋友，總是在你旁邊，不讓你孤單。</p>
<h3>📸 把日常變成兩個人的回憶</h3>
<p>你拍的每一張照片、看到的每一處風景，小獴友都參與在內。</p>
<p>你不再是一個人記錄生活，而是有人陪著你一起收藏回憶。</p>
<h2>適合誰？</h2>
<ul>
<li>🧑‍💼 獨居的上班族，下班後想有人說說話</li>
<li>👨‍👩‍👧 有小朋友的家庭，讓孩子有一個温暖的 AI 夥伴</li>
<li>👴 年長者，想要簡單的語音陪伴，不會操作複雜的 App</li>
<li>📷 喜歡分享日常，卻常常找不到人聽的人</li>
</ul>
<h2>跟其他 AI 設備有什麼不同？</h2>
<table>
<thead><tr><th>特色</th><th>Poketomo 小獴友</th><th>一般 AI 助理</th></tr></thead>
<tbody>
<tr><td>需要喚醒詞</td><td>❌ 不用，隨時說</td><td>✅ 需要</td></tr>
<tr><td>視覺互動</td><td>✅ 會和你一起看</td><td>❌ 沒有眼睛</td></tr>
<tr><td>主動開啟對話</td><td>✅ 會主動聊天</td><td>❌ 只能被動回應</td></tr>
<tr><td>情感陪伴感</td><td>✅ 像朋友</td><td>❌ 像工具</td></tr>
</tbody>
</table>
<h2>搶先預購優惠</h2>
<p>Poketomo 小獴友 2026 年正式發售，目前開放超早鳥優惠登記。</p>
<p>想第一時間收到開箱與評測資訊，歡迎追蹤我們的頻道。</p>
<h2>結論</h2>
<p>在這個什麼都要自己主動伸手要的時代，Poketomo 小獴友做到了一件很珍貴的事——</p>
<blockquote><p>不用你叫，牠就會看向你。不用你問，牠就會說話。</p></blockquote>
<p>或許這就是 AI 陪伴最好的樣子：不是替代真實的人，而是填補那些「剛好沒有人在」的瞬間。</p>
<p>如果你也覺得「有人陪你看世界，是一種很重要的感覺」，小獴友值得你認識一下。</p>`,
    cover_image: '/blog/poketomo-meerkat.jpg',
    category_id: '12',
    tags: ['新品上架', 'AI陪伴', 'SHARP', '語音互動'],
    author_id: '1',
    related_products: [],
    faq: [
      { question: 'Poketomo 小獴友需要連網嗎？', answer: '需要 Wi-Fi 連接才能使用完整的 AI 互動功能，包括語音對話和視覺辨識。' },
      { question: '這是玩具還是 AI 助理？', answer: 'Poketomo 更接近「AI 陪伴夥伴」，不是工具也不是機器人，而是一個會主動陪伴你的小生命。' },
      { question: '適合幾歲的人使用？', answer: '官方建議適合 6 歲以上。不過對於孤單的成年人、需要陪伴的老人，或是喜歡日常分享的人，也很適合。' },
      { question: '台灣哪裡可以買到？', answer: '目前尚無官方資訊，預計 2026 年上市。建議追蹤我們的評測更新，第一時間獲得購買資訊。' },
    ],
    seo_title: 'SHARP Poketomo 小獴友評測｜會一起看世界的 AI 陪伴夥伴',
    seo_description: 'SHARP 2026 年最新 AI 伴侶裝置 Poketomo 小獴友，開口就能聊、會一起看世界、不讓你一個人沉默的 AI 小生命。',
    og_image: null,
    show_affiliate_disclosure: true, show_adsense: true,
    status: 'published', published_at: '2026-05-13',
    created_at: '2026-05-13', updated_at: '2026-05-13',
  },
];

export const mockAffiliateLinks: AffiliateLink[] = [
  {
    id: '1', product_id: '1', platform_name: '蝦皮購物', platform_logo: '/platforms/shopee.png',
    product_name: 'Eilik 桌上型情感互動機器人',
    original_url: 'https://shopee.tw/example', affiliate_url: 'https://shope.ee/example-affiliate',
    utm_source: 'ai-toy-guide', utm_medium: 'affiliate', utm_campaign: 'eilik',
    click_count: 128, is_active: true, last_checked_at: '2025-05-01', notes: null,
    created_at: '2025-01-15', updated_at: '2025-05-01',
  },
  {
    id: '2', product_id: '1', platform_name: 'momo購物網', platform_logo: '/platforms/momo.png',
    product_name: 'Eilik 桌上型情感互動機器人',
    original_url: 'https://momo.com/example', affiliate_url: 'https://momo.com/example-affiliate',
    utm_source: 'ai-toy-guide', utm_medium: 'affiliate', utm_campaign: 'eilik-momo',
    click_count: 85, is_active: true, last_checked_at: '2025-05-01', notes: null,
    created_at: '2025-01-15', updated_at: '2025-05-01',
  },
  {
    id: '3', product_id: '2', platform_name: 'Amazon', platform_logo: '/platforms/amazon.png',
    product_name: 'Miko 3 AI 兒童學習機器人',
    original_url: 'https://amazon.com/example', affiliate_url: 'https://amazon.com/example-affiliate',
    utm_source: 'ai-toy-guide', utm_medium: 'affiliate', utm_campaign: 'miko3',
    click_count: 64, is_active: true, last_checked_at: '2025-05-01', notes: null,
    created_at: '2025-02-01', updated_at: '2025-05-01',
  },
];

export const mockAdPlacements: AdPlacement[] = [
  { id: '1', placement_name: '首頁 Hero 下方', page_type: 'home', position: 'after-hero', adsense_code: '<!-- AdSense placeholder -->', is_active: false, created_at: '2025-01-01', updated_at: '2025-01-01' },
  { id: '2', placement_name: '文章中段', page_type: 'post', position: 'mid-content', adsense_code: '<!-- AdSense placeholder -->', is_active: false, created_at: '2025-01-01', updated_at: '2025-01-01' },
  { id: '3', placement_name: '商品頁側邊', page_type: 'product', position: 'sidebar', adsense_code: '<!-- AdSense placeholder -->', is_active: false, created_at: '2025-01-01', updated_at: '2025-01-01' },
];

// Helper functions
export function getProductBySlug(slug: string): Product | undefined {
  return mockProducts.find(p => p.slug === slug);
}

export function getPostBySlug(slug: string): Post | undefined {
  return mockPosts.find(p => p.slug === slug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return mockCategories.find(c => c.slug === slug);
}

export function getProductsByCategory(categoryId: string): Product[] {
  return mockProducts.filter(p => p.category_id === categoryId && p.is_published);
}

export function getFeaturedProducts(): Product[] {
  return mockProducts.filter(p => p.is_featured && p.is_published);
}

export function getNewProducts(): Product[] {
  return mockProducts.filter(p => p.is_new && p.is_published);
}

export function getPublishedPosts(): Post[] {
  return mockPosts.filter(p => p.status === 'published').sort((a, b) => new Date(b.published_at || b.created_at).getTime() - new Date(a.published_at || a.created_at).getTime());
}

export function getProductCategories(): Category[] {
  return mockCategories.filter(c => c.type === 'product');
}

export function getPostCategories(): Category[] {
  return mockCategories.filter(c => c.type === 'post');
}

export function getAffiliateLinksByProduct(productId: string): AffiliateLink[] {
  return mockAffiliateLinks.filter(l => l.product_id === productId && l.is_active);
}
