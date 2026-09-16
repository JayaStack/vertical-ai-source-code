import type { Metadata } from "next";
import { fetchCmsResource } from "@/lib/cms-api";
import BlogDetailClient from "./BlogDetailClient";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ slug?: string }>;
}): Promise<Metadata> {
  const { slug } = await searchParams;
  if (!slug) return {};

  try {
    const blogs = await fetchCmsResource("/api/public/blogs", "blogs");
    const post: any = blogs.find((b: any) => b.slug === slug);
    if (!post) return {};

    return {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      openGraph: {
        images: [post.ogImageUrl || post.bannerUrl].filter(Boolean),
      },
    };
  } catch {
    return {};
  }
}

export default function BlogDetailPage() {
  return <BlogDetailClient />;
}
