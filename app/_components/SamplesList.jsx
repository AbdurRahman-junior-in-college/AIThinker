"use client";

import React from "react";
import { get_samples } from "../../data_lib/data_services";
import SampleCard from "./SampleCard";

const SamplesList = ({ samples }) => {
  //   const { samples } = await get_samples();
//   if (!samples) {
//     return <h1>Sample Not Found.</h1>;
//   }
  return (
    <div className="grid grid-cols md:grid-cols-3 sm:grid-cols-2 gap-3">
      {samples.map((blog) => (
        <SampleCard content={blog} key={blog._id} />
      ))}
    </div>
  );
};

export default SamplesList;
