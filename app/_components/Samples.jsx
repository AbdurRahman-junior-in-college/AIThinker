<<<<<<< HEAD
import React, { Suspense } from "react";
// import { get_samples } from "../../data_lib/data_services";
=======
import React from "react";
>>>>>>> f15451e (Updated homepage logic and fixed MongoDB error)
import SamplesList from "./SamplesList";

// export const revalidate = 3600;

// This component will show some samples of generating output
<<<<<<< HEAD
const Samples =  ({samples}) => {
  // const { blogs } = await get_blogs();
  // const { samples } = await get_samples();
=======
const Samples = ({ samples }) => {
  // const { blogs } = await get_blogs();
  // const { samples } = await get_samples();
  // const samples = get_smaples_function();
  // console.log(samples)
>>>>>>> f15451e (Updated homepage logic and fixed MongoDB error)

  return <SamplesList samples={samples} />;
};

export default Samples;
