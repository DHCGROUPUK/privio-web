import { NextResponse } from "next/server";

// Railway health-check endpoint per CLAUDE.md.
export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.json({ status: "ok", service: "privio-web" });
}
