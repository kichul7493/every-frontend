import Link from "next/link";
import React from "react";

const SignupLink = () => {
  return (
    <Link className="text-xs flex gap-2 justify-center" href="signup">
      <span>아직 회원이 아니신가요?</span>{" "}
      <span className="text-main">회원가입</span>
    </Link>
  );
};

export default SignupLink;
