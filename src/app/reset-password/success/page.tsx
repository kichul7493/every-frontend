import Title from "@/components/shared/typography/Title";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <Title>변경 완료!</Title>
      <div className="mb-[376px]">
        <p className="text-sm leading-6">비밀번호 변경이 완료되었습니다.</p>
        <p className="text-sm leading-6">
          아래 버튼을 클릭하여 로그인을 진행해주세요.
        </p>
      </div>
      <Link
        href="/login"
        className="w-full block text-center bg-main py-3 rounded-xl text-sm font-semibold"
      >
        로그인
      </Link>
    </>
  );
};

export default page;
