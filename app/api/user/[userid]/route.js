import { NextResponse } from "next/server";
import connectDB from "../../../../config/db";
import User from "../../../../models/user.model";

export async function GET(request, { params }) {
  const id = await params;
  try {
    await connectDB();
    const user = await User.findOne({ userId: id?.userid });
    if (!user) {
      return NextResponse.json({
        success: false,
        message: `User not found`,
      });
    }
    return NextResponse.json({
      success: true,
      user,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: `Internal Error while getting user`,
    });
  }
}
