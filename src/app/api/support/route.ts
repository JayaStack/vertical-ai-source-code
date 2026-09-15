import { NextRequest, NextResponse } from "next/server";
import { CMS_API_URL } from "@/lib/cms-api";

// POST /api/support - Forward a support case submission to the admin CMS.
// CMS contract: POST /api/support, public/unauthenticated, JSON body:
// { fullName, workEmail, supportCategory, message }
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const cmsResponse = await fetch(`${CMS_API_URL}/api/support`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const cmsResult = await cmsResponse.json().catch(() => null);

    if (!cmsResponse.ok) {
      return NextResponse.json(
        {
          success: false,
          error: cmsResult?.error || `CMS support request failed (${cmsResponse.status})`,
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
      { success: false, error: error?.message || "Failed to submit support case" },
      { status: 500 }
    );
  }
}
