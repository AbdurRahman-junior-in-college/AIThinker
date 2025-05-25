"use client";

import { useUser } from "@clerk/nextjs";
import React from "react";
// import { checkUser } from "../../data_lib/actions";
import HTMLPreview from "./HTMLPreview";
import Modal from "./Modal";

const SampleCard = ({ content }) => {
  const { user } = useUser();

  // if (!user) {
  //   return null;
  // }

  const id = user?.id;
  const name = user?.fullName;
  const image = user?.imageUrl;
  const email = user?.emailAddresses[0]?.emailAddress;

  const userInfo = {
    id,
    name,
    image,
    email,
  };

  // console.log(userInfo);
  // send this data to the api and database

  return (
    <div className="bg-gray-700 text-gray-200 px-4 py-2 rounded">
      <h2 className="px-4 py-2 bg-gray-800 rounded">{content?.title}</h2>

      {/* <User userInfo={userInfo} /> */}
      <Modal>
        <Modal.Open opens={"sample"}>
          <div className="flex justify-end mt-4">
            <button
{/*               onClick={() => checkUser(userInfo)} */}
              className="px-3 py-2 rounded bg-indigo-700 text-white cursor-pointer"
            >
              View
            </button>
          </div>
        </Modal.Open>

        <Modal.Window name={"sample"}>
          <HTMLPreview html={content?.description} />
        </Modal.Window>
      </Modal>
    </div>
  );
};

export default SampleCard;
