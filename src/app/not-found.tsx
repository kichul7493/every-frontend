import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col gap-4 justify-center items-center">
      <h1 className="text-4xl">웁스!</h1>
      <h2 className="text-2xl">잘못된 경로로 접속하신 것 같습니다.</h2>
      <Link href="/" className="text-blue-500">
        홈으로 돌아가기
      </Link>{" "}
    </div>
  );
};

export default NotFound;
