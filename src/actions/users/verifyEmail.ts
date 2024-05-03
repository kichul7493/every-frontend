"use server";

import prisma from "@/lib/prismaClient";
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

export default async function verifyEmail(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    email: formData.get("email"),
    code: formData.get("code"),
  });

  console.log(validatedFields.data);

  if (!validatedFields.success) {
    return {
      fieldErrors: validatedFields.error.flatten().fieldErrors,
      message: "",
    };
  }

  try {
    const user = await prisma.users.findFirst({
      where: {
        email: validatedFields.data.email,
        code: validatedFields.data.code,
      },
    });

    if (!user) {
      return {
        message: "인증 코드가 일치하지 않습니다.",
        fieldErrors: {},
      };
    }

    await prisma.users.update({
      where: {
        id: user.id,
      },
      data: {
        status: "VERIFIED",
      },
    });
  } catch (e) {
    return {
      message: "인증 코드가 일치하지 않습니다.",
      fieldErrors: {},
    };
  }

  redirect("/signup/success");
}
