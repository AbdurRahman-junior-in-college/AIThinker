// import { headers } from "next/headers";
import { NextResponse } from "next/server";
// import { Webhook } from "svix";
import connectDB from "../../../config/db.js";
// import { User } from "../../../models/user.model.js";

 export async function POST(req) {
//   const wh = new Webhook(process.env.SIGNIN_SECRET);
//   const headerPayLoad = await headers();

//   const svixHeaders = {
//     "svix-id": headerPayLoad.get("svix-id"),
//     "svix-timestamp": headerPayLoad.get("svix-timestamp"),
//     "svix-signature": headerPayLoad.get("svix-signature"),
//   };

//   const payload = await req.json();
//   const body = JSON.stringify(payload);
//   const { data, type } = wh.verify(body, svixHeaders);


  
//   const userData = {
//     _id: data.id,
//     email: data.email.addresses[0].email_address,
//     name: `${data.first_name} ${data.last_name}`,
//     image: data.image_url || "",
//   };

  await connectDB();

//   switch (type) {
//     case "user.created":
//       await User.create(userData);
//       break;
//     case "user.updated":
//       await User.findByIdAndUpdate(data.id, userData);
//       break;
//     case "user.deleted":
//       await User.findByIdAndDelete(data.id);
//       break;
//     default:
//       break;
//   }

  return NextResponse.json({ message: "Event Recieved" });
}


//1. connect the cloud mongodb
//2.deploy the project on vercel
//3.set the settings on clerk

