import React from "react";

const Spinner = () => {
  return (
    <div className="grid items-center justify-center mt-8">
      <div className="animate-spin h-10 w-10 rounded-full border-6 border-t-transparent border-indigo-600"></div>
    </div>
  );
};

export default Spinner;
