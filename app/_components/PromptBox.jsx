import React from "react";
// import user from "../../public/user.svg";
// import Image from "next/image";
// import expand_arrow from "../../public/arrow_icon.svg";
// import close from "../../public/cross_icon.png";

const PromptBox = () => {
  return (
    // <form
    //   className={`w-full ${
    //     false ? "max-w-3xl" : "max-w-2xl"
    //   } bg-[#404045] p-4 rounded-3xl mt-4 transition-all
    // `}
    // >
    //   <textarea
    //     className="outline-none bg-trasnparent w-full  text-white resize-none break-words overflow-hidden"
    //     rows={2}
    //     required
    //     placeholder="Message Deepseek"
    //     value={message}
    //     onChange={(e) => setMessage(e.target.value)}
    //   />

    //   <div className="flex items-center justify-between">
    //     {/* Right side of promptBox */}
    //     <div className="flex gap-3 items-center">
    //       <div className="p-2 border border-gray-200 rounded-xl flex items-center gap-2 text-white text-xs">
    //         <Image src={user} alt="" className="w-3" />
    //         <p>DeepThink (R1)</p>
    //       </div>
    //       <div className="p-2 border border-gray-200 rounded-xl flex items-center gap-2 text-white text-xs">
    //         <Image src={user} alt="" className="w-3" />
    //         <p>Search</p>
    //       </div>
    //     </div>

    //     {/* Left side of promptBox */}

    //     <div className="flex gap-2">
    //       <Image
    //         src={close}
    //         alt=""
    //         className="w-5 cursor-pointer"
    //         onClick={() => setMessage("")}
    //       />
    //       <button
    //         className={`outline-none border-none ${
    //           message ? "bg-primary" : "bg-[#71717a]"
    //         } rounded-full p-2 cursor-pointer`}
    //       >
    //         <Image src={expand_arrow} alt="" className="w-5" />
    //       </button>
    //     </div>
    //   </div>
    // </form>
    <h1>Prompt</h1>
  );
};

export default PromptBox;
