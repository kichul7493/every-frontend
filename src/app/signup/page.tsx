"use client";

import Input from "@/components/shared/input/Input";
import Link from "next/link";
import React from "react";
import { useFormState } from "react-dom";
import createUser from "../actions/users/createUser";

const initialState: {
  errors: {
    email?: string[];
    name?: string[];
    password?: string[];
    passwordConfirm?: string[];
  };
  message?: string;
} = {
  errors: {},
};

const Page = () => {
  const [state, formAction] = useFormState(createUser, initialState);
  return (
    <>
      <h1 className="text-4xl font-semibold text-center mb-14">회원가입</h1>
      <form action={formAction}>
        <Input
          title="이름"
          name="name"
          placeholder="이름을 입력해주세요."
          required
          errors={state?.errors?.name}
        />
        <Input
          title="이메일"
          name="email"
          placeholder="이메일을 입력해주세요."
          required
          type="email"
          errors={state?.errors?.email}
        />
        <Input
          title="비밀번호"
          name="password"
          placeholder="비밀번호를 입력해주세요."
          required
          type="password"
          errors={state?.errors?.password}
        />
        <Input
          title="비밀번호 확인"
          name="passwordConfirm"
          placeholder="비밀번호를 다시 입력해주세요."
          required
          type="password"
          errors={state?.errors?.passwordConfirm}
        />

        {state?.message && <span>{state.message}</span>}
        <button
          type="submit"
          className="w-full py-3 text-sm font-semibold bg-main rounded-xl mt-7 mb-2"
        >
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
