import connectMongoDB from "@/libs/mongodb";
import student from "@/models/student";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  const result = await student.aggregate([
    {
      $group: {
        _id: "$city",
        totalMarks: { $sum: "$marks" }
      }
    },
    {
      $project: {
        city: "$_id",
        totalMarks: 1,
        _id: 0
      }
    }
  ]);
  return NextResponse.json({ result });
}