import GoogleIcon from "@/components/icons/GoogleIcon";
import Button from "@/components/shared/button/Button";
import React from "react";

const GoogleLoginButton = () => {
  return (
    <Button type="button" variant="outlined">
      <GoogleIcon />
      <p className="text-sm font-semibold">구글로 로그인</p>
    </Button>
  );
};

export default GoogleLoginButton;
