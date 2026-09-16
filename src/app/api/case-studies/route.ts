import { NextRequest, NextResponse } from "next/server";
import { fetchCmsResource } from "@/lib/cms-api";

// GET /api/case-studies - List published case studies (optional ?slug= filter, via the admin CMS public API)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    let caseStudies = await fetchCmsResource("/api/public/case-studies", "caseStudies");
    caseStudies = caseStudies.filter((c: any) => c.status === "published");
    if (slug) caseStudies = caseStudies.filter((c: any) => c.slug === slug);

    return NextResponse.json({ success: true, data: caseStudies });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to fetch case studies" },
      { status: 500 }
    );
  }
}
