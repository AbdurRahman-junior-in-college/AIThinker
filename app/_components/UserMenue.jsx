
import { UserButton } from "@clerk/nextjs";
import React from "react";

const UserMenue = () => {
  return (
    <UserButton
      appearance={{
        elements: {
          avatarBox: "w-10 h-10",
        },
      }}
    />
  
  );
};

export default UserMenue;
