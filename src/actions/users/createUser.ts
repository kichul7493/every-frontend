"use server";

import { z } from "zod";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { RedirectType, redirect } from "next/navigation";
import nodemailer from "nodemailer";
import generateRandomCode from "@/lib/generateCode";

const prisma = new PrismaClient();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

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

export default async function createUser(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    email: formData.get("email"),
    name: formData.get("name"),
    password: formData.get("password"),
    passwordConfirm: formData.get("passwordConfirm"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "",
    };
  }

  const hashedPassword = bcrypt.hashSync(validatedFields.data.password, 10);

  // 6자리의 랜덤 코드를 생성하는 함수를 작성해줘
  const code = generateRandomCode(6);

  try {
    const user = await prisma.users.create({
      data: {
        email: validatedFields.data.email,
        name: validatedFields.data.name,
        password: hashedPassword,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: user.email,
      subject: "회원가입을 축하합니다.",
      text: `환영합니다, ${user.name}님!`,
    });
  } catch (e: any) {
    if (e.code === "P2002") {
      return {
        errors: {},
        message: "이미 존재하는 이메일입니다.",
      };
    } else {
      console.log(e);
      return {
        errors: {},
        message: "알 수 없는 오류가 발생했습니다.",
      };
    }
  }
  redirect("/login", RedirectType.push);
}
