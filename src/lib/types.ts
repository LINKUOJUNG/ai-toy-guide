// ============ Database Types ============

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  type: 'product' | 'post';
  seo_title: string | null;
  seo_description: string | null;
  image: string | null;
  created_at: string;
  updated_at: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
  created_at: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  brand: string;
  category_id: string | null;
  category?: Category;
  description: string;
  short_description: string;
  main_image: string;
  gallery_images: string[];
  price_min: number;
  price_max: number;
  age_range: string;
  ai_features: string[];
  app_required: boolean;
  wifi_required: boolean;
  battery_life: string;
  features: string[];
  pros: string[];
  cons: string[];
  rating_overall: number;
  rating_ai_interaction: number;
  rating_education: number;
  rating_safety: number;
  rating_durability: number;
  rating_ease_of_use: number;
  rating_value: number;
  rating_parent_child: number;
  recommended_for: string[];
  not_recommended_for: string[];
  safety_notes: string[];
  education_value: string;
  use_scenarios: string[];
  affiliate_links: AffiliateLink[];
  is_featured: boolean;
  is_new: boolean;
  is_hot: boolean;
  is_published: boolean;
  seo_title: string | null;
  seo_description: string | null;
  schema_json: Record<string, unknown> | null;
  created_at: string;
  updated_at: string;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image: string;
  category_id: string | null;
  category?: Category;
  tags: string[];
  author_id: string | null;
  author?: Author;
  related_products: string[];
  faq: FAQItem[];
  seo_title: string | null;
  seo_description: string | null;
  og_image: string | null;
  show_affiliate_disclosure: boolean;
  show_adsense: boolean;
  status: 'draft' | 'published' | 'scheduled';
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface AffiliateLink {
  id: string;
  product_id: string | null;
  platform_name: string;
  platform_logo: string | null;
  product_name: string;
  original_url: string;
  affiliate_url: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  click_count: number;
  is_active: boolean;
  last_checked_at: string | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface AdPlacement {
  id: string;
  placement_name: string;
  page_type: 'home' | 'product' | 'post' | 'listing' | 'all';
  position: string;
  adsense_code: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Author {
  id: string;
  name: string;
  avatar: string | null;
  bio: string | null;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SiteSettings {
  site_title: string;
  site_description: string;
  adsense_publisher_id: string;
  adsense_auto_ads: boolean;
  adsense_enabled: boolean;
  ga_tracking_id: string;
}

export interface EmailSubscriber {
  id: string;
  email: string;
  created_at: string;
}
