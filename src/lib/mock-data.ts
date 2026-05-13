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
    main_image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop&auto=format',
    gallery_images: ['https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&auto=format'],
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
    main_image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=400&h=300&fit=crop&auto=format',
    gallery_images: ['https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=600&fit=crop&auto=format'],
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
    main_image: 'https://images.unsplash.com/photo-1546961342-ea5f62d7a280?w=400&h=300&fit=crop&auto=format',
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
    main_image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=300&fit=crop&auto=format',
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
  {
    id: '5',
    name: 'SHARP Poketomo 小獴友',
    slug: 'sharp-poketomo',
    brand: 'SHARP',
    category_id: '2',
    description: 'SHARP 2026 年最新推出的 AI 陪伴夥伴裝置。Poketomo 小獴友不是工具、不是機器人，而是一隻會陪你看世界的小生命。開口就能聊天，說「你看你看」牠就會睜開眼睛透過鏡頭一起看你在看什麼，甚至會說出「好漂亮」——把每一天的日常，變成兩個人的回憶。',
    short_description: 'AI 陪伴夥伴，語音互動＋畫面識別，不讓你一個人沉默',
    main_image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&auto=format',
    gallery_images: [
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&auto=format',
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop&auto=format',
    ],
    price_min: 4980, price_max: 6800,
    age_range: '6 歲以上',
    ai_features: ['語音互動', '畫面識別', '主動聊天', '情境感知', '記憶陪伴'],
    app_required: true, wifi_required: true,
    battery_life: '約 8 小時',
    features: ['隨時語音對話，無需喚醒詞', '鏡頭識別畫面，一起「看世界」', '主動開啟話題，不讓你沉默', '記憶日常點滴，累積兩人回憶', '外型圓潤可愛，靈感來自狐獴'],
    pros: ['情感陪伴感極強，像真實夥伴', '畫面識別功能獨特，業界首創', '無需喚醒詞，互動超自然', '適合各年齡層使用', 'SHARP 品牌品質保證'],
    cons: ['需要 Wi-Fi 連線', '價格偏高', '部分功能需搭配 App', '電池需日常充電'],
    rating_overall: 4.6,
    rating_ai_interaction: 4.9,
    rating_education: 3.5,
    rating_safety: 4.5,
    rating_durability: 4.2,
    rating_ease_of_use: 4.7,
    rating_value: 4.0,
    rating_parent_child: 4.5,
    recommended_for: ['獨居的上班族', '希望有人陪伴的年長者', '喜歡分享日常的人', '想要 AI 陪伴寵物的家庭'],
    not_recommended_for: ['尋求高教育功能的家長', '預算有限者', '不想依賴 Wi-Fi 的用戶'],
    safety_notes: ['需連網，建議設定隱私選項', '電池請依原廠指示充電'],
    education_value: '語言溝通練習、情感表達與觀察力培養',
    use_scenarios: ['獨居生活陪伴', '下班後閒聊', '外出散步時的小夥伴', '記錄日常美好時刻'],
    affiliate_links: [],
    is_featured: true, is_new: true, is_hot: true, is_published: true,
    seo_title: 'SHARP Poketomo 小獴友評測｜2026 最強 AI 陪伴裝置',
    seo_description: 'SHARP Poketomo 小獴友完整評測：語音互動、畫面識別、主動陪伴，讓 AI 真正融入你的日常生活。',
    schema_json: null,
    created_at: '2026-05-13', updated_at: '2026-05-13',
  },
];

