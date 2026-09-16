import { NextRequest, NextResponse } from "next/server";
import { fetchCmsResource } from "@/lib/cms-api";

// GET /api/industries - List published industries (optional ?slug= filter, via the admin CMS public API)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    let industries = await fetchCmsResource("/api/public/industries", "industries");
    industries = industries.filter((i: any) => i.status === "published");
    if (slug) industries = industries.filter((i: any) => i.slug === slug);

    return NextResponse.json({ success: true, data: industries });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to fetch industries" },
      { status: 500 }
    );
  }
}
