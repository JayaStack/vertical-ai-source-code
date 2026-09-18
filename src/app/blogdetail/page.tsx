import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchCmsResource } from "@/lib/cms-api";
import { SITE_URL } from "@/lib/site";
import { JsonLd, buildDefaultSchema } from "@/lib/json-ld";
import BlogDetailClient from "./BlogDetailClient";

async function getPublishedPost(slug: string | undefined) {
  if (!slug) return null;
  const blogs = await fetchCmsResource("/api/public/blogs", "blogs");
  const post: any = blogs.find((b: any) => b.slug === slug && b.status === "published");
  return post || null;
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ slug?: string }>;
}): Promise<Metadata> {
  const { slug } = await searchParams;
  const post = await getPublishedPost(slug);
  if (!post) return {};

  const title = post.metaTitle || post.title;
  const description = post.metaDescription || post.excerpt;
  const canonical = `${SITE_URL}/blogdetail?slug=${slug}`;
  const ogTitle = post.ogTitle || title;
  const ogDescription = post.ogDescription || description;
  const ogImage = post.ogImageUrl || post.bannerUrl;
  const ogImageAlt = post.ogImageAlt || title;

  return {
    title,
    description,
    keywords: post.metaKeywords || undefined,
    alternates: { canonical },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      siteName: post.ogSiteName || "The Vertical AI",
      url: post.ogUrl || canonical,
      type: (post.ogType || "website") as any,
      images: ogImage ? [{ url: ogImage, alt: ogImageAlt }] : undefined,
    },
    twitter: {
      title: ogTitle,
      description: ogDescription,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function BlogDetailPage({
  searchParams,
}: {
  searchParams: Promise<{ slug?: string }>;
}) {
  const { slug } = await searchParams;
  const post = await getPublishedPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <JsonLd data={post.schemaMarkup || JSON.stringify(buildDefaultSchema("blog", post))} />
      <BlogDetailClient />
    </>
  );
}
