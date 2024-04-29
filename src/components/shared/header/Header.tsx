"use client";

import BackArrow from "@/components/icons/BackArrow";
import { useRouter } from "next/navigation";
import React from "react";

const Header = () => {
  const router = useRouter();

  return (
    <header className="w-full px-7 py-3 mb-9">
      <button onClick={() => router.back()} className="p-[6px]">
        <BackArrow />
      </button>
    </header>
  );
};

export default Header;
