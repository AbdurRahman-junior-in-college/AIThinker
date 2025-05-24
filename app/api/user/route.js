import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import connectDB from "../../../config/db";
import User from "../../../models/user.model";

// export async function checkUser() {
//   const user = await currentUser();

//   if (!user) {
//     return null;
//   }

//   try {
//     await connectDB();
//     const loggedInUser = await User.findOne({ userId: user.id });

//     if (loggedInUser) {
//       return loggedInUser;
//     }

//     const name = `${user.firstName} ${user.lastName}`;

//     const userInDB = await User.create({
//       name,
//       userId: user.id,
//       image: user.imageUrl,
//       email: user.emailAddresses[0].emailAddress,
//     });
//     return userInDB;
//   } catch (error) {
//     console.log(error);
//   }
// }

export async function POST(request) {
  const { email, id, name, image } = await request.json();

  if (!email || !id || !name || !image) {
    return NextResponse.json({success:false, message: "Details are missing"});
  }

  try {
    await connectDB();
    const loggedInUser = await User.findOne({ userId: id });

    if (loggedInUser) {
      return NextResponse.json({
        message: "User with these credentials are exist",
      });
    }

    // const name = `${user.firstName} ${user.lastName}`;

    const user = await User.create({
      name,
      userId: id,
      image,
      email,
    });
    return NextResponse.json({
      success: true,
      message: "User Stored Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: `Internal Error while storing user`,
    });
  }
}


