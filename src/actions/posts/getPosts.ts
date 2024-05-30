import prisma from "@/utils/prismaClient";

export const getPosts = async (
  tagName: string,
  page: number = 0,
  limit: number = 10
) => {
  if (tagName === "all") {
    return await prisma.post.findMany({
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
  } else {
    return await prisma.post.findMany({
      take: limit,
      skip: page * limit,
      orderBy: {
        createdAt: "desc",
      },
      where: {
        tag: {
          name: tagName,
        },
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
  }
};
