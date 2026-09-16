import { NextRequest, NextResponse } from "next/server";
import { fetchCmsResource } from "@/lib/cms-api";

// GET /api/why-framework - List published pillars (optional ?slug= filter, via the admin CMS public API)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    let pillars = await fetchCmsResource("/api/public/why-framework", "frameworks");
    pillars = pillars.filter((p: any) => p.status === "published");
    if (slug) pillars = pillars.filter((p: any) => p.slug === slug);

    return NextResponse.json({ success: true, data: pillars });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to fetch pillars" },
      { status: 500 }
    );
  }
}
