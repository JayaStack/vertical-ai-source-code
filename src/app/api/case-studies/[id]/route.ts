import { NextRequest, NextResponse } from "next/server";
import { fetchCmsResource } from "@/lib/cms-api";

// GET /api/case-studies/[id] - Get single case study by id or slug (via the admin CMS public API)
export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  try {
    const caseStudies = await fetchCmsResource("/api/public/case-studies", "caseStudies");
    const caseStudy = caseStudies.find((c: any) => c.id === params.id || c.slug === params.id);
    if (!caseStudy) {
      return NextResponse.json({ success: false, error: "Case study not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: caseStudy });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message }, { status: 500 });
  }
}
