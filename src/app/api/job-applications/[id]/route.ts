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

// PUT /api/job-applications/[id] - Update application status (requires auth)
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const auth = verifyAuth(request);
  if (!auth.ok) return NextResponse.json({ success: false, error: auth.error }, { status: 401 });

  try {
    const body = await request.json();
    const application = await prisma.jobApplication.update({
      where: { id: params.id },
      data: { status: body.status },
    });
    return NextResponse.json({ success: true, data: application });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message }, { status: 500 });
  }
}

// DELETE /api/job-applications/[id] - Delete a job application (requires auth)
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const auth = verifyAuth(request);
  if (!auth.ok) return NextResponse.json({ success: false, error: auth.error }, { status: 401 });

  try {
    await prisma.jobApplication.delete({ where: { id: params.id } });
    return NextResponse.json({ success: true, message: "Job application deleted" });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message }, { status: 500 });
  }
}
