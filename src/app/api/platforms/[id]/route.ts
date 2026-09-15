import { NextRequest, NextResponse } from "next/server";
import { fetchCmsResource } from "@/lib/cms-api";

// GET /api/platforms/[id] - Get single platform by id or slug (via the admin CMS public API)
export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  try {
    const platforms = await fetchCmsResource("/api/public/platform-os", "platforms");
    const platform = platforms.find((p: any) => p.id === params.id || p.slug === params.id);
    if (!platform) {
      return NextResponse.json({ success: false, error: "Platform not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: platform });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message }, { status: 500 });
  }
}
