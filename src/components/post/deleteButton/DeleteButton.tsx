"use client";

import deletePost from "@/actions/posts/deletePost";
import React from "react";
import { useFormState } from "react-dom";

export const initialState: {
  fieldErrors: any;
  message?: string;
} = {
  fieldErrors: {},
  message: "",
};

interface DeleteButtonProps {
  slug: string;
}

const DeleteButton = ({ slug }: DeleteButtonProps) => {
  const [state, formAction] = useFormState(deletePost, initialState);

  return (
    <form className="h-7" action={formAction}>
      <input type="hidden" name="slug" value={slug} />
      <button>
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_120_44)">
            <path
              d="M6.99999 22.1667C6.99999 23.45 8.05 24.5 9.33333 24.5H18.6667C19.95 24.5 21 23.45 21 22.1667V8.16667H6.99999V22.1667ZM22.1667 4.66667H18.0833L16.9167 3.5H11.0833L9.91666 4.66667H5.83333V7H22.1667V4.66667Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_120_44">
              <rect width="28" height="28" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </form>
  );
};

export default DeleteButton;
