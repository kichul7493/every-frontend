"use server";

import { auth, signIn, signOut, update } from "@/auth";
import { CredentialsSignin } from "next-auth";
import { redirect } from "next/navigation";
import { z } from "zod";

const schema = z.object({
  email: z
    .string({
      message: "이메일을 입력해주세요.",
    })
    .email("이메일 형식이 올바르지 않습니다."),
  password: z.string({
    message: "비밀번호를 입력해주세요.",
  }),
});

export const signInWithCredentials = async (
  prevState: any,
  formData: FormData
) => {
  const validatedFields = schema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      fieldErrors: validatedFields.error.flatten().fieldErrors,
      message: "",
    };
  }

  try {
    await signIn("credentials", {
      email: validatedFields.data.email,
      password: validatedFields.data.password,
    });
  } catch (error) {
    if (error instanceof CredentialsSignin) {
      return {
        fieldErrors: {},
        message: error.cause,
      };
    }
  }

  redirect("/");
};

export const signInWithGoogle = async () => {
  await signIn("google");
};

export const signInWithKaKao = async () => {
  await signIn("kakao");
};

export const signOutWithForm = async () => {
  await signOut();
};

export { auth as getSession, update as updateSession };
