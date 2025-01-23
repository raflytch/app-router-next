import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
  const request = await req.json();
  return NextResponse.json({
    status: 200,
    message: "Hello World",
    data: request,
  });
}
