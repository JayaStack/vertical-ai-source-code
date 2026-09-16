import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchCmsResource } from "@/lib/cms-api";
import { SITE_URL } from "@/lib/site";
import PlatformDetailClient from "./PlatformDetailClient";

async function getPublishedPlatform(slug: string) {
  const platforms = await fetchCmsResource("/api/public/platform-os", "platforms");
  const row: any = platforms.find((p: any) => p.slug === slug && p.status === "published");
  return row || null;
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ slug?: string }>;
}): Promise<Metadata> {
  const { slug } = await searchParams;
  const resolvedSlug = slug || "maestro";
  const row = await getPublishedPlatform(resolvedSlug);
  if (!row) return {};

  return {
    title: row.metaTitle || row.name,
    description: row.metaDescription || row.heroDescription,
    alternates: {
      canonical: `${SITE_URL}/platform-detail?slug=${resolvedSlug}`,
    },
    openGraph: {
      images: [row.ogImageUrl || row.heroImageUrl].filter(Boolean),
    },
  };
}

export default async function PlatformDetailPage({
  searchParams,
}: {
  searchParams: Promise<{ slug?: string }>;
}) {
  const { slug } = await searchParams;
  const resolvedSlug = slug || "maestro";
  const row = await getPublishedPlatform(resolvedSlug);

  if (!row) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    headline: row.name,
    image: row.ogImageUrl || row.heroImageUrl || undefined,
    dateModified: row.updatedAt || undefined,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PlatformDetailClient />
    </>
  );
}
