import EmailIcon from "@/components/icons/EmailIcon";
import GoogleIcon from "@/components/icons/GoogleIcon";
import KakaoIcon from "@/components/icons/KakaoIcon";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-center text-4xl mb-14">로그인</h1>
      <label className="block mb-7">
        <p className="ml-1 mb-1">이메일</p>
        <input
          className="w-full bg-black100 text-sm placeholder:text-gray100 p-4 rounded-lg"
          placeholder="이메일을 입력해주세요."
        />
      </label>
      <label className="block mb-6">
        <p className="ml-1 mb-1">비밀번호</p>
        <input
          className="w-full bg-black100 text-sm placeholder:text-gray100 p-4 rounded-lg"
          placeholder="비밀번호를 입력해주세요."
        />
      </label>
      <div className="flex justify-between mb-20">
        <div className="flex items-center gap-2">
          <label className="w-[18px] h-[18px] bg-gray300 rounded block">
            <input type="checkbox" className="hidden" />
          </label>
          <p className="text-xm text-gray100">이메일 기억하기</p>
        </div>
        <Link className="text-sm" href="/reset-password">
          비밀번호 찾기
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <button className="w-full bg-main flex items-center justify-center gap-2 py-3 rounded-xl border-[1px] border-opacity-60 border-black">
          <EmailIcon />
          <p className="text-sm font-semibold">이메일로 로그인</p>
        </button>
        <button className="w-full bg-black100 flex items-center justify-center gap-2 py-3 rounded-xl border-[1px] border-opacity-60 border-black">
          <KakaoIcon />
          <p className="text-sm font-semibold">카카오로 로그인</p>
        </button>
        <button className="w-full bg-black100 flex items-center justify-center gap-2 py-3 rounded-xl border-[1px] border-opacity-60 border-black">
          <GoogleIcon />
          <p className="text-sm font-semibold">구글로 로그인</p>
        </button>
        <Link className="text-xs flex gap-2 justify-center" href="signup">
          <span>아직 회원이 아니신가요?</span>{" "}
          <span className="text-main">회원가입</span>
        </Link>
      </div>
    </div>
  );
};

export default page;