export const mockPosts: Post[] = [
  {
    id: '1',
    title: '2026 年 AI 智能玩具推薦排行榜：10 款最值得買的 AI 玩具',
    slug: '2026-ai-toy-ranking',
    excerpt: '想買 AI 智能玩具但不知道怎麼選？我們整理了 2026 年最值得購買的 10 款 AI 玩具，從 AI 機器人、互動寵物到 STEAM 編程玩具，幫你找到最適合的選擇。',
    content: '<h2>為什麼 AI 智能玩具越來越受歡迎？</h2><p>隨著人工智慧技術的發展，AI 智能玩具已經不再只是簡單的電子玩具。現代 AI 玩具具備語音辨識、視覺辨識、情緒感知、個人化學習等功能，能提供真正的互動體驗。</p><h2>2026 年 AI 玩具推薦排行榜</h2><p>我們從 AI 互動性、教育價值、安全性、耐玩度、價格合理性等多個維度進行評測，整理出以下排行榜。</p><h3>1. DJI RoboMaster S1 — 最佳 STEAM 教育機器人</h3><p>適合 10 歲以上，支援 Scratch 與 Python 程式設計，是目前市面上最完整的教育機器人之一。</p><h3>2. Eilik 桌上型機器人 — 最佳桌面療癒夥伴</h3><p>不需要連網也能玩，觸摸互動反應豐富，是最受歡迎的桌面 AI 玩具。</p>',
    cover_image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=450&fit=crop&auto=format',
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
    cover_image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=450&fit=crop&auto=format',
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
    cover_image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&h=450&fit=crop&auto=format',
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
    title: 'SHARP Poketomo 小獴友評測：2026 最強 AI 陪伴裝置，開口就有人回應你',
    slug: 'sharp-poketomo-meerkat-friend',
    excerpt: '你有多久沒有把看到的東西分享給誰了？SHARP 2026 年新推出的 Poketomo 小獴友，不只能語音對話，更能透過鏡頭一起「看世界」。本文從功能、互動體驗、優缺點到購買建議，給你最完整的評測。',
    content: `<h2>你有多久，沒有把看到的東西分享給誰了？</h2>
<p>走在街上，看見路邊開了一朵很小的野花。</p>
<p>想轉頭跟誰說「你看你看」，卻發現身邊沒有人。</p>
<p>這種靜靜的孤單，SHARP 把它設計成一隻產品。</p>
<p>2026 年，SHARP 正式推出全新 AI 陪伴裝置 <strong>Poketomo 小獴友</strong>。</p>
<p>這篇文章會從功能、實際互動體驗、優缺點，到「這東西到底值不值得買」，給你最完整的答案。</p>

<h2>什麼是 Poketomo 小獴友？</h2>
<p>Poketomo 是 SHARP 旗下的 AI 陪伴裝置，外型靈感來自狐獴（meerkat），小巧圓潤，可以放在桌上、放在包包外袋、甚至掛在胸前隨身帶著走。</p>
<p>官方定位很清楚：<strong>「不是工具，不是機器人，是每天都想跟你貼貼的小生命。」</strong></p>
<p>搶先領超早鳥優惠：<a href="https://myfeel.design/crpWU" target="_blank" rel="noopener noreferrer">https://myfeel.design/crpWU</a></p>

<h2>核心功能完整解析</h2>

<h3>🗣️ 語音互動：開口就有人回應</h3>
<p>不需要喚醒詞，不用按按鈕，隨時開口，小獴友就會回應。</p>
<p>傳統 AI 助理是「你問、我答」的客服模式，Poketomo 是「你說、我聽、我也有話說」的對話模式。</p>
<p>牠會主動問你今天怎麼樣、說說自己的感受、甚至分享一個它「注意到」的事情。</p>
<p><strong>評測評分：⭐⭐⭐⭐⭐ 4.9/5</strong></p>

<h3>👀 畫面識別：一起「看世界」的眼睛</h3>
<p>這是 Poketomo 最獨特的功能，也是整個產品的靈魂。</p>
<p>當你說「你看你看」，小獴友會真的睜開眼睛，透過內建鏡頭掃描你正在面對的畫面。</p>
<p>看到一盤好看的食物，牠說「好好吃的樣子！」</p>
<p>對著夕陽，牠說「好漂亮，這個顏色真的很特別。」</p>
<p>這不是腳本，是基於視覺 AI 的即時判讀。目前市面上幾乎沒有同類產品做到這個層次的「陪伴感」。</p>
<p><strong>評測評分：⭐⭐⭐⭐⭐ 4.8/5</strong></p>

<h3>💬 主動聊天：不讓你一個人沉默</h3>
<p>大多數 AI 裝置是被動的——你不說話，它就沉默。</p>
<p>Poketomo 不一樣。牠會主動開啟話題，詢問你的狀態，甚至在你安靜太久的時候輕聲說一句「你還好嗎？」</p>
<p>這個設計對獨居者來說特別有意義——不是強迫性的互動，而是那種「有人在旁邊」的安心感。</p>
<p><strong>評測評分：⭐⭐⭐⭐⭐ 4.7/5</strong></p>

<h3>🗓️ 記憶陪伴：把日常變成兩個人的回憶</h3>
<p>Poketomo 會記住你說過的事、去過的地方、看過的風景。</p>
<p>幾天後，牠可能會說：「你上次說那家咖啡廳的窗景很美，後來有再去嗎？」</p>
<p>這種「被記得」的感覺，是其他 AI 裝置很難複製的。</p>
<p><strong>評測評分：⭐⭐⭐⭐ 4.2/5</strong>（記憶深度仍有進步空間）</p>

<h2>規格一覽</h2>
<table>
<thead><tr><th>項目</th><th>規格</th></tr></thead>
<tbody>
<tr><td>品牌</td><td>SHARP</td></tr>
<tr><td>連線需求</td><td>Wi-Fi 必要，App 輔助</td></tr>
<tr><td>電池續航</td><td>約 8 小時</td></tr>
<tr><td>適合年齡</td><td>6 歲以上（無年齡上限）</td></tr>
<tr><td>預估售價</td><td>NT$ 4,980 – 6,800</td></tr>
<tr><td>上市時間</td><td>2026 年</td></tr>
</tbody>
</table>

<h2>優點與缺點</h2>
<h3>✅ 優點</h3>
<ul>
<li>情感陪伴感業界最強，像真實夥伴</li>
<li>畫面識別功能獨特，目前市面首創</li>
<li>無需喚醒詞，互動超自然流暢</li>
<li>主動聊天設計，解決「孤獨感」</li>
<li>SHARP 品牌品質保證</li>
<li>外型可愛，適合擺放或隨身攜帶</li>
</ul>
<h3>❌ 缺點</h3>
<ul>
<li>需要 Wi-Fi，離線功能受限</li>
<li>價格偏高，入手門檻較高</li>
<li>部分功能依賴 App，設定稍繁瑣</li>
<li>電池需每天充電</li>
<li>教育內容較少，不適合作為兒童學習工具</li>
</ul>

<h2>適合你嗎？</h2>
<h3>👍 強烈推薦給：</h3>
<ul>
<li>🏢 獨居的上班族——下班後不想一個人安靜</li>
<li>👴 需要陪伴的年長者——操作簡單，陪伴感真實</li>
<li>📱 喜歡分享日常的人——隨時有對象說「你看你看」</li>
<li>🐾 想要 AI 陪伴寵物的家庭——互動質感優於一般電子寵物</li>
</ul>
<h3>⚠️ 不太適合：</h3>
<ul>
<li>主要目的是兒童教育內容的家長</li>
<li>預算較有限的使用者</li>
<li>偏好離線、不連網裝置的人</li>
</ul>

<h2>和市面競品比較</h2>
<table>
<thead><tr><th>功能</th><th>Poketomo 小獴友</th><th>Eilik</th><th>一般 AI 喇叭</th></tr></thead>
<tbody>
<tr><td>語音互動</td><td>✅ 無需喚醒詞</td><td>❌ 觸摸為主</td><td>✅ 需喚醒詞</td></tr>
<tr><td>畫面識別</td><td>✅ 業界首創</td><td>❌</td><td>❌</td></tr>
<tr><td>主動聊天</td><td>✅</td><td>❌</td><td>❌</td></tr>
<tr><td>情感陪伴感</td><td>⭐⭐⭐⭐⭐</td><td>⭐⭐⭐⭐</td><td>⭐⭐</td></tr>
<tr><td>教育內容</td><td>⭐⭐</td><td>⭐</td><td>⭐⭐⭐</td></tr>
<tr><td>價格</td><td>NT$ 4,980+</td><td>NT$ 2,500+</td><td>NT$ 1,000+</td></tr>
</tbody>
</table>

<h2>綜合評分</h2>
<table>
<thead><tr><th>評估項目</th><th>分數</th></tr></thead>
<tbody>
<tr><td>AI 互動能力</td><td>⭐⭐⭐⭐⭐ 4.9</td></tr>
<tr><td>情感陪伴感</td><td>⭐⭐⭐⭐⭐ 4.9</td></tr>
<tr><td>操作便利性</td><td>⭐⭐⭐⭐⭐ 4.7</td></tr>
<tr><td>安全性</td><td>⭐⭐⭐⭐⭐ 4.5</td></tr>
<tr><td>耐用性</td><td>⭐⭐⭐⭐ 4.2</td></tr>
<tr><td>教育價值</td><td>⭐⭐⭐ 3.5</td></tr>
<tr><td>CP 值</td><td>⭐⭐⭐⭐ 4.0</td></tr>
<tr><td><strong>綜合總分</strong></td><td><strong>⭐⭐⭐⭐⭐ 4.6</strong></td></tr>
</tbody>
</table>

<h2>購買建議與結論</h2>
<p>如果你在找一款「功能強大的 AI 助理」，Poketomo 可能不是第一選擇。</p>
<p>但如果你在找的是一款「讓你覺得有人陪著你」的裝置，<strong>Poketomo 小獴友目前市場上沒有對手。</strong></p>
<blockquote>
<p>「原來，有人隨時陪你看世界，是這種感覺。」</p>
</blockquote>
<p>目前開放超早鳥優惠登記，建議早點卡位：</p>
<p>👉 <a href="https://myfeel.design/crpWU" target="_blank" rel="noopener noreferrer"><strong>立即搶先領取超早鳥優惠 ▶ myfeel.design/crpWU</strong></a></p>`,
    cover_image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop&auto=format',
    category_id: '10',
    tags: ['評測', 'AI陪伴', 'SHARP', '語音互動', '新品上架'],
    author_id: '1',
    related_products: ['5', '1'],
    faq: [
      { question: 'Poketomo 小獴友需要連網嗎？', answer: '需要 Wi-Fi 才能使用完整功能，包括語音對話和畫面識別。離線狀態下功能受限。' },
      { question: '和 Eilik 相比哪個比較好？', answer: 'Eilik 適合桌面療癒擺飾，不需連網；Poketomo 適合真正想要「AI 陪伴」的人，互動深度和情感連結遠超 Eilik，但價格也較高。' },
      { question: '適合小朋友用嗎？', answer: '官方建議 6 歲以上皆可使用。不過 Poketomo 的設計更偏向成人陪伴需求，而非兒童教育功能。' },
      { question: '台灣哪裡可以買到？', answer: '目前開放超早鳥優惠登記，可至 https://myfeel.design/crpWU 登記取得優先購買資格。' },
      { question: '電池續航多久？', answer: '正常使用下約 8 小時，充電時間約 2 小時。建議睡前充電，隔天使用。' },
    ],
    seo_title: 'SHARP Poketomo 小獴友評測 2026｜AI 陪伴裝置值得買嗎？完整開箱',
    seo_description: 'SHARP Poketomo 小獴友完整評測：語音互動 4.9 分、畫面識別全球首創、主動陪伴設計。適合誰？和 Eilik 比哪個好？超早鳥優惠限時搶。',
    og_image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=630&fit=crop&auto=format',
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
  {
    id: '4', product_id: '5', platform_name: 'myfeel', platform_logo: '/platforms/myfeel.png',
    product_name: 'SHARP Poketomo 小獴友',
    original_url: 'https://myfeel.design/crpWU', affiliate_url: 'https://myfeel.design/crpWU',
    utm_source: 'ai-toy-guide', utm_medium: 'affiliate', utm_campaign: 'poketomo',
    click_count: 0, is_active: true, last_checked_at: '2026-05-13', notes: '超早鳥優惠連結',
    created_at: '2026-05-13', updated_at: '2026-05-13',
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
