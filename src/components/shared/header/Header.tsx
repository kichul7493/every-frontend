"use client";

import BackArrow from "@/components/icons/BackArrow";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface HeaderProps {
  href: string;
}

const Header = ({ href }: HeaderProps) => {
  return (
    <header className="w-full px-7 py-3 mb-9">
      <Link href={href} className="p-[6px]">
        <BackArrow />
      </Link>
    </header>
  );
};

export default Header;
