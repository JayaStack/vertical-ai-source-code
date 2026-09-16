import { NextResponse } from "next/server";
import { fetchCmsResource } from "@/lib/cms-api";

// GET /api/team-members - List published team members, ordered for display (via the admin CMS public API)
export async function GET() {
  try {
    let teamMembers = await fetchCmsResource("/api/public/team", "members");
    teamMembers = teamMembers
      .filter((m: any) => m.status === "published")
      .sort((a: any, b: any) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));
    return NextResponse.json({ success: true, data: teamMembers });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to fetch team members" },
      { status: 500 }
    );
  }
}
