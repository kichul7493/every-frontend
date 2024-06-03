import React from "react";

const Loader = () => {
  return (
    <svg
      width="29"
      height="30"
      viewBox="0 0 29 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-spin"
      data-testid="loader"
    >
      <circle cx="14" cy="15" r="12" stroke="#5B39B8" strokeWidth="4" />
      <path
        d="M14 2.75C20.7655 2.75 26.25 8.23451 26.25 15C26.25 21.7655 20.7655 27.25 14 27.25C10.3413 27.25 7.05714 25.646 4.8125 23.1028"
        stroke="white"
        strokeWidth="4"
      />
    </svg>
  );
};

export default Loader;
