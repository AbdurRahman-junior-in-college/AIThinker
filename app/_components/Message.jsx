import Image from "next/image";
import React from "react";
// import user from "../../public/user.svg";

const Message = () => {
  return (
    // <div className="flex flex-col items-center w-full max-w-3xl text-sm">
    //   <div
    //     className={`flex flex-col w-full mb-8 ${
    //       role === "user" && "items-end"
    //     }`}
    //   >
    //     <div
    //       className={`group relative flex max-w-2xl py-3 rounded-xl ${
    //         role === "user" ? "bg-[#414158] px-5" : "gap-3"
    //       }`}
    //     >
    //       <div
    //         className={`opacity-0 group-hover:opacity-100 absolute ${
    //           role === "user" ? "-left-16 top-2.5" : "left-9 -bottom-6"
    //         } transition-all`}
    //       >
    //         <div className="flex items-center gap-2 opacity-70">
    //           {role === "user" ? (
    //             <>
    //               <Image src={user} alt="" className="w-6" /> {/*copy */}
    //               <Image src={user} alt="" className="w-6" />{/*pencil */}
    //             </>
    //           ) : (
    //             <>
    //               <Image src={user} alt="" className="w-6" /> {/*copy */}
    //               <Image src={user} alt="" className="w-6" />{/*pencil */}
    //               <Image src={user} alt="" className="w-6" />{/*like */}
    //               <Image src={user} alt="" className="w-6" />{/*dislike */}
    //             </>
    //           )}
    //         </div>
    //       </div>

    //       {
    //         user === 'user' ? (
    //         <>
    //         <span className="text-white/90">{content}</span>
            
    //         </>
    //         ) 
    //         :
    //          (<>
    //          {role !== 'user' && <Image src={user} alt="" className="h-9 w-9 p-1 border border-white/15 rounded-full" />} {/**Logo */}
    //          <div className="space-y-4 w-full overflow-scroll text-white/90">
    //             {content}
    //          </div>
    //          </> )
    //       }
    //     </div>
    //   </div>
    // </div>
    <h1>Message</h1>
  );
};

export default Message;
