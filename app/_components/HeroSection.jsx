import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-white text-5xl font-bold text-center px-8 py-4 bg-gray-700">
        Write Smarter. Not Harder
      </h1>
      <p className="text-gray-400 text-xl font-bold text-center">
        Generate and Optimise content with AI that feels human.
      </p>
      <div className="flex items-center justify-center mt-8">
        <Link
          href="/blog"
          className="border-gray-400 rounded px-6 py-3 bg-white cursor-pointer"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
