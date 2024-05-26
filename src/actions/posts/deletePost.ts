"use server";

import prisma from "@/lib/prismaClient";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { getSession } from "../users/auth";

const schema = z.object({
  slug: z.string({
    message: "slug를 입력해주세요.",
  }),
});

export default async function deletePost(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    slug: formData.get("slug"),
  });

  if (!validatedFields.success) {
    return {
      fieldErrors: validatedFields.error.flatten().fieldErrors,
      message: "",
    };
  }

  const { slug } = validatedFields.data;

  console.log(slug);

  try {
    const session = await getSession();

    console.log(session);

    if (!session || !session.user?.email) {
      return {
        message: "로그인이 필요합니다.",
        fieldErrors: {},
      };
    }

    await prisma.post.delete({
      where: {
        slug,
        author: {
          email: session.user.email,
        },
      },
    });
  } catch (e) {
    console.error(e);
    return {
      message: "게시물 삭제를 실패했습니다.",
      fieldErrors: {},
    };
  }

  revalidatePath("/");
  redirect("/");
}
