import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, phone, message, service } = await req.json();

  console.log({ name, email, phone, message, service });

  return NextResponse.json({
    message: "Form submitted. We will contact you shortly",
  });
}
