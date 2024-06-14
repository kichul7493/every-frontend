"use server";

import { verifyUser } from "@/server/user/userService";
import { redirect } from "next/navigation";
import { z } from "zod";

const schema = z.object({
  email: z
    .string({
      message: "이메일을 입력해주세요.",
    })
    .email("이메일 형식이 올바르지 않습니다."),
  code: z
    .string({
      message: "인증 코드를 입력해주세요.",
    })
    .length(6, {
      message: "인증 코드는 6자리입니다.",
    }),
});

export default async function verifyEmailAction(
  prevState: any,
  formData: FormData
) {
  const validatedFields = schema.safeParse({
    email: formData.get("email"),
    code: formData.get("code"),
  });

  if (!validatedFields.success) {
    return {
      fieldErrors: validatedFields.error.flatten().fieldErrors,
      message: "",
    };
  }

  const { email, code } = validatedFields.data;

  try {
    await verifyUser(email, code);
  } catch (e) {
    return {
      message: "인증 코드가 일치하지 않습니다.",
      fieldErrors: {},
    };
  }

  redirect("/signup/success");
}
