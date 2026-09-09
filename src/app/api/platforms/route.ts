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

// GET /api/platforms - List published platforms (optional ?slug= filter)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    const platforms = await prisma.platformOs.findMany({
      where: {
        status: "published",
        ...(slug ? { slug } : {}),
      },
      orderBy: { createdAt: "asc" },
    });

    return NextResponse.json({ success: true, data: platforms });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to fetch platforms" },
      { status: 500 }
    );
  }
}

// POST /api/platforms - Create a new platform (requires auth)
export async function POST(request: NextRequest) {
  const auth = verifyAuth(request);
  if (!auth.ok) {
    return NextResponse.json({ success: false, error: auth.error }, { status: 401 });
  }

  try {
    const body = await request.json();

    const platform = await prisma.platformOs.create({
      data: {
        id: uuidv4(),
        slug: body.slug || slugify(body.name || "untitled"),
        name: body.name || "",
        status: body.status || "published",
        heroTitle: body.heroTitle || "",
        heroTitleHighlight: body.heroTitleHighlight || "",
        heroDescription: body.heroDescription || "",
        heroImageUrl: body.heroImageUrl || "",
        clientsDescription: body.clientsDescription || "",
        clientLogos: Array.isArray(body.clientLogos) ? body.clientLogos : [],
        whyTitle: body.whyTitle || "",
        whyTitleHighlight: body.whyTitleHighlight || "",
        whyDescription: body.whyDescription || "",
        whySteps: body.whySteps || [],
        intelTitle: body.intelTitle || "",
        intelTitleHighlight: body.intelTitleHighlight || "",
        intelDescription: body.intelDescription || "",
        intelSteps: body.intelSteps || [],
        useCasesTitle: body.useCasesTitle || "",
        useCasesTitleHighlight: body.useCasesTitleHighlight || "",
        useCasesCards: body.useCasesCards || [],
        impactTitle: body.impactTitle || "",
        impactTitleHighlight: body.impactTitleHighlight || "",
        impactMetrics: body.impactMetrics || [],
        securityTitle: body.securityTitle || "",
        securityTitleHighlight: body.securityTitleHighlight || "",
        securityDescription: body.securityDescription || "",
        securityFeatures: body.securityFeatures || [],
        securityGridItems: Array.isArray(body.securityGridItems) ? body.securityGridItems : [],
        ctaTitle: body.ctaTitle || "",
        ctaTitleHighlight: body.ctaTitleHighlight || "",
        updatedAt: new Date(),
      },
    });

    return NextResponse.json({ success: true, data: platform }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to create platform" },
      { status: 500 }
    );
  }
}
