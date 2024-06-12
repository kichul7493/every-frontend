import Loader from "@/components/icons/Loader";
import React from "react";
import Button from "../button/Button";

interface SubmitButtonProps {
  children: React.ReactNode;
  isPending: boolean;
}

const SubmitButton = ({ children, isPending }: SubmitButtonProps) => {
  return <Button type="submit">{isPending ? <Loader /> : children}</Button>;
};

export default SubmitButton;
