import { NextRequest, NextResponse } from "next/server";

const ADMIN_API_KEY = process.env.ADMIN_API_KEY || "";

export function verifyAuth(request: NextRequest): { ok: boolean; error?: string } {
  if (!ADMIN_API_KEY) {
    return { ok: false, error: "ADMIN_API_KEY not configured on server" };
  }

  const authHeader = request.headers.get("authorization");

  if (!authHeader) {
    return { ok: false, error: "Missing Authorization header" };
  }

  const [scheme, token] = authHeader.split(" ");

  if (scheme !== "Bearer" || !token) {
    return { ok: false, error: "Invalid Authorization format. Use: Bearer <token>" };
  }

  if (token !== ADMIN_API_KEY) {
    return { ok: false, error: "Invalid API key" };
  }

  return { ok: true };
}
