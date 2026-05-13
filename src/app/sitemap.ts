import type { MetadataRoute } from "next";
import { mockProducts, mockPosts, mockCategories } from "@/lib/mock-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ai-toy-guide.vercel.app";

  const staticPages = [
    "", "/products", "/blog", "/rankings", "/compare", "/shop",
    "/about", "/review-method", "/affiliate-disclosure",
    "/privacy-policy", "/terms", "/contact",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const productPages = mockProducts
    .filter((p) => p.is_published)
    .map((p) => ({
      url: `${baseUrl}/products/${p.slug}`,
      lastModified: new Date(p.updated_at),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    }));

  const postPages = mockPosts
    .filter((p) => p.status === "published")
    .map((p) => ({
      url: `${baseUrl}/blog/${p.slug}`,
      lastModified: new Date(p.updated_at),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));

  const categoryPages = mockCategories.map((c) => ({
    url: `${baseUrl}/categories/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...productPages, ...postPages, ...categoryPages];
}
