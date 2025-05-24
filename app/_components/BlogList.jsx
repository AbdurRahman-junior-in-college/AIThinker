"use client";

import React from "react";
import Blog from "../_components/Blog";

const BlogList = ({ blogs }) => {
  // const blogs = await get_blogs(userid);

  // if (!blogs.length) return <h1>No Blogs</h1>;

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
      {blogs?.map((blog) => (
        <Blog content={blog} key={blog._id} />
      ))}
    </div>
  );
};

export default BlogList;
