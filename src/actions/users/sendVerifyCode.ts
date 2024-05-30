"use server";

import generateRandomCode from "@/utils/generateCode";
import prisma from "@/utils/prismaClient";
import sendMail from "@/utils/sendMail";
import { redirect } from "next/navigation";
import { z } from "zod";

const schema = z.object({
  email: z
    .string({
      message: "이메일을 입력해주세요.",
    })
    .email("이메일 형식이 올바르지 않습니다."),
});

export default async function sendVerifyCode(
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

  const user = await prisma.user.findFirst({
    where: {
      email: validatedFields.data.email,
    },
  });

  if (!user) {
    return {
      message: "가입되지 않은 이메일입니다.",
      fieldErrors: {},
    };
  }

  const code = generateRandomCode(6);

  try {
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        code,
      },
    });

    await sendMail({
      to: user.email,
      subject: "[Every] 인증 코드 발송",
      html: "인증 코드: " + code,
    });
  } catch (e) {
    return {
      message: "인증 코드 전송에 실패했습니다.",
      fieldErrors: {},
    };
  }

  redirect("/reset-password/verify-code?email=" + user.email);
}
