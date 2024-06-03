import GoogleLoginButton from "@/components/login/googleLoginButton/GoogleLoginButton";
import KaKaoLoginButton from "@/components/login/kakaoLoginButton/KaKaoLoginButton";
import LoginForm from "@/components/login/loginForm/LoginForm";
import SignupLink from "@/components/login/signupLink/SignupLink";
import React from "react";

const Page = () => {
  return (
    <>
      <h1 className="text-center text-4xl mb-14">로그인</h1>
      <LoginForm />
      <div className="flex flex-col gap-2">
        <KaKaoLoginButton />
        <GoogleLoginButton />
        <SignupLink />
      </div>
    </>
  );
};

export default Page;
