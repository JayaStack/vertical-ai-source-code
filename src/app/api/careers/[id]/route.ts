import { NextRequest, NextResponse } from "next/server";
import { readFile, writeFile } from "fs/promises";
import path from "path";
import { verifyAuth } from "../../auth";

const DB_FILE = path.join(process.cwd(), "src", "data", "careers-db.json");

interface Career {
  id: string;
  slug: string;
  title: string;
  category: string;
  location: string;
  type: string;
  experience?: string;
  salary: string;
  description: string;
  about: string[];
  responsibilities: string[];
  requirements: string[];
  status: string;
  createdAt: string;
  updatedAt: string;
}

async function readDB(): Promise<Career[]> {
  const data = await readFile(DB_FILE, "utf-8");
  return JSON.parse(data);
}

async function writeDB(careers: Career[]): Promise<void> {
  await writeFile(DB_FILE, JSON.stringify(careers, null, 2));
}

// GET /api/careers/[id] - Get single career (public)
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const careers = await readDB();
    const career = careers.find((c) => c.id === id || c.slug === id);

    if (!career) {
      return NextResponse.json(
        { success: false, error: "Career not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: career });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to read career" },
      { status: 500 }
    );
  }
}

// PUT /api/careers/[id] - Update career (requires auth)
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = verifyAuth(request);
  if (!auth.ok) {
    return NextResponse.json({ success: false, error: auth.error }, { status: 401 });
  }

  try {
    const { id } = await params;
    const body = await request.json();
    const careers = await readDB();
    const index = careers.findIndex((c) => c.id === id || c.slug === id);

    if (index === -1) {
      return NextResponse.json(
        { success: false, error: "Career not found" },
        { status: 404 }
      );
    }

    const existing = careers[index];
    const updated: Career = {
      ...existing,
      ...body,
      id: existing.id,
      createdAt: existing.createdAt,
      updatedAt: new Date().toISOString(),
    };

    careers[index] = updated;
    await writeDB(careers);

    return NextResponse.json({ success: true, data: updated });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to update career" },
      { status: 500 }
    );
  }
}

// DELETE /api/careers/[id] - Delete career (requires auth)
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = verifyAuth(request);
  if (!auth.ok) {
    return NextResponse.json({ success: false, error: auth.error }, { status: 401 });
  }

  try {
    const { id } = await params;
    const careers = await readDB();
    const index = careers.findIndex((c) => c.id === id || c.slug === id);

    if (index === -1) {
      return NextResponse.json(
        { success: false, error: "Career not found" },
        { status: 404 }
      );
    }

    const deleted = careers.splice(index, 1)[0];
    await writeDB(careers);

    return NextResponse.json({ success: true, data: deleted });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to delete career" },
      { status: 500 }
    );
  }
}
