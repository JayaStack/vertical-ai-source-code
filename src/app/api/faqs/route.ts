import { NextRequest, NextResponse } from "next/server";
import { fetchCmsResource } from "@/lib/cms-api";

// GET /api/faqs - List published FAQs (optional ?scopeKey= filter, via the admin CMS public API)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const scopeKey = searchParams.get("scopeKey");

    let faqs = await fetchCmsResource("/api/public/faqs", "faqs");
    faqs = faqs.filter((f: any) => f.status === "published");
    if (scopeKey) faqs = faqs.filter((f: any) => f.scopeKey === scopeKey);

    return NextResponse.json({ success: true, data: faqs });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to fetch FAQs" },
      { status: 500 }
    );
  }
}
