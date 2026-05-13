-- AI 智能玩具指南 Database Schema
-- Run this in Supabase SQL Editor to create all tables

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============ Categories ============
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  type TEXT NOT NULL DEFAULT 'product' CHECK (type IN ('product', 'post')),
  image TEXT,
  seo_title TEXT,
  seo_description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============ Tags ============
CREATE TABLE tags (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============ Products ============
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  brand TEXT,
  category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  description TEXT,
  short_description TEXT,
  main_image TEXT,
  gallery_images JSONB DEFAULT '[]'::JSONB,
  price_min NUMERIC(10,2) DEFAULT 0,
  price_max NUMERIC(10,2) DEFAULT 0,
  age_range TEXT,
  ai_features JSONB DEFAULT '[]'::JSONB,
  app_required BOOLEAN DEFAULT FALSE,
  wifi_required BOOLEAN DEFAULT FALSE,
  battery_life TEXT,
  features JSONB DEFAULT '[]'::JSONB,
  pros JSONB DEFAULT '[]'::JSONB,
  cons JSONB DEFAULT '[]'::JSONB,
  rating_overall NUMERIC(2,1) DEFAULT 0,
  rating_ai_interaction NUMERIC(2,1) DEFAULT 0,
  rating_education NUMERIC(2,1) DEFAULT 0,
  rating_safety NUMERIC(2,1) DEFAULT 0,
  rating_durability NUMERIC(2,1) DEFAULT 0,
  rating_ease_of_use NUMERIC(2,1) DEFAULT 0,
  rating_value NUMERIC(2,1) DEFAULT 0,
  rating_parent_child NUMERIC(2,1) DEFAULT 0,
  recommended_for JSONB DEFAULT '[]'::JSONB,
  not_recommended_for JSONB DEFAULT '[]'::JSONB,
  safety_notes JSONB DEFAULT '[]'::JSONB,
  education_value TEXT,
  use_scenarios JSONB DEFAULT '[]'::JSONB,
  is_featured BOOLEAN DEFAULT FALSE,
  is_new BOOLEAN DEFAULT FALSE,
  is_hot BOOLEAN DEFAULT FALSE,
  is_published BOOLEAN DEFAULT FALSE,
  seo_title TEXT,
  seo_description TEXT,
  schema_json JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============ Authors ============
CREATE TABLE authors (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  avatar TEXT,
  bio TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============ Posts ============
CREATE TABLE posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT,
  cover_image TEXT,
  category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  tags JSONB DEFAULT '[]'::JSONB,
  author_id UUID REFERENCES authors(id) ON DELETE SET NULL,
  related_products JSONB DEFAULT '[]'::JSONB,
  faq JSONB DEFAULT '[]'::JSONB,
  seo_title TEXT,
  seo_description TEXT,
  og_image TEXT,
  show_affiliate_disclosure BOOLEAN DEFAULT TRUE,
  show_adsense BOOLEAN DEFAULT TRUE,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'scheduled')),
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============ Post Tags (many-to-many) ============
CREATE TABLE post_tags (
  post_id UUID REFERENCES posts(id) ON DELETE CASCADE,
  tag_id UUID REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (post_id, tag_id)
);

