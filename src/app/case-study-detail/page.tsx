import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchCmsResource } from "@/lib/cms-api";
import { SITE_URL } from "@/lib/site";
import CaseStudyDetailClient from "./CaseStudyDetailClient";

async function getPublishedCaseStudy(slug: string | undefined) {
  if (!slug) return null;
  const caseStudies = await fetchCmsResource("/api/public/case-studies", "caseStudies");
  const cs: any = caseStudies.find((c: any) => c.slug === slug && c.status === "published");
  return cs || null;
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ slug?: string }>;
}): Promise<Metadata> {
  const { slug } = await searchParams;
  const cs = await getPublishedCaseStudy(slug);
  if (!cs) return {};

  const title = cs.metaTitle || cs.storyTitle;
  const description = cs.metaDescription || undefined;
  const canonical = `${SITE_URL}/case-study-detail?slug=${slug}`;
  const ogTitle = cs.ogTitle || title;
  const ogDescription = cs.ogDescription || description;
  const ogImage = cs.ogImageUrl || cs.headerImageUrl;
  const ogImageAlt = cs.ogImageAlt || title;

  return {
    title,
    description,
    keywords: cs.metaKeywords || undefined,
    alternates: { canonical },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      siteName: cs.ogSiteName || "The Vertical AI",
      url: cs.ogUrl || canonical,
      type: (cs.ogType || "website") as any,
      images: ogImage ? [{ url: ogImage, alt: ogImageAlt }] : undefined,
    },
    twitter: {
      title: ogTitle,
      description: ogDescription,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function CaseStudyDetailPage({
  searchParams,
}: {
  searchParams: Promise<{ slug?: string }>;
}) {
  const { slug } = await searchParams;
  const cs = await getPublishedCaseStudy(slug);

  if (!cs) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    headline: cs.storyTitle,
    image: cs.ogImageUrl || cs.headerImageUrl || undefined,
    dateModified: cs.updatedAt || undefined,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CaseStudyDetailClient />
    </>
  );
}
