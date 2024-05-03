"use client";

import verifyEmail from "@/actions/users/verifyEmail";
import Input from "@/components/shared/input/Input";
import Title from "@/components/shared/typography/Title";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
import { useFormState } from "react-dom";

const initialState: {
  fieldErrors: {
    code?: string[];
  };
  message?: string;
} = {
  fieldErrors: {},
  message: "",
};

function EmailInput() {
  const searchParams = useSearchParams();

  return (
    <Input
      title="이메일"
      name="email"
      required
      type="email"
      defaultValue={searchParams.get("email") || ""}
      className="hidden"
      readOnly
    />
  );
}

const Page = () => {
  const [state, formAction] = useFormState(verifyEmail, initialState);

  return (
    <>
      <Title>인증코드 입력</Title>
      <div className="mb-3 px-1">
        <p className="text-sm">발송된 이메일에 적힌 인증코드를 입력해주세요.</p>
        <button className="text-sm text-main">인증코드 다시 보내기</button>
      </div>
      <form action={formAction}>
        <div className="mb-[286px]">
          <Input
            title="인증코드"
            name="code"
            required
            maxLength={6}
            placeholder="인증코드를 입력해주세요."
          />
          <Suspense fallback={<div></div>}>
            <EmailInput />
          </Suspense>
        </div>
        <button className="w-full py-3 bg-main rounded-xl text-sm">
          이메일 인증
        </button>
      </form>
    </>
  );
};

export default Page;