-- ============ Affiliate Links ============
CREATE TABLE affiliate_links (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  platform_name TEXT NOT NULL,
  platform_logo TEXT,
  product_name TEXT,
  original_url TEXT,
  affiliate_url TEXT NOT NULL,
  utm_source TEXT DEFAULT 'ai-toy-guide',
  utm_medium TEXT DEFAULT 'affiliate',
  utm_campaign TEXT,
  click_count INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  last_checked_at TIMESTAMPTZ,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============ Ad Placements ============
CREATE TABLE ad_placements (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  placement_name TEXT NOT NULL,
  page_type TEXT NOT NULL CHECK (page_type IN ('home', 'product', 'post', 'listing', 'all')),
  position TEXT NOT NULL,
  adsense_code TEXT,
  is_active BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============ Site Settings ============
CREATE TABLE site_settings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  key TEXT UNIQUE NOT NULL,
  value TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============ Email Subscribers ============
CREATE TABLE email_subscribers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============ Affiliate Click Log ============
CREATE TABLE affiliate_clicks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  affiliate_link_id UUID REFERENCES affiliate_links(id) ON DELETE CASCADE,
  referrer TEXT,
  user_agent TEXT,
  ip_hash TEXT,
  clicked_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============ Indexes ============
CREATE INDEX idx_products_slug ON products(slug);
CREATE INDEX idx_products_category ON products(category_id);
CREATE INDEX idx_products_published ON products(is_published);
CREATE INDEX idx_products_featured ON products(is_featured);
CREATE INDEX idx_posts_slug ON posts(slug);
CREATE INDEX idx_posts_status ON posts(status);
CREATE INDEX idx_posts_published_at ON posts(published_at);
CREATE INDEX idx_categories_slug ON categories(slug);
CREATE INDEX idx_affiliate_links_product ON affiliate_links(product_id);

-- ============ Updated At Trigger ============
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON products FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_posts_updated_at BEFORE UPDATE ON posts FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_categories_updated_at BEFORE UPDATE ON categories FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_affiliate_links_updated_at BEFORE UPDATE ON affiliate_links FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============ RLS Policies ============
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE affiliate_links ENABLE ROW LEVEL SECURITY;
ALTER TABLE ad_placements ENABLE ROW LEVEL SECURITY;

-- Public read for published content
CREATE POLICY "Public read products" ON products FOR SELECT USING (is_published = TRUE);
CREATE POLICY "Public read posts" ON posts FOR SELECT USING (status = 'published');
CREATE POLICY "Public read categories" ON categories FOR SELECT USING (TRUE);
CREATE POLICY "Public read tags" ON tags FOR SELECT USING (TRUE);
CREATE POLICY "Public read active affiliate links" ON affiliate_links FOR SELECT USING (is_active = TRUE);
CREATE POLICY "Public read active ads" ON ad_placements FOR SELECT USING (is_active = TRUE);

-- Service role can do everything (for admin API)
CREATE POLICY "Service role full access products" ON products FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Service role full access posts" ON posts FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Service role full access categories" ON categories FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Service role full access tags" ON tags FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Service role full access affiliate_links" ON affiliate_links FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Service role full access ad_placements" ON ad_placements FOR ALL USING (auth.role() = 'service_role');

-- ============ Seed Data ============
INSERT INTO categories (name, slug, description, type) VALUES
  ('AI 機器人玩具', 'ai-robots', '具備 AI 功能的互動機器人玩具', 'product'),
  ('AI 互動寵物', 'ai-pets', '智慧互動寵物玩具', 'product'),
  ('STEAM 編程玩具', 'steam-coding', 'STEAM 教育與程式學習玩具', 'product'),
  ('語音互動玩具', 'voice-interactive', '支援語音辨識與互動的玩具', 'product'),
  ('智慧陪伴玩具', 'smart-companion', 'AI 陪伴型智慧玩具', 'product'),
  ('幼兒啟蒙 AI 玩具', 'toddler-ai', '適合 3-5 歲幼兒的 AI 玩具', 'product'),
  ('評測文章', 'reviews', 'AI 玩具評測', 'post'),
  ('選購指南', 'buying-guide', 'AI 玩具選購指南', 'post'),
  ('新品上架', 'new-arrivals', '最新 AI 玩具情報', 'post');

INSERT INTO tags (name, slug) VALUES
  ('適合3歲以上', 'age-3-plus'),
  ('適合6歲以上', 'age-6-plus'),
  ('生日禮物', 'birthday-gift'),
  ('親子共玩', 'parent-child'),
  ('程式學習', 'coding'),
  ('高CP值', 'best-value'),
  ('入門推薦', 'beginner');

INSERT INTO site_settings (key, value) VALUES
  ('site_title', 'AI 智能玩具指南｜評測、比較、推薦'),
  ('site_description', '專門介紹、評測、比較與推薦 AI 智能玩具的指南網站。'),
  ('adsense_publisher_id', ''),
  ('adsense_auto_ads', 'false'),
  ('adsense_enabled', 'false'),
  ('ga_tracking_id', '');
