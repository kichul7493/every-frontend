"use client";

import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { useFormState } from "react-dom";
import EmailLoginButton from "../emailLoginButton/EmailLoginButton";
import Input from "@/components/shared/input/Input";
import useRememberEmail from "@/hooks/login/useRememberEmail";
import { signInWithCredentials } from "@/actions/users/signIn";

const initialState: {
  fieldErrors: { email?: string[]; password?: string[] };
  message: string;
} = {
  fieldErrors: {},
  message: "",
};

const LoginForm = () => {
  const [state, formAction] = useFormState(signInWithCredentials, initialState);

  const { email, remember, handleChangeEmail, handleChangeRemember } =
    useRememberEmail();

  return (
    <form action={formAction} className="mb-2">
      <Input
        name="email"
        title="이메일"
        type="email"
        placeholder="이메일을 입력해주세요."
        required
        onChange={handleChangeEmail}
        value={email}
        errors={state?.fieldErrors.email}
      />
      <Input
        name="password"
        title="비밀번호"
        type="password"
        placeholder="비밀번호를 입력해주세요."
        required
        errors={state?.fieldErrors.password}
      />
      <div className="flex justify-between mb-20">
        <div className="flex items-center gap-2">
          <label
            data-testid="remember-checkbox"
            className={clsx([
              "w-[18px] h-[18px] bg-gray300 rounded flex items-center justify-center ",
              remember && "bg-main",
            ])}
          >
            <svg
              width="12"
              height="10"
              viewBox="0 0 12 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 4L5.06771 8.06771C5.53594 8.53594 6.32175 8.428 6.64639 7.85086L10.5 1"
                stroke="#D9D9D9"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            <input
              onChange={handleChangeRemember}
              name="remember"
              type="checkbox"
              className="hidden"
            />
          </label>
          <p className="text-xm text-gray100">이메일 기억하기</p>
        </div>
        <Link className="text-sm" href="/reset-password">
          비밀번호 찾기
        </Link>
      </div>
      <EmailLoginButton />
    </form>
  );
};

export default LoginForm;
