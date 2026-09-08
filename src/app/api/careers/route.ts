import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "../auth";
import prisma from "@/lib/prisma";
import { v4 as uuidv4 } from "uuid";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// GET /api/careers - List all careers
export async function GET() {
  try {
    const careers = await prisma.jobListing.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ success: true, data: careers });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to read careers" },
      { status: 500 }
    );
  }
}

// POST /api/careers - Create a new career (requires auth)
export async function POST(request: NextRequest) {
  const auth = verifyAuth(request);
  if (!auth.ok) {
    return NextResponse.json({ success: false, error: auth.error }, { status: 401 });
  }

  try {
    const body = await request.json();

    const newCareer = await prisma.jobListing.create({
      data: {
        id: uuidv4(),
        slug: body.slug || slugify(body.title || "untitled"),
        title: body.title || "Untitled Position",
        category: body.category || "General",
        location: body.location || "Not specified",
        type: body.type || "Full-time",
        experience: body.experience || null,
        salary: body.salary || "Competitive",
        description: body.description || "",
        about: Array.isArray(body.about) ? body.about : [],
        responsibilities: Array.isArray(body.responsibilities) ? body.responsibilities : [],
        requirements: Array.isArray(body.requirements) ? body.requirements : [],
        status: body.status || "published",
        updatedAt: new Date(),
      },
    });

    return NextResponse.json({ success: true, data: newCareer }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to create career" },
      { status: 500 }
    );
  }
}
