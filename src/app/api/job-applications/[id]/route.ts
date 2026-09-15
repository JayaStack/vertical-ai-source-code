import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "../../auth";
import prisma from "@/lib/prisma";

// GET /api/job-applications/[id] - Get single job application (requires auth)
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const auth = verifyAuth(request);
  if (!auth.ok) return NextResponse.json({ success: false, error: auth.error }, { status: 401 });

  try {
    const application = await prisma.jobApplication.findUnique({ where: { id: params.id } });
    if (!application) {
      return NextResponse.json({ success: false, error: "Job application not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: application });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message }, { status: 500 });
  }
}
