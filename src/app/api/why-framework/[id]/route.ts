import { NextRequest, NextResponse } from "next/server";
import { fetchCmsResource } from "@/lib/cms-api";

// GET /api/why-framework/[id] - Get single pillar by id or slug (via the admin CMS public API)
export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  try {
    const pillars = await fetchCmsResource("/api/public/why-framework", "frameworks");
    const pillar = pillars.find((p: any) => p.id === params.id || p.slug === params.id);
    if (!pillar) {
      return NextResponse.json({ success: false, error: "Pillar not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: pillar });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message }, { status: 500 });
  }
}
