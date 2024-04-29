import React from "react";

interface InputProps {
  placeholder: string;
  name: string;
}

const Input = ({ placeholder, name }: InputProps) => {
  return (
    <label className="block mb-6">
      <p className="ml-1 mb-1">{name}</p>
      <input
        className="w-full bg-black100 text-sm placeholder:text-gray100 p-4 rounded-lg"
        placeholder={placeholder}
      />
    </label>
  );
};

export default Input;
