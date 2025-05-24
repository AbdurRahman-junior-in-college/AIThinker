import React from "react";

const Button = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={`${className} px-6 py-2 rounded cursor-pointer`}
    >
      {children}
    </button>
  );
};

export default Button;
