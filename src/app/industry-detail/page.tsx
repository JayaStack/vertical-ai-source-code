import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchCmsResource } from "@/lib/cms-api";
import { SITE_URL } from "@/lib/site";
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

  return {
    title: row.metaTitle || row.name,
    description: row.metaDescription || row.heroDescription,
    alternates: {
      canonical: `${SITE_URL}/industry-detail?slug=${resolvedSlug}`,
    },
    openGraph: {
      images: [row.ogImageUrl || row.heroImageUrl].filter(Boolean),
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
    image: row.ogImageUrl || row.heroImageUrl || undefined,
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
