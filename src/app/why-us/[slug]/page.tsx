import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchCmsResource } from "@/lib/cms-api";
import { SITE_URL } from "@/lib/site";
import FeatureClientPage from "./feature-client-page";

async function getPublishedPillar(slug: string) {
  const pillars = await fetchCmsResource("/api/public/why-framework", "frameworks");
  const pillar: any = pillars.find((p: any) => p.slug === slug && p.status === "published");
  return pillar || null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pillar = await getPublishedPillar(slug);
  if (!pillar) return {};

  const title = pillar.metaTitle || pillar.heroBannerText || pillar.mainHeading;
  const description = pillar.metaDescription || pillar.introDescription;
  const canonical = `${SITE_URL}/why-us/${slug}`;
  const ogTitle = pillar.ogTitle || title;
  const ogDescription = pillar.ogDescription || description;
  const ogImage = pillar.ogImageUrl || pillar.heroBannerImageUrl;
  const ogImageAlt = pillar.ogImageAlt || title;

  return {
    title,
    description,
    keywords: pillar.metaKeywords || undefined,
    alternates: { canonical },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      siteName: pillar.ogSiteName || "The Vertical AI",
      url: pillar.ogUrl || canonical,
      type: (pillar.ogType || "website") as any,
      images: ogImage ? [{ url: ogImage, alt: ogImageAlt }] : undefined,
    },
    twitter: {
      title: ogTitle,
      description: ogDescription,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function FeaturePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pillar = await getPublishedPillar(slug);

  if (!pillar) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    headline: pillar.heroBannerText || pillar.mainHeading,
    image: pillar.ogImageUrl || pillar.heroBannerImageUrl || undefined,
    dateModified: pillar.updatedAt || undefined,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FeatureClientPage slug={slug} />
    </>
  );
}
