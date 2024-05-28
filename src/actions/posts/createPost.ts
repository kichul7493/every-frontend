"use server";

import prisma from "@/lib/prismaClient";
import { z } from "zod";
import { getSession } from "../users/auth";
import generateSlug from "@/lib/generateSlug";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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

  const session = await getSession();

  if (!session || !session.user?.email) {
    return {
      message: "로그인이 필요합니다.",
      fieldErrors: {},
    };
  }

  if (validatedFields.data.slug) {
    const newSlug = generateSlug(validatedFields.data.title);

    let tag = await prisma.tag.findFirst({
      where: {
        name: validatedFields.data.tag,
      },
    });

    if (!tag) {
      tag = await prisma.tag.create({
        data: {
          name: validatedFields.data.tag,
        },
      });
    }

    await prisma.post.update({
      where: {
        slug: validatedFields.data.slug,
      },
      data: {
        title: validatedFields.data.title,
        content: validatedFields.data.content,
        slug: newSlug,
        tag: {
          connect: {
            id: tag.id,
          },
        },
      },
    });

    revalidatePath("/");
    redirect("/");
  }

  try {
    const slug = generateSlug(validatedFields.data.title);

    let tag = await prisma.tag.findFirst({
      where: {
        name: validatedFields.data.tag,
      },
    });

    if (!tag) {
      tag = await prisma.tag.create({
        data: {
          name: validatedFields.data.tag,
        },
      });
    }

    await prisma.post.create({
      data: {
        title: validatedFields.data.title,
        content: validatedFields.data.content,
        slug,
        author: {
          connect: {
            email: session.user.email,
          },
        },
        tag: {
          connect: {
            id: tag.id,
          },
        },
      },
    });
  } catch (e) {
    console.error(e);
    return {
      message: "게시물 작성에 실패했습니다.",
      fieldErrors: {},
    };
  }

  revalidatePath("/");
  redirect("/");
}
