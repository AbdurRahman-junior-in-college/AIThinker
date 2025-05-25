import React, { Suspense } from "react";
import { get_blogs } from "../../../data_lib/data_services";
import BlogList from "../../_components/BlogList";
import Spinner from "../../_components/Spinner";

export const revalidate = 3600;

const Blogs = async ({ params }) => {
  const { userid } = await params;

  const { blogs } = await get_blogs(userid);
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <>
          {blogs.length > 0 ? (
            <BlogList blogs={blogs} />
          ) : (
            <h1 className="text-white">Blogs Not found.</h1>
          )}
        </>
      </Suspense>
    </div>
  );
};

export default Blogs;
