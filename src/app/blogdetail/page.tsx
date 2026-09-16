import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchCmsResource } from "@/lib/cms-api";
import { SITE_URL } from "@/lib/site";
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

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    alternates: {
      canonical: `${SITE_URL}/blogdetail?slug=${slug}`,
    },
    openGraph: {
      images: [post.ogImageUrl || post.bannerUrl].filter(Boolean),
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.publishedAt || post.createdAt || undefined,
    dateModified: post.updatedAt || post.publishedAt || undefined,
    author: post.author ? { "@type": "Person", name: post.author } : undefined,
    image: post.ogImageUrl || post.bannerUrl || undefined,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogDetailClient />
    </>
  );
}
