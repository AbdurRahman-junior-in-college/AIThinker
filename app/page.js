import React, { Suspense } from "react";
import HeroSection from "./_components/HeroSection";
import Samples from "./_components/Samples";
import Spinner from "./_components/Spinner";
import { get_samples } from "../data_lib/data_services";

export default async function Home() {
  // const user = await currentUser()
  // console.log(user)
  const { samples } = await get_samples();

  return (
    <div className="flex flex-col gap-5 mt-4">
      <HeroSection />

      <div className="flex flex-col gap-3">
        <h3 className="text-gray-300 font-semibold text-3xl">
          See Our Samples
        </h3>

        {samples.length > 0 ? (
          <Suspense fallback={<Spinner />}>
            <Samples samples={samples} />
          </Suspense>
        ) : (
          <h1 className="text-white">Samples Not Found.</h1>
        )}
      </div>
    </div>
  );
}

