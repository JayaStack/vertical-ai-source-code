import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchCmsResource } from "@/lib/cms-api";
import { SITE_URL } from "@/lib/site";
import { JsonLd, buildDefaultSchema } from "@/lib/json-ld";
import CaseStudyDetailClient from "./CaseStudyDetailClient";

async function getPublishedCaseStudy(slug: string) {
  const caseStudies = await fetchCmsResource("/api/public/case-studies", "caseStudies");
  const cs: any = caseStudies.find((c: any) => c.slug === slug && c.status === "published");
  return cs || null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = await getPublishedCaseStudy(slug);
  if (!cs) return {};

  const title = cs.metaTitle || cs.storyTitle;
  const description = cs.metaDescription || undefined;
  const canonical = `${SITE_URL}/case-study/${slug}`;
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
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = await getPublishedCaseStudy(slug);

  if (!cs) {
    notFound();
  }

  return (
    <>
      <JsonLd data={cs.schemaMarkup || JSON.stringify(buildDefaultSchema("caseStudy", cs))} />
      <CaseStudyDetailClient />
    </>
  );
}
