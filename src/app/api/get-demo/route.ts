import { NextRequest, NextResponse } from "next/server";
import { CMS_API_URL } from "@/lib/cms-api";

// POST /api/get-demo - Forward a demo request to the admin CMS.
// CMS contract: POST /api/get-demo, public/unauthenticated, JSON body:
// { name, email, phone, company, message }
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const cmsResponse = await fetch(`${CMS_API_URL}/api/get-demo`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const cmsResult = await cmsResponse.json().catch(() => null);

    if (!cmsResponse.ok) {
      return NextResponse.json(
        {
          success: false,
          error: cmsResult?.error || `CMS get-demo request failed (${cmsResponse.status})`,
          issues: cmsResult?.issues,
        },
        { status: cmsResponse.status }
      );
    }

    return NextResponse.json(
      { success: true, ...cmsResult },
      { status: cmsResponse.status }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to submit demo request" },
      { status: 500 }
    );
  }
}
