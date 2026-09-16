import { NextRequest, NextResponse } from "next/server";
import { CMS_API_URL } from "@/lib/cms-api";

// POST /api/apply-job - Forward a job application to the admin CMS, which
// persists it and handles all email notifications (SMTP config now lives
// in the admin panel, not this project).
// CMS contract: 201 { success: true, id } on success; 400 { error, issues? } on
// validation failure; 500 { error } on server error.
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const cmsResponse = await fetch(`${CMS_API_URL}/api/apply-job`, {
      method: "POST",
      body: formData,
    });
    const cmsResult = await cmsResponse.json().catch(() => null);

    if (!cmsResponse.ok) {
      // Pass the CMS's status and body straight through (e.g. 400 + issues for
      // validation failures) instead of collapsing everything to a generic 500.
      return NextResponse.json(
        {
          success: false,
          error: cmsResult?.error || `CMS apply-job request failed (${cmsResponse.status})`,
          issues: cmsResult?.issues,
        },
        { status: cmsResponse.status }
      );
    }

    return NextResponse.json({
      success: true,
      id: cmsResult?.id,
      message: "Application submitted successfully",
    });
  } catch (error: any) {
    console.error("Error processing application:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Failed to process application",
      },
      { status: 500 }
    );
  }
}
