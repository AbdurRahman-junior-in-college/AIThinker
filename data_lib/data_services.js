import axios from "axios";

export const store_blog = async (content, userId) => {
  try {
    const { data } = await axios.post(
      "http://localhost:3000/api/blogs",
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
    throw new Error("Something error while updating blog");
  }
};

export const registere_user = async (userInfo) => {
  try {
    await axios.post(`http://localhost:3000/api/user`, userInfo, {
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
      "http://localhost:3000/api/sample",
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
    const res = await fetch(`http://localhost:3000/api/sample`, {
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
      `http://localhost:3000/api/user/${userId}`
    );

    return data;
  } catch (error) {
    throw new Error("Something error");
  }
};
