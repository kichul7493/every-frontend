"use client";

import { signInWithCredentials } from "@/actions/users/auth";
import EmailIcon from "@/components/icons/EmailIcon";
import GoogleIcon from "@/components/icons/GoogleIcon";
import KakaoIcon from "@/components/icons/KakaoIcon";
import Input from "@/components/shared/input/Input";
import SubmitButton from "@/components/shared/submitButton/SubmitButton";
import clsx from "clsx";
import Link from "next/link";
import React, { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";

const initialState: {
  fieldErrors: { email?: string[]; password?: string[] };
  message: string;
} = {
  fieldErrors: {},
  message: "",
};

const Page = () => {
  const [remember, setRemember] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [state, formAction] = useFormState(signInWithCredentials, initialState);

  const handleChangeRemember = (e: React.ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem("remember", e.target.checked ? "true" : "false");
    setRemember(e.target.checked);
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem("email", e.target.value);
    setEmail(e.target.value);
  };

  useEffect(() => {
    return () => {
      if (
        localStorage.getItem("remember") === "false" ||
        localStorage.getItem("remember") === null
      ) {
        localStorage.removeItem("email");
        localStorage.removeItem("remember");
      }
    };
  }, [email, remember]);

  useEffect(() => {
    if (window) {
      // Get email from local storage
      const email = localStorage.getItem("email");
      if (email) {
        setEmail(email);
      }

      const remember = localStorage.getItem("remember");
      if (remember === "true") {
        setRemember(true);
      } else {
        setRemember(false);
      }
    }
  }, []);

  return (
    <>
      <h1 className="text-center text-4xl mb-14">로그인</h1>
      <form action={formAction} className="mb-2">
        <Input
          name="email"
          title="이메일"
          type="email"
          placeholder="이메일을 입력해주세요."
          required
          onChange={handleChangeEmail}
          value={email}
          errors={state.fieldErrors.email}
        />
        <Input
          name="password"
          title="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          required
          errors={state.fieldErrors.password}
        />
        <div className="flex justify-between mb-20">
          <div className="flex items-center gap-2">
            <label
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
        <SubmitButton>
          <EmailIcon />
          <p className="text-sm font-semibold">이메일로 로그인</p>
        </SubmitButton>
      </form>
      <div className="flex flex-col gap-2">
        <form>
          <button
            type="button"
            className="w-full bg-black100 flex items-center justify-center gap-2 py-3 rounded-xl border-[1px] border-opacity-60 border-black"
          >
            <KakaoIcon />
            <p className="text-sm font-semibold">카카오로 로그인</p>
          </button>
        </form>
        <form>
          <button
            type="button"
            className="w-full bg-black100 flex items-center justify-center gap-2 py-3 rounded-xl border-[1px] border-opacity-60 border-black"
          >
            <GoogleIcon />
            <p className="text-sm font-semibold">구글로 로그인</p>
          </button>
        </form>
        <Link className="text-xs flex gap-2 justify-center" href="signup">
          <span>아직 회원이 아니신가요?</span>{" "}
          <span className="text-main">회원가입</span>
        </Link>
      </div>
    </>
  );
};

export default Page;
