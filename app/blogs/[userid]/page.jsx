import React, { Suspense } from "react";
import { get_blogs } from "../../../data_lib/data_services";
import BlogList from "../../_components/BlogList";
import Spinner from "../../_components/Spinner";

export const revalidate = 3600;

const Blogs = async ({ params }) => {
  const { userid } = await params;

  const { blogs } = await get_blogs(userid);
  // console.log(blogs)

  //   export async function getServerSideProps(context) {
  //     const {id} = context.params;
  //     const res = await fetch(`http://localhost:3000/api/blogs/${id}`);
  //     return res.json();
  // }

  //   // console.log(id)
  //   // const { user } = useUser();
  //   // const user = await currentUser();
  //   // // const user = await current
  //   // console.log(user);
  //   // if (!user) {
  //   //   return null;
  //   // }
  //   // const userId = user?.id;

  //   const hasFetched = useRef(false);
  //   let blogs = [];

  //   useEffect(() => {
  //     if (hasFetched.current) return;
  //     hasFetched.current = true;

  //     async function blogsGetting() {
  //       const res = await get_blogs(userid);
  //       blogs = res.blogs;
  //     }
  //   blogsGetting();

  //   // const res = blogsGetting();
  //   // blogs = res;
  //   // blogsGetting();
  //   }, []);

  //   // const {blogs} = await get_blogs(userid);
  //   console.log(blogs)
  // // let blogs = [];
  //   if (!blogs) {
  //     return (
  //       <div className="text-3xl text-amber-50">
  //         <h1>No Blogs</h1>
  //       </div>
  //     );
  //   }
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <BlogList blogs={blogs} />
      </Suspense>
    </div>
  );
};

export default Blogs;
