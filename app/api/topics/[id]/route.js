import { NextResponse } from "next/server";
import connectDB from "../../../../config/db";


export async function PUT(request, { params }) {
  const { id } = params;

  const { newTitle: title, newDes: description } = await request.json();
  await connectDB();
  await Topic.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ success: true, message: "Topic updated" });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectDB();
  const topic = Topic.findOne({ _id: id });
  return NextResponse.json({ topic });
}
