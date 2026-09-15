import { NextRequest, NextResponse } from "next/server";
import { fetchCmsResource } from "@/lib/cms-api";

// GET /api/industries/[id] - Get single industry by id or slug (via the admin CMS public API)
export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  try {
    const industries = await fetchCmsResource("/api/public/industries", "industries");
    const industry = industries.find((i: any) => i.id === params.id || i.slug === params.id);
    if (!industry) {
      return NextResponse.json({ success: false, error: "Industry not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: industry });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message }, { status: 500 });
  }
}
