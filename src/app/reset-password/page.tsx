"use client";

import sendVerifyCode from "@/actions/users/sendVerifyCode";
import Input from "@/components/shared/input/Input";
import SubmitButton from "@/components/shared/submitButton/SubmitButton";
import Title from "@/components/shared/typography/Title";
import React from "react";
import { useFormState } from "react-dom";

const initialState: {
  fieldErrors: {
    email?: string[];
  };
  message?: string;
} = {
  fieldErrors: {},
  message: "",
};

const Page = () => {
  const [state, formAction] = useFormState(sendVerifyCode, initialState);
  return (
    <>
      <Title>인증코드 전송</Title>
      <div className="mb-3 ml-1">
        <p>가입하신 이메일을 입력해주세요.</p>
        <p>인증번호가 담긴 이메일이 발송됩니다.</p>
      </div>
      <form action={formAction}>
        <div className="mb-[286px]">
          <Input
            name="email"
            type="email"
            required
            title="이메일"
            placeholder="이메일을 입력해주세요."
            errors={state?.fieldErrors?.email}
          />
        </div>
        <SubmitButton>인증코드 전송</SubmitButton>
      </form>
    </>
  );
};

export default Page;
