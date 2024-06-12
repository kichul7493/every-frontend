import Loader from "@/components/icons/Loader";
import React from "react";
import { useFormStatus } from "react-dom";
import Button from "../button/Button";

interface SubmitButtonProps {
  children?: React.ReactNode;
}

const SubmitButton = ({ children }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return <Button type="submit">{pending ? <Loader /> : children}</Button>;
};

export default SubmitButton;
