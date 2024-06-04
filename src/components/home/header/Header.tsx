import Link from "next/link";
import React from "react";

interface Props {
  isLogin: boolean;
}

const Header = ({ isLogin }: Props) => {
  return (
    <div className="py-3 flex justify-between items-center mx-7">
      <Link href="/">
        <h1 className="text-3xl font-bold leading-8">Every</h1>
      </Link>
      {isLogin ? (
        <Link
          href="/post/create"
          className="bg-main py-[6px] px-3 rounded-3xl font-bold "
        >
          글쓰기
        </Link>
      ) : (
        <Link
          href="/login"
          className="bg-main py-[6px] px-3 rounded-3xl font-bold "
        >
          로그인
        </Link>
      )}
    </div>
  );
};

export default Header;
