"use server";

import { changePassword } from "@/server/user/userService";
import { hash } from "@/utils/passwordEncoder";
import prisma from "@/utils/prismaClient";
import { redirect } from "next/navigation";
import { z } from "zod";

const schema = z
  .object({
    code: z.string({
      message: "인증 코드를 입력해주세요.",
    }),
    password: z.string({
      message: "비밀번호를 입력해주세요.",
    }),
    passwordConfirm: z.string({
      message: "비밀번호를 다시 입력해주세요.",
    }),
    email: z
      .string({
        message: "이메일을 입력해주세요.",
      })
      .email("이메일 형식이 올바르지 않습니다."),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["passwordConfirm"],
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["password"],
  });

export default async function changePasswordAction(
  prevState: any,
  formData: FormData
) {
  const validatedFields = schema.safeParse({
    code: formData.get("code"),
    password: formData.get("password"),
    passwordConfirm: formData.get("passwordConfirm"),
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return {
      fieldErrors: validatedFields.error.flatten().fieldErrors,
      message: "",
    };
  }

  const { email, password, code } = validatedFields.data;

  try {
    await changePassword({
      email,
      password,
      code,
    });
  } catch (e) {
    return {
      message: "서버에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.",
      fieldErrors: {},
    };
  }

  redirect("/reset-password/success");
}
