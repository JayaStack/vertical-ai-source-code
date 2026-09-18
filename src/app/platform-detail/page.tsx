import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchCmsResource } from "@/lib/cms-api";
import { SITE_URL } from "@/lib/site";
import { JsonLd, buildDefaultSchema } from "@/lib/json-ld";
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

  const title = row.metaTitle || row.name;
  const description = row.metaDescription || row.heroDescription;
  const canonical = `${SITE_URL}/platform-detail?slug=${resolvedSlug}`;
  const ogTitle = row.ogTitle || title;
  const ogDescription = row.ogDescription || description;
  const ogImage = row.ogImageUrl || row.heroImageUrl;
  const ogImageAlt = row.ogImageAlt || title;

  return {
    title,
    description,
    keywords: row.metaKeywords || undefined,
    alternates: { canonical },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      siteName: row.ogSiteName || "The Vertical AI",
      url: row.ogUrl || canonical,
      type: (row.ogType || "website") as any,
      images: ogImage ? [{ url: ogImage, alt: ogImageAlt }] : undefined,
    },
    twitter: {
      title: ogTitle,
      description: ogDescription,
      images: ogImage ? [ogImage] : undefined,
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

  return (
    <>
      <JsonLd data={row.schemaMarkup || JSON.stringify(buildDefaultSchema("platform", row))} />
      <PlatformDetailClient />
    </>
  );
}
