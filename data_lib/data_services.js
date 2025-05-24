import axios from "axios";
// import User from "../models/user.model.js";

// export async function getCabins() {
//   try {
//     await connectDB();
//     const cabins = await Cabin.find({});
//     // return NextResponse.json({ success: true, cabins });
//     return cabins
//   } catch (error) {
//     return NextResponse.json({ success: false, message: "Something wrong" });
//   }
// }

export const store_blog = async (content, userId) => {
  try {
    const { data, error } = await axios.post(
      "http://localhost:3000/api/blogs",
      {
        content,
        userId,
      },
      { headers: { "Content-Type": "application/json" } }
    );

    console.log(data);

    if (error) {
      throw new Error("Something error", error?.message);
    }

    return data;
  } catch (error) {
    throw new Error("Something error", error?.message);
  }
};

export const get_blogs = async (userid) => {
  try {
    const res = await fetch(`http://localhost:3000/api/blogs/${userid}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("error");
    }

    return res.json();
  } catch (error) {
    throw new Error("error");
  }
  // try {
  //   const { data } = await axios.get(
  //     `http://localhost:3000/api/blogs/${userid}`
  //   );

  //   return data;
  // } catch (error) {
  //   throw new Error("Something error", error?.message);
  // }
};

export const update_blog = async (content, id, userId) => {
  try {
    const { data } = await axios.put(`http://localhost:3000/api/blogs/${id}`, {
      content,
      userId,
      headers: { "Content-Type": "application/json" },
    });

    return data;
  } catch (error) {
    throw new Error("Something error");
  }
};

export const registere_user = async (userInfo) => {
  try {
    const { data } = await axios.post(
      `http://localhost:3000/api/user`,
      userInfo,
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    // return data;
  } catch (error) {
    throw new Error("Something error");
  }
};

export const store_sample = async (content) => {
  try {
    const { data, error } = await axios.post(
      "http://localhost:3000/api/sample",
      {
        content,
      },
      { headers: { "Content-Type": "application/json" } }
    );

    if (error) {
      throw new Error("Something error", error?.message);
    }

    return data;
  } catch (error) {
    throw new Error("Something error", error?.message);
  }
};

export const get_samples = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/sample`, {
      cache: "no-store",
    });

    return res.json();
  } catch (error) {
    throw new Error("Something error", error?.message);
  }
};

export const get_user = async (userId) => {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/user/${userId}`
    );

    return data;
  } catch (error) {
    throw new Error("Something error", error?.message);
  }
};
