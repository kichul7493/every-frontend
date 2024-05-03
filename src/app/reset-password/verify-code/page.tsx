"use client";

import changePassword from "@/actions/users/changePassword";
import EmailHiddenInput from "@/components/shared/emailHiddenInput/EmailHiddenInput";
import Input from "@/components/shared/input/Input";
import SubmitButton from "@/components/shared/submitButton/SubmitButton";
import Title from "@/components/shared/typography/Title";
import React from "react";
import { useFormState } from "react-dom";

const initialState: {
  fieldErrors: {
    code?: string[];
    password?: string[];
    passwordConfirm?: string[];
  };
  message?: string;
} = {
  fieldErrors: {},
  message: "",
};

const Page = () => {
  const [state, formAction] = useFormState(changePassword, initialState);

  return (
    <>
      <Title>비밀번호 변경</Title>
      <form action={formAction}>
        <div className="mb-3">
          <p className="text-sm leading-6">
            발송된 이메일에 적힌 인증코드를 입력해주세요.
          </p>
          <p className="text-sm text-main leading-6">인증코드 다시 보내기</p>
        </div>
        <div className="mb-16">
          <Input
            name="code"
            title="인증코드"
            required
            maxLength={6}
            placeholder="인증코드를 입력해주세요."
          />
          <Input
            name="password"
            title="새로운 비밀번호"
            required
            type="password"
            placeholder="비밀번호를 입력해주세요."
          />
          <Input
            name="passwordConfirm"
            title="비밀번호 확인"
            required
            type="password"
            placeholder="비밀번호를 다시 입력해주세요."
          />
          <EmailHiddenInput />
        </div>

        <SubmitButton>비밀번호 변경</SubmitButton>
      </form>
    </>
  );
};

export default Page;
