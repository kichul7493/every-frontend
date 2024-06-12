import KakaoIcon from "@/components/icons/KakaoIcon";
import Button from "@/components/shared/button/Button";
import React from "react";

const KaKaoLoginButton = () => {
  return (
    <Button variant="outlined">
      <KakaoIcon />
      <p className="text-sm font-semibold">카카오로 로그인</p>
    </Button>
  );
};

export default KaKaoLoginButton;
