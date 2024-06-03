import KakaoIcon from "@/components/icons/KakaoIcon";
import React from "react";

const KaKaoLoginButton = () => {
  return (
    <button
      type="button"
      className="w-full bg-black100 flex items-center justify-center gap-2 py-3 rounded-xl border-[1px] border-opacity-60 border-black"
    >
      <KakaoIcon />
      <p className="text-sm font-semibold">카카오로 로그인</p>
    </button>
  );
};

export default KaKaoLoginButton;
