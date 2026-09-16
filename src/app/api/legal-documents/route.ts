import { NextRequest, NextResponse } from "next/server";
import { fetchCmsResource } from "@/lib/cms-api";

// GET /api/legal-documents - List published legal documents (optional ?slug= filter, via the admin CMS public API)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    let documents = await fetchCmsResource("/api/public/legal", "documents");
    documents = documents.filter((d: any) => d.status === "published");
    if (slug) documents = documents.filter((d: any) => d.slug === slug);

    return NextResponse.json({ success: true, data: documents });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to fetch legal documents" },
      { status: 500 }
    );
  }
}
