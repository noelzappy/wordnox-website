import { NextResponse } from "next/server";
import db from "@/lib/db";
import { type NextRequest as Req, type NextResponse as Res } from "next/server";

export async function POST(request: Req) {
  try {
    const data = await request.json();
    if (!data.name || !data.email || !data.message) {
      throw new Error("Please fill in all fields");
    }
    await db.contact.create({
      data: {
        name: data.name,
        email: data.email,
        message: data.message,
        phone: data.phoneNumber,
      },
    });

    return NextResponse.json("Your message has been sent!", {
      status: 201,
    });
  } catch (e: any) {
    return NextResponse.json(
      {
        message: e.message,
        status: 400,
      },
      { status: 400 }
    );
  }
}
