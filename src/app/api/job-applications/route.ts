import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "../auth";
import prisma from "@/lib/prisma";

// GET /api/job-applications - List all job applications (requires auth)
export async function GET(request: NextRequest) {
  const auth = verifyAuth(request);
  if (!auth.ok) {
    return NextResponse.json({ success: false, error: auth.error }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");

    const applications = await prisma.jobApplication.findMany({
      where: status ? { status } : undefined,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ success: true, data: applications });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to fetch job applications" },
      { status: 500 }
    );
  }
}
