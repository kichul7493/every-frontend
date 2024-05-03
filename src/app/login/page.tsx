"use client";

import { signInWithCredentials } from "@/actions/users/auth";
import EmailIcon from "@/components/icons/EmailIcon";
import GoogleIcon from "@/components/icons/GoogleIcon";
import KakaoIcon from "@/components/icons/KakaoIcon";
import Input from "@/components/shared/input/Input";
import clsx from "clsx";
import Link from "next/link";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";

const initialState: {} = {
  fieldErrors: {},
  message: "",
};

const Page = () => {
  const [remember, setRemember] = React.useState(false);
  const [email, setEmail] = React.useState(localStorage.getItem("email") || "");
  const [state, formAction] = useFormState(signInWithCredentials, initialState);

  console.log(state);

  const handleChangeRemember = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRemember(e.target.checked);
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    if (remember) {
      // Save email to local storage
      localStorage.setItem("email", email);
    }
  }, [email, remember]);

  return (
    <form action={formAction}>
      <h1 className="text-center text-4xl mb-14">로그인</h1>
      <Input
        name="email"
        title="이메일"
        type="email"
        placeholder="이메일을 입력해주세요."
        required
        onChange={handleChangeEmail}
        value={email}
      />
      <Input
        name="password"
        title="비밀번호"
        type="password"
        placeholder="비밀번호를 입력해주세요."
        required
      />
      <div className="flex justify-between mb-20">
        <div className="flex items-center gap-2">
          <label
            className={clsx([
              "w-[18px] h-[18px] bg-gray300 rounded flex items-center justify-center ",
              remember && "bg-main",
            ])}
          >
            <span className="text-gray300">V</span>
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
      <div className="flex flex-col gap-2">
        <button className="w-full bg-main flex items-center justify-center gap-2 py-3 rounded-xl border-[1px] border-opacity-60 border-black">
          <EmailIcon />
          <p className="text-sm font-semibold">이메일로 로그인</p>
        </button>
        <button
          type="button"
          className="w-full bg-black100 flex items-center justify-center gap-2 py-3 rounded-xl border-[1px] border-opacity-60 border-black"
        >
          <KakaoIcon />
          <p className="text-sm font-semibold">카카오로 로그인</p>
        </button>
        <button
          type="button"
          className="w-full bg-black100 flex items-center justify-center gap-2 py-3 rounded-xl border-[1px] border-opacity-60 border-black"
        >
          <GoogleIcon />
          <p className="text-sm font-semibold">구글로 로그인</p>
        </button>
        <Link className="text-xs flex gap-2 justify-center" href="signup">
          <span>아직 회원이 아니신가요?</span>{" "}
          <span className="text-main">회원가입</span>
        </Link>
      </div>
    </form>
  );
};

export default Page;
