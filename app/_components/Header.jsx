import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import UserMenue from "./UserMenue";
// import { get_user } from "../../data_lib/data_services";
import BlogsPageLink from "./BlogsPageLink";
import Link from "next/link";

// import { checkUser } from "../../data_lib/actions";

const Header =  () => {
  // const res = await checkUser();
  // console.log("res")

  // const {user} = await get_user("user_2wyortXN3mydmjIBN9gCbxa59gm");

  return (
    <div className="px-4 py-2 bg-gray-900 text-white flex justify-between items-center">
      {/* Left Side */}
      {/* <Image src="/"/> */}
      <h1 className="font-bold text-3xl">AIThinker</h1>

      <div className="flex items-center gap-4">
        <SignOutButton>
          <SignInButton fallbackRedirectUrl="/blog">
            <button className="px-5 py-2 rounded bg-gray-100 text-gray-700">
              Login
            </button>
          </SignInButton>
        </SignOutButton>

        <SignInButton>
          <UserMenue />
        </SignInButton>
        {/* <button>Sign in</button> */}
        <Link
          href={"/blog"}
          className="px-4 py-2 bg-white text-gray-700 rounded"
        >
          Create Blog
        </Link>
        {/* <Link href={`/blogs/${user?.userId}`}>Projects</Link> */}
        <BlogsPageLink />
      </div>
    </div>
  );
};

export default Header;
