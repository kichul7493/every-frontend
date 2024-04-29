import Input from "@/components/shared/input/Input";
import Title from "@/components/shared/typography/Title";
import React from "react";

const page = () => {
  return (
    <>
      <Title>인증코드 전송</Title>
      <div className="mb-3 ml-1">
        <p>가입하신 이메일을 입력해주세요.</p>
        <p>인증번호가 담긴 이메일이 발송됩니다.</p>
      </div>
      <form>
        <div className="mb-[286px]">
          <Input name="이메일" placeholder="이메일을 입력해주세요." />
        </div>
        <button className="w-full py-3 bg-main rounded-xl">
          인증코드 전송
        </button>
      </form>
    </>
  );
};

export default page;
