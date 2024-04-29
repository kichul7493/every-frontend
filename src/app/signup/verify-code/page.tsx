import Input from "@/components/shared/input/Input";
import Title from "@/components/shared/typography/Title";
import React from "react";

const page = () => {
  return (
    <>
      <Title>인증코드 입력</Title>
      <div className="mb-3 px-1">
        <p className="text-sm">발송된 이메일에 적힌 인증코드를 입력해주세요.</p>
        <button className="text-sm text-main">인증코드 다시 보내기</button>
      </div>
      <form>
        <div className="mb-[286px]">
          <Input name="이메일" placeholder="이메일을 입력해주세요." />
        </div>
        <button className="w-full py-3 bg-main rounded-xl text-sm">
          이메일 인증
        </button>
      </form>
    </>
  );
};

export default page;
