import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(request: NextRequest) {
  const services = await db.service.findMany();
  return NextResponse.json(services, {
    status: 200,
  });
}
