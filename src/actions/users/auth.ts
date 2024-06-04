"use server";

import { auth, signIn, signOut, update } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("이메일 형식이 올바르지 않습니다."),
  password: z.string().min(6, "비밀번호는 6자 이상 입력해주세요."),
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
    if (isRedirectError(error)) {
      console.log("redirect error");
      redirect("/");
    } else {
      return {
        fieldErrors: {
          email: ["이메일 혹은 비밀번호가 올바르지 않습니다."],
          password: ["이메일 혹은 비밀번호가 올바르지 않습니다."],
        },
        message: "",
      };
    }
  }
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
