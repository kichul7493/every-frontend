"use client";

import verifyEmail from "@/actions/users/verifyEmail";
import EmailHiddenInput from "@/components/shared/emailHiddenInput/EmailHiddenInput";
import Input from "@/components/shared/input/Input";
import SubmitButton from "@/components/shared/submitButton/SubmitButton";
import Title from "@/components/shared/typography/Title";
import React, { Suspense } from "react";
import { useFormState, useFormStatus } from "react-dom";

const initialState: {
  fieldErrors: {
    code?: string[];
  };
  message?: string;
} = {
  fieldErrors: {},
  message: "",
};

const Page = () => {
  const [state, formAction] = useFormState(verifyEmail, initialState);
  const { pending } = useFormStatus();

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
            errors={state?.fieldErrors?.code}
          />
          <Suspense fallback={<div></div>}>
            <EmailHiddenInput />
          </Suspense>
        </div>
        <SubmitButton isPending={pending}>이메일 인증</SubmitButton>
      </form>
    </>
  );
};

export default Page;
