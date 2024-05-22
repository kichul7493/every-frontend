import prisma from "@/lib/prismaClient";

export const getPosts = async (page: number = 0, limit: number = 10) => {
  const posts = await prisma.post.findMany({
    take: limit,
    skip: page * limit,
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      title: true,
      createdAt: true,
      slug: true,
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

  return posts;
};
