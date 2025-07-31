import connectMongoDB from "@/libs/mongodb";
import student from "@/models/student";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { stu_name, city, marks } = await request.json();
  console.log("Received data:", { stu_name, city, marks, type: typeof marks });
  await connectMongoDB();
  await student.create({ stu_name, city, marks: Number(marks) });
  return NextResponse.json({ message: "Student Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const students = await student.find();
  return NextResponse.json({ students });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await student.findByIdAndDelete(id);
  return NextResponse.json({ message: "Student deleted" }, { status: 200 });
}