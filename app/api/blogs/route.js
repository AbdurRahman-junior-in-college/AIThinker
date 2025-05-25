import { NextResponse } from "next/server";
import connectDB from "../../../config/db";
import { Blog } from "../../../models/blog.model";

export async function POST(request) {
  const { content, userId } = await request.json();

  // const title = content.split(" ").slice(0, 10).join(" ");
  const title = content.match(/<h1[^>]*>(.*?)<\/h1>/i);

  try {
    await connectDB();

    if (!content) {
      return NextResponse.json({
        success: false,
        message: "Content is Missing",
      });
    }
    const blog = Blog.create({ title, description: content, userId });
    return NextResponse.json({ success: true, blog });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: `Internal Error while createing blog.`,
    });
  }
}
