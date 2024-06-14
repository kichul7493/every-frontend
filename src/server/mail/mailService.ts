import sendMail from "@/utils/sendMail";

export async function sendSignupEmail(
  email: string,
  name: string,
  code: string
) {
  await sendMail({
    to: email,
    subject: "[Every] 회원가입을 축하합니다.",
    html: `<h1>환영합니다, ${name}님!</h1><p>인증코드는 ${code}입니다.</p>`,
  });
}

export async function sendCode(email: string, code: string) {
  await sendMail({
    to: email,
    subject: "[Every] 인증 코드 발송",
    html: "인증 코드: " + code,
  });
}
