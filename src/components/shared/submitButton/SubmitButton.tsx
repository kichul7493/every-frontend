import EmailIcon from "@/components/icons/EmailIcon";
import Loader from "@/components/icons/Loader";
import React from "react";
import { useFormStatus } from "react-dom";

interface SubmitButtonProps {
  children?: React.ReactNode;
}

const SubmitButton = ({ children }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button className="w-full h-12 bg-main flex items-center justify-center gap-2 rounded-xl border-[1px] border-opacity-60 border-black">
      {pending ? <Loader /> : children}
    </button>
  );
};

export default SubmitButton;
