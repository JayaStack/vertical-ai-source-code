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

// GET /api/industries - List published industries (optional ?slug= filter)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    const industries = await prisma.industry.findMany({
      where: {
        status: "published",
        ...(slug ? { slug } : {}),
      },
      orderBy: { createdAt: "asc" },
    });

    return NextResponse.json({ success: true, data: industries });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to fetch industries" },
      { status: 500 }
    );
  }
}

// POST /api/industries - Create a new industry (requires auth)
export async function POST(request: NextRequest) {
  const auth = verifyAuth(request);
  if (!auth.ok) {
    return NextResponse.json({ success: false, error: auth.error }, { status: 401 });
  }

  try {
    const body = await request.json();

    const industry = await prisma.industry.create({
      data: {
        id: uuidv4(),
        slug: body.slug || slugify(body.name || "untitled"),
        name: body.name || "",
        status: body.status || "published",
        heroTitle: body.heroTitle || "",
        heroTitleHighlight: body.heroTitleHighlight || "",
        heroDescription: body.heroDescription || "",
        heroDescriptionHighlight: body.heroDescriptionHighlight || "",
        heroImageUrl: body.heroImageUrl || "",
        trustedLogos: Array.isArray(body.trustedLogos) ? body.trustedLogos : [],
        ctaTitle: body.ctaTitle || "",
        ctaTitleHighlight: body.ctaTitleHighlight || "",
        featuresTitle: body.featuresTitle || "",
        featuresTitleHighlight: body.featuresTitleHighlight || "",
        featuresDescription: body.featuresDescription || "",
        featureCards: body.featureCards || [],
        transformationLegacy: Array.isArray(body.transformationLegacy) ? body.transformationLegacy : [],
        transformationOutcomes: Array.isArray(body.transformationOutcomes) ? body.transformationOutcomes : [],
        pillarsTitle: body.pillarsTitle || "",
        pillarsTitleHighlight: body.pillarsTitleHighlight || "",
        pillarsSubtitle: body.pillarsSubtitle || "",
        productPillars: body.productPillars || [],
        caseStudy: body.caseStudy || {},
        metricsTitle: body.metricsTitle || "",
        metricsTitleHighlight: body.metricsTitleHighlight || "",
        metrics: body.metrics || [],
        agentsTitle: body.agentsTitle || "",
        agentsTitleHighlight: body.agentsTitleHighlight || "",
        agentCards: body.agentCards || [],
        complianceTitle: body.complianceTitle || "",
        complianceTitleHighlight: body.complianceTitleHighlight || "",
        complianceCards: body.complianceCards || [],
        useCases: body.useCases || [],
        updatedAt: new Date(),
      },
    });

    return NextResponse.json({ success: true, data: industry }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to create industry" },
      { status: 500 }
    );
  }
}
