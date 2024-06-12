"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import axiosInstance from "@/utils/axios";
import { auth } from "@/auth";

const schema = z.object({
  title: z.string({
    message: "제목을 입력해주세요.",
  }),
  content: z.string({
    message: "내용을 입력해주세요.",
  }),
  tag: z.string({
    message: "태그를 입력해주세요.",
  }),
  slug: z.string(),
});

export default async function createPost(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
    tag: formData.get("tag"),
    slug: formData.get("slug"),
  });

  if (!validatedFields.success) {
    return {
      fieldErrors: validatedFields.error.flatten().fieldErrors,
      message: "",
    };
  }

  const session = await auth();

  if (!session) {
    return {
      message: "로그인이 필요합니다.",
      fieldErrors: {},
    };
  }

  if (validatedFields.data.slug) {
    try {
      await axiosInstance.put("/post", {
        title: validatedFields.data.title,
        content: validatedFields.data.content,
        tagName: validatedFields.data.tag,
        authorEmail: session.user?.email,
        slug: validatedFields.data.slug,
      });
    } catch (e) {
      return {
        message: "게시물 수정에 실패했습니다.",
        fieldErrors: {},
      };
    }
  } else {
    try {
      await axiosInstance.post("/post", {
        title: validatedFields.data.title,
        content: validatedFields.data.content,
        tagName: validatedFields.data.tag,
        authorEmail: session.user?.email,
      });
    } catch (e) {
      return {
        message: "게시물 작성에 실패했습니다.",
        fieldErrors: {},
      };
    }
  }

  redirect("/");
}
