import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchCmsResource } from "@/lib/cms-api";
import { SITE_URL, absoluteUrl } from "@/lib/site";
import IndustryDetailClient from "./IndustryDetailClient";

async function getPublishedIndustry(slug: string) {
  const industries = await fetchCmsResource("/api/public/industries", "industries");
  const row: any = industries.find((i: any) => i.slug === slug && i.status === "published");
  return row || null;
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ slug?: string }>;
}): Promise<Metadata> {
  const { slug } = await searchParams;
  const resolvedSlug = slug || "bfsi";
  const row = await getPublishedIndustry(resolvedSlug);
  if (!row) return {};

  const title = row.metaTitle || row.name;
  const description = row.metaDescription || row.heroDescription;
  const canonical = `${SITE_URL}/industry-detail?slug=${resolvedSlug}`;
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

export default async function IndustryPage({
  searchParams,
}: {
  searchParams: Promise<{ slug?: string }>;
}) {
  const { slug } = await searchParams;
  const resolvedSlug = slug || "bfsi";
  const row = await getPublishedIndustry(resolvedSlug);

  if (!row) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    headline: row.name,
    image: absoluteUrl(row.ogImageUrl || row.heroImageUrl),
    dateModified: row.updatedAt || undefined,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <IndustryDetailClient />
    </>
  );
}
