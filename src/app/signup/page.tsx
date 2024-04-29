"use client";

import Input from "@/components/shared/input/Input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent } from "react";

const Page = () => {
  const router = useRouter();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push("/signup/verify-code");
  };
  return (
    <>
      <h1 className="text-4xl font-semibold text-center mb-14">회원가입</h1>
      <form onSubmit={onSubmit}>
        <Input name="이름" placeholder="이름을 입력해주세요." />
        <Input name="이메일" placeholder="이메일을 입력해주세요." />
        <Input name="비밀번호" placeholder="비밀번호를 입력해주세요." />
        <Input
          name="비밀번호 확인"
          placeholder="비밀번호를 다시 입력해주세요."
        />
        <button className="w-full py-3 text-sm font-semibold bg-main rounded-xl mb-2">
          회원가입
        </button>
        <Link className="flex justify-center gap-2" href="/login">
          <span className="text-xs">이미 회원이신가요?</span>
          <span className="text-xs text-main">로그인</span>
        </Link>
      </form>
    </>
  );
};

export default Page;
