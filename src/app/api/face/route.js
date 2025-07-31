import connectMongoDB from "@/libs/mongodb";
import Facevalue from "@/models/faceData";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { stu_email, stu_emb } = await request.json();
  console.log(stu_email + " - " + stu_emb);
  await connectMongoDB();
  await Facevalue.create({ stu_email, stu_emb });
  return NextResponse.json({ message: "Student Face Value save successfully" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const students = await Facevalue.find();
  return NextResponse.json({ students });
}