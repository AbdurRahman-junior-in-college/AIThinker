import React from "react";
import SamplesList from "./SamplesList";

// export const revalidate = 3600;

// This component will show some samples of generating output
const Samples = ({ samples }) => {
  // const { blogs } = await get_blogs();
  // const { samples } = await get_samples();
  // const samples = get_smaples_function();
  // console.log(samples)

  return <SamplesList samples={samples} />;
};

export default Samples;
