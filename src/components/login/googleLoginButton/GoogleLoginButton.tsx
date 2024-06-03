import GoogleIcon from "@/components/icons/GoogleIcon";
import React from "react";

const GoogleLoginButton = () => {
  return (
    <button
      type="button"
      className="w-full bg-black100 flex items-center justify-center gap-2 py-3 rounded-xl border-[1px] border-opacity-60 border-black"
    >
      <GoogleIcon />
      <p className="text-sm font-semibold">구글로 로그인</p>
    </button>
  );
};

export default GoogleLoginButton;
