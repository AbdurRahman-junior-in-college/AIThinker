"use server";

import { currentUser } from "@clerk/nextjs/server";
import axios from "axios";
import connectDB from "../config/db";
import User from "../models/user.model";
import { get_blogs, registere_user } from "./data_services";

export async function checkUser(userInfo) {
  // console.log(user);

  // if (!user) {
  //   return null;
  // }

  try {
    // await connectDB();
    // const loggedInUser = await User.findOne({ userId: user.id });

    // if (loggedInUser) {
    //   return loggedInUser;
    // }

    // const name = `${user.firstName} ${user.lastName}`;

    // const userInDB = await User.create({
    //   name,
    //   userId: user.id,
    //   image: user.imageUrl,
    //   email: user.emailAddresses[0].emailAddress,
    // });
    // return userInDB;

    await registere_user(userInfo);
    // console.log(res);
  } catch (error) {
    console.log(error);
  }
}

// export async function promptHandling(formData) {
//   const prompt = formData.get("prompt");
//   const type = formData.get("type");
//   const language = formData.get("language");
//   const enhancement = formData.get("enhancement");

//   let content = "";
//   if (type === "email") {
//     content = `Generate a professional email format for the following purpose :
//       ${prompt} in valid HTML
//       Include:
//       -Subject line <h1>
//       -Greeting <h5>
//       -Email body with bullet points if needed <p>
//       -Clear call to action <p>
//       -Signature <strong>
//       -<strong> for emphasis
//       Return the content in ${language} Lanuage and
//       Return the content as markdown format ,suitable for displaying in a rich editor.
//       `;
//   } else {
//     content = `Take the following idea and write a well-formatted ${type} in ${language} Language in valid HTML
//       Include:
//       - A title <h1> format
//       - Intro paragraph <p> format bold
//       - Main content with 1-2 paragraphs <p> semibold
//       - Bullet points or stackers if needed <ul>
//       - A conclusion in <p> bold
//       After every main section, create and suggest an image description as:
//       [IMAGE]: Description here
//       Idea:
//       ${prompt}
//       Return clear response that feels humans.
//       `;
//   }
//   try {
//     const res = await axios.post("http://localhost:3000/api/blog", {
//       text: content,
//     });

//     return res.data.content;
//     // setAiResponse(res.data.content);
//     console.log(res);
//   } catch (error) {
//     // setAiResponse("Error generating response. Try again!");
//     return "Error generating response. Try again!";
//     // setLoading(false);
//   }
// }

// export async function blogsGetting(userId) {
//   const {blogs} = await get_blogs(userId);
//   return blogs;
//   // blogs = res.blogs;
// }
