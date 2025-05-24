// import { NextResponse } from "next/server";
// import connectDB from "../../../config/db";


// export async function POST(request) {
//   const { title, description } = await request.json();

//   await connectDB();
//   const topic = await Topic.create({ title, description });
//   return NextResponse.json({ message: "topic created", topic });
// }

// export async function GET(){
//     await connectDB();
//     const topics = await Topic.find({});
//     return NextResponse.json({topics})
// }

// export async function DELETE(request) {
//     const id = request.nextUrl.searchParams.get("id");
//     await connectDB;
//     await Topic.findByIdAndDelete(id);
//     return NextResponse.json({success:true, message: "Topic deleted"})
// }

