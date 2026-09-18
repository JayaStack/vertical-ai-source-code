import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchCmsResource } from "@/lib/cms-api";
import { SITE_URL } from "@/lib/site";
import { JsonLd, buildDefaultSchema } from "@/lib/json-ld";
import IndustryDetailClient from "./IndustryDetailClient";

async function getPublishedIndustry(slug: string) {
  const industries = await fetchCmsResource("/api/public/industries", "industries");
  const row: any = industries.find((i: any) => i.slug === slug && i.status === "published");
  return row || null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const row = await getPublishedIndustry(slug);
  if (!row) return {};

  const title = row.metaTitle || row.name;
  const description = row.metaDescription || row.heroDescription;
  const canonical = `${SITE_URL}/industry/${slug}`;
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
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const row = await getPublishedIndustry(slug);

  if (!row) {
    notFound();
  }

  return (
    <>
      <JsonLd data={row.schemaMarkup || JSON.stringify(buildDefaultSchema("industry", row))} />
      <IndustryDetailClient />
    </>
  );
}
