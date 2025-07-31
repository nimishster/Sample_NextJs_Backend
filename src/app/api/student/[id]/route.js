import connectMongoDB from "@/libs/mongodb";
import student from "@/models/student";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { stu_name, city,marks } = await request.json();

  await connectMongoDB();
  await student.findByIdAndUpdate(id, {
    stu_name: stu_name, 
    city: city,  
    marks: marks,       
  });

  return NextResponse.json({ message: "Student updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = await params;
  await connectMongoDB();
  const student_one = await student.findOne({ _id: id });
  return NextResponse.json({ student_one }, { status: 200 });
}