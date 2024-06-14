"use server";

import { z } from "zod";
import { RedirectType, redirect } from "next/navigation";
import generateRandomCode from "@/utils/generateCode";
import { hash } from "@/utils/passwordEncoder";
import { createNewUser } from "@/server/user/userService";

const schema = z
  .object({
    email: z
      .string({
        message: "이메일을 입력해주세요.",
      })
      .email("이메일 형식이 올바르지 않습니다."),
    name: z.string({
      message: "이름을 입력해주세요.",
    }),
    password: z.string({
      message: "비밀번호를 입력해주세요.",
    }),
    passwordConfirm: z.string({
      message: "비밀번호를 다시 입력해주세요.",
    }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["passwordConfirm"],
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["password"],
  });

export default async function createUserAction(
  prevState: any,
  formData: FormData
) {
  const validatedFields = schema.safeParse({
    email: formData.get("email"),
    name: formData.get("name"),
    password: formData.get("password"),
    passwordConfirm: formData.get("passwordConfirm"),
  });

  if (!validatedFields.success) {
    return {
      fieldErrors: validatedFields.error.flatten().fieldErrors,
      message: "",
    };
  }

  const { password, salt } = hash(validatedFields.data.password);

  const code = generateRandomCode(6);

  try {
    createNewUser({
      email: validatedFields.data.email,
      name: validatedFields.data.name,
      password,
      salt,
      code,
    });
  } catch (e: any) {
    if (e.code === "P2002") {
      return {
        message: "이미 존재하는 이메일입니다.",
        fieldErrors: {},
      };
    } else {
      console.log(e);
      return {
        message: "알 수 없는 오류가 발생했습니다.",
        fieldErrors: {},
      };
    }
  }
  redirect(
    `/signup/verify-code?email=${validatedFields.data.email}`,
    RedirectType.push
  );
}
