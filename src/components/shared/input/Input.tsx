import React, { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";

interface InputProps {
  errors?: string[];
}

const Input = ({
  errors,
  name,
  title,
  ...rest
}: InputProps & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <label className="block mb-6 relative">
      <p className="ml-1 mb-1">{title}</p>
      <input
        className="w-full bg-black100 text-sm placeholder:text-gray100 p-4 rounded-lg"
        {...rest}
        name={name}
      />
      {errors && (
        <span className="absolute left-1 bottom-[-18px] text-xs text-red-500">
          {errors[0]}
        </span>
      )}
    </label>
  );
};

export default Input;
