import React, { Suspense } from "react";
import { get_samples } from "../../data_lib/data_services";
import SamplesList from "./SamplesList";
import SpinnerMini from "./SpinnerMini";

export const revalidate = 3600;

// This component will show some samples of generating output
const Samples = async () => {
  // const { blogs } = await get_blogs();
  const { samples } = await get_samples();

  return (
      <SamplesList samples={samples} />
  );
};

export default Samples;
