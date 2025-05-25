import axios from "axios";

export const store_blog = async (content, userId) => {
  try {
    const { data } = await axios.post(
      "https://ai-thinker-topaz.vercel.app/api/blogs",
      {
        content,
        userId,
      },
      { headers: { "Content-Type": "application/json" } }
    );

    return data;
  } catch (error) {
    throw new Error("Something error");
  }
};

export const get_blogs = async (userid) => {
  try {
    const res = await fetch(`https://ai-thinker-topaz.vercel.app/api/blogs/${userid}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("error");
    }

    return res.json();
  } catch (error) {
    throw new Error("error");
  }
};

export const update_blog = async (content, id, userId) => {
  try {
    const { data } = await axios.put(`https://ai-thinker-topaz.vercel.app/api/blogs/${id}`, {
      content,
      userId,
      headers: { "Content-Type": "application/json" },
    });

    return data;
  } catch (error) {
    throw new Error("Something error while updating blog");
  }
};

export const registere_user = async (userInfo) => {
  try {
    await axios.post(`https://ai-thinker-topaz.vercel.app/api/user`, userInfo, {
      headers: { "Content-Type": "application/json" },
    });

    // return data;
  } catch (error) {
    throw new Error("Something error");
  }
};

export const store_sample = async (content) => {
  try {
    const { data } = await axios.post(
      "https://ai-thinker-topaz.vercel.app/api/sample",
      {
        content,
      },
      { headers: { "Content-Type": "application/json" } }
    );

    if (!data) {
      throw new Error("Something error");
    }

    return data;
  } catch (error) {
    throw new Error("Something error");
  }
};

export const get_samples = async () => {
  try {
    const res = await fetch(`https://ai-thinker-topaz.vercel.app/api/sample`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Something error while getting samples");
    }

    return res.json();
  } catch (error) {
    throw new Error("Something error");
  }
};

export const get_user = async (userId) => {
  try {
    const { data } = await axios.get(
      `https://ai-thinker-topaz.vercel.app/api/user/${userId}`
    );

    return data;
  } catch (error) {
    throw new Error("Something error");
  }
};
