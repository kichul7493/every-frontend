import prisma from "@/utils/prismaClient";

export const getPostWithSlug = async (slug: string) => {
  return await prisma.post.findFirst({
    where: {
      slug,
    },
    select: {
      id: true,
      title: true,
      content: true,
      createdAt: true,
      author: {
        select: {
          name: true,
          id: true,
          thumbnail: true,
        },
      },
      tag: {
        select: {
          name: true,
          id: true,
        },
      },
    },
  });
};
