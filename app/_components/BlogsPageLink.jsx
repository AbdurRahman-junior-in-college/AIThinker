"use client";

import React from "react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

const BlogsPageLink = () => {
  const { user } = useUser();
  return (
    <Link
      href={`/blogs/${user?.id}`}
      className="px-4 py-2 bg-white text-gray-700 rounded"
    >
      Projects
    </Link>
  );
};

export default BlogsPageLink;
