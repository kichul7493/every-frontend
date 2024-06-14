"use server";

import { sendVerifyCode } from "@/server/user/userService";
import { redirect } from "next/navigation";
import { z } from "zod";

const schema = z.object({
  email: z
    .string({
      message: "이메일을 입력해주세요.",
    })
    .email("이메일 형식이 올바르지 않습니다."),
});

export default async function sendVerifyCodeAction(
  prevState: any,
  formData: FormData
) {
  const validatedFields = schema.safeParse({
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return {
      fieldErrors: validatedFields.error.flatten().fieldErrors,
      message: "",
    };
  }

  const { email } = validatedFields.data;

  try {
    await sendVerifyCode(email);
  } catch (e) {
    return {
      message: "인증 코드 전송에 실패했습니다.",
      fieldErrors: {},
    };
  }

  redirect("/reset-password/verify-code?email=" + email);
}
