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

  return {
    title: cs.metaTitle || cs.storyTitle,
    description: cs.metaDescription || undefined,
    alternates: {
      canonical: `${SITE_URL}/case-study-detail?slug=${slug}`,
    },
    openGraph: {
      images: [cs.ogImageUrl || cs.headerImageUrl].filter(Boolean),
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
