import type { Metadata } from "next";
import { fetchCmsResource } from "@/lib/cms-api";
import CaseStudyDetailClient from "./CaseStudyDetailClient";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ slug?: string }>;
}): Promise<Metadata> {
  const { slug } = await searchParams;
  if (!slug) return {};

  try {
    const caseStudies = await fetchCmsResource("/api/public/case-studies", "caseStudies");
    const cs: any = caseStudies.find((c: any) => c.slug === slug);
    if (!cs) return {};

    return {
      title: cs.metaTitle || cs.storyTitle,
      description: cs.metaDescription || undefined,
      openGraph: {
        images: [cs.ogImageUrl || cs.headerImageUrl].filter(Boolean),
      },
    };
  } catch {
    return {};
  }
}

export default function CaseStudyDetailPage() {
  return <CaseStudyDetailClient />;
}
