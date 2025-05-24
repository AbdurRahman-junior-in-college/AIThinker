import { NextResponse } from "next/server";
import connectDB from "../../../config/db";
import { Sample } from "../../../models/sample.model";

export async function POST(request) {
  const { content } = await request.json();

  const title = content.split(" ").slice(0, 10).join(" ");

  try {
    await connectDB();

    if (!content) {
      return NextResponse.json({
        success: false,
        message: "Content is Missing",
      });
    }
    const sample = Sample.create({ title, description: content });
    return NextResponse.json({ success: true, sample });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: `Internal Error while createing blog.`,
    });
  }
}

export async function GET() {
  try {
    await connectDB();

    const samples = await Sample.find({});
    return NextResponse.json({ samples });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: `Internal Error while createing blog.`,
    });
  }
}
