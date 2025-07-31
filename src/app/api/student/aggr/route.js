import connectMongoDB from "@/libs/mongodb";
import student from "@/models/student";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  const count = await student.countDocuments();
  return NextResponse.json({ count });
}
