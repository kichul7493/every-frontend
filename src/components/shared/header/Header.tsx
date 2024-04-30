"use client";

import BackArrow from "@/components/icons/BackArrow";
import Link from "next/link";
import React from "react";

interface HeaderProps {
  href: string;
  withThumbnail?: boolean;
}

const Header = ({ href, withThumbnail }: HeaderProps) => {
  return (
    <header className="w-full px-7 py-3 mb-9 flex justify-between">
      <Link href={href} className="p-[6px]">
        <BackArrow />
      </Link>
      {withThumbnail && (
        <div className="w-10 h-10 rounded-full bg-gray100"></div>
      )}
    </header>
  );
};

export default Header;
