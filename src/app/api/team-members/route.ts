import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "../auth";
import prisma from "@/lib/prisma";
import { v4 as uuidv4 } from "uuid";

// GET /api/team-members - List published team members, ordered for display
export async function GET() {
  try {
    const teamMembers = await prisma.teamMember.findMany({
      where: { status: "published" },
      orderBy: { sortOrder: "asc" },
    });
    return NextResponse.json({ success: true, data: teamMembers });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to fetch team members" },
      { status: 500 }
    );
  }
}

// POST /api/team-members - Create a new team member (requires auth)
export async function POST(request: NextRequest) {
  const auth = verifyAuth(request);
  if (!auth.ok) {
    return NextResponse.json({ success: false, error: auth.error }, { status: 401 });
  }

  try {
    const body = await request.json();

    const teamMember = await prisma.teamMember.create({
      data: {
        id: uuidv4(),
        name: body.name || "",
        role: body.role || "",
        bio: body.bio || "",
        imageUrl: body.imageUrl || "",
        linkedinUrl: body.linkedinUrl || null,
        twitterUrl: body.twitterUrl || null,
        mailTo: body.mailTo || null,
        sortOrder: typeof body.sortOrder === "number" ? body.sortOrder : 0,
        status: body.status || "published",
        updatedAt: new Date(),
      },
    });

    return NextResponse.json({ success: true, data: teamMember }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to create team member" },
      { status: 500 }
    );
  }
}
