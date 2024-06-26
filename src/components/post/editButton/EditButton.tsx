"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface EditButtonProps {
  onClick: () => void;
}

const EditButton = ({ onClick }: EditButtonProps) => {
  return (
    <button onClick={onClick}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_120_41)">
          <path
            d="M3.5 20.125V24.5H7.875L20.7783 11.5967L16.4033 7.22165L3.5 20.125ZM24.1617 8.21332C24.6167 7.75832 24.6167 7.02332 24.1617 6.56832L21.4317 3.83832C20.9767 3.38332 20.2417 3.38332 19.7867 3.83832L17.6517 5.97332L22.0267 10.3483L24.1617 8.21332Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_120_41">
            <rect width="28" height="28" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
};

export default EditButton;
