import BackArrow from "@/components/icons/BackArrow";
import Link from "next/link";
import Header from "../header/Header";

export default function Layout({
  children,
  href,
}: Readonly<{
  children: React.ReactNode;
  href: string;
}>) {
  return (
    <>
      <Header />
      <div className="px-7">{children}</div>
    </>
  );
}
