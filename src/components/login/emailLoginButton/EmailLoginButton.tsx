import EmailIcon from "@/components/icons/EmailIcon";
import SubmitButton from "@/components/shared/submitButton/SubmitButton";
import React from "react";

const EmailLoginButton = () => {
  return (
    <SubmitButton>
      <EmailIcon />
      <p className="text-sm font-semibold">이메일로 로그인</p>
    </SubmitButton>
  );
};

export default EmailLoginButton;
