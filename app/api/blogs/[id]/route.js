import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import connectDB from "../../../../config/db";
import { Blog } from "../../../../models/blog.model";

export async function PUT(request, { params }) {
  const { content } = await request.json();

  const { id } = await params;

  const title = content.split(" ").slice(0, 10).join(" ");

  try {
    await connectDB();

    if (!content) {
      return NextResponse.json({
        success: false,
        message: "Content is Missing",
      });
    }

    const blog = await Blog.findByIdAndUpdate(id, {
      title,
      description: content,
    });

    // const blog = Blog.create({ title, description: content });
    return NextResponse.json({ success: true, blog });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: `Internal Error while Updating blog.`,
    });
  }
}

export async function GET(request, { params }) {
  // const {id:userId} = await params;

  // const user = await currentUser()

  // console.log("user", user)
  const { id } = await params;
  try {
    await connectDB();

    const blogs = await Blog.find({
      userId: id,
    });

    if (!blogs.length) {
      return NextResponse.json({ success: false });
    }
    return NextResponse.json({ success: true, blogs });
  } catch (error) {
    return NextResponse.json({ success: false, message: `Internal Error` });
  }
}
