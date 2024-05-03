"use client";

import { useSearchParams } from "next/navigation";
import Input from "../input/Input";

const EmailHiddenInput = () => {
  const searchParams = useSearchParams();

  return (
    <Input
      name="email"
      required
      type="email"
      defaultValue={searchParams.get("email") || ""}
      className="hidden"
      readOnly
    />
  );
};

export default EmailHiddenInput;
