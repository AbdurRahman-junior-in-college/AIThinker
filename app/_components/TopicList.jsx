import Link from "next/link";
import React from "react";
import RemoveBtn from "./RemoveBtn";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics");

    if (!res.ok) {
      throw new Error("Something failed");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const TopicList = async () => {
  const { topics } = await getTopics();
  return (
    <>
      {topics.map((topic) => (
        <div
          className="flex flex-col gap-3 px-2 py-2 border border-black-200"
          key={topic._id}
        >
          <div className="flex justify-between">
            <h1 className="font-bold text-2xl">{topic.title}</h1>
            <div className="flex gap-2 items-center">
              <RemoveBtn id={topic._id} />
              <Link
                href={`/editTopic/${topic._id}`}
                className="font-bold text-red-400"
              >
                E
              </Link>
            </div>
          </div>
          <p>{topic.description}</p>
        </div>
      ))}
    </>
  );
};

export default TopicList;
