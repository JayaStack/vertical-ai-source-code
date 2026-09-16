import type { Metadata } from "next";
import { fetchCmsResource } from "@/lib/cms-api";
import IndustryDetailClient from "./IndustryDetailClient";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ slug?: string }>;
}): Promise<Metadata> {
  const { slug } = await searchParams;
  const resolvedSlug = slug || "bfsi";

  try {
    const industries = await fetchCmsResource("/api/public/industries", "industries");
    const row: any = industries.find((i: any) => i.slug === resolvedSlug);
    if (!row) return {};

    return {
      title: row.metaTitle || row.name,
      description: row.metaDescription || row.heroDescription,
      openGraph: {
        images: [row.ogImageUrl || row.heroImageUrl].filter(Boolean),
      },
    };
  } catch {
    return {};
  }
}

export default function IndustryPage() {
  return <IndustryDetailClient />;
}
