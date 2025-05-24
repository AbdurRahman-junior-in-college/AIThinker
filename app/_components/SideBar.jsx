import React from "react";
import Image from "next/image";
import menu from "../../public/menu.svg";
import close from "../../public/cross_icon.png";
import user from "../../public/user.svg";
import expand_arrow from "../../public/arrow_icon.svg";
import ChatLabel from "./ChatLabel";
import { useClerk, UserButton } from "@clerk/nextjs";
import { useAppContext } from "../../context/AppContext";

const SideBar = ({ expand, setExpand, showSidebar }) => {
  const { openSignIn } = useClerk();
  const {user} = useAppContext();


  return (
    // Sidebar Layout

    <div
      className={`${
        expand ? "w-65" : "w-15"
      } flex-col justify-between bg-[#212327] pt-7 transition-all
      ${showSidebar ? "flex" : "hidden"}
      hidden md:flex `}
    >
      {/* Upper side */}
      <div className={`flex flex-col `}>
        <div
          className={`flex ${
            expand ? "flex-row gap-10" : "flex-col items-center gap-8"
          } p-5`}
        >
          <h2
            className={`${
              expand ? "block " : "text-sm"
            } text-white text-2xl font-bold`}
          >
            {expand ? "Deep Seek" : "Deep"}
          </h2>

          <div
            className=" group relative flex items-center justify-center hover:bg-gray-500/20 transition-all duration-300 h-9 w-9 aspect-square rounded-lg cursor-pointer"
            onClick={() => setExpand((exp) => !exp)}
          >
            {/* Menue */}
            <Image src={menu} alt="narrow" className="md:hidden w-8" />

            <Image
              src={expand ? close : menu}
              alt=""
              className="hidden md:block w-7"
            />

            <div
              className={`w-max absolute ${
                expand ? "left-1/2 top-11 -translate-x-1/2" : " left-0 -top-11"
              } bg-black text-white px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100`}
            >
              {expand ? "Close sidebar" : "Open sidebar"}

              <div
                className={`h-3 w-3 bg-black rotate-45 absolute ${
                  expand
                    ? "left-1/2 -top-1.5 -translate-x-1/2"
                    : "left-4 -bottom-1.5"
                }`}
              ></div>
            </div>
          </div>
        </div>

        {/* New Chat */}
        <div className="py-1 px-5 mt-5">
          <div
            className={`${
              expand && "px-3 py-2 rounded-lg text-white bg-primary"
            } flex items-center gap-8 ${
              !expand && "group relative"
            } cursor-pointer `}
          >
            <Image src={user} alt="" className="" />
            {expand && <p>New Chat</p>}

            <div className="absolute w-max -top-13 px-3 py-2 bg-black text-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100">
              {!expand && "New Chat"}
              <div className="h-3 w-3 absolute rotate-45 bg-black right-1 left-1"></div>
            </div>
          </div>
        </div>

        {/* Recents */}

        {expand && (
          <div className="mt-5 p-5 text-white">
            <p>Recents</p>
            <ChatLabel />
          </div>
        )}
      </div>

      {/* Lower side */}
      <div className="mb-5 flex flex-col px-5 gap-3">
        {/* App */}

        <div
          className={`px-1 py-2 ${
            expand
              ? "border border-primary rounded-lg flex gap-2 text-white font-bold"
              : "group relative"
          } cursor-pointer 
        
        `}
        >
          <Image src={expand_arrow} alt="" />
          {expand && (
            <p>
              Get App{" "}
              <span className="px-0.5 py-0.5 bg-primary text-xs rounded-lg">
                New
              </span>
            </p>
          )}

          <div className="absolute w-max -top-11 bg-black px-2 py-2 text-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100">
            {!expand && "Get App"}

            <div className="h-3 w-3 rotate-45 absolute bg-black left-1"></div>
          </div>
        </div>

        <div
          onClick={user ? null : openSignIn}
          className="flex items-center justify-between text-white px-2 py-2 hover:bg-gray-500 rounded cursor-pointer"
        >
          {user ? <UserButton /> :
          
          <Image src={user} alt="" className="w-6" />
          }
          {expand && "Profile"}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
