import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prismaClient";
import generateSlug from "@/utils/generateSlug";

export async function GET(req: NextRequest): Promise<NextResponse> {
  const tag = req.nextUrl.searchParams.get("tag");
  const page = req.nextUrl.searchParams.get("page");

  if (!tag) {
    return NextResponse.json(
      {
        message: "Tag is required",
      },
      {
        status: 400,
      }
    );
  }

  if (tag === "all") {
    const posts = await prisma.post.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        createdAt: true,
        slug: true,
        tag: {
          select: {
            name: true,
            id: true,
          },
        },
        author: {
          select: {
            name: true,
            email: true,
            id: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      skip: page ? (parseInt(page) - 1) * 10 : 0,
      take: 10,
    });

    const totalPosts = await prisma.post.count();

    const nextPage =
      totalPosts > parseInt(page || "0") * 10
        ? parseInt(page || "0") + 1
        : null;

    return NextResponse.json(
      {
        items: posts,
        nextPage,
      },
      {
        status: 200,
      }
    );
  } else {
    const posts = await prisma.post.findMany({
      where: {
        tag: {
          name: tag,
        },
      },
      select: {
        id: true,
        title: true,
        content: true,
        createdAt: true,
        slug: true,
        tag: {
          select: {
            name: true,
            id: true,
          },
        },
        author: {
          select: {
            name: true,
            email: true,
            id: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      skip: page ? (parseInt(page) - 1) * 10 : 0,
      take: 10,
    });

    const totalPosts = await prisma.post.count({
      where: {
        tag: {
          name: tag,
        },
      },
    });

    const nextPage =
      totalPosts > parseInt(page || "0") * 10
        ? parseInt(page || "0") + 1
        : null;

    return NextResponse.json(
      {
        items: posts,
        nextPage,
      },
      {
        status: 200,
      }
    );
  }
}

export async function POST(req: NextRequest) {
  const { title, content, tagName, authorEmail } = await req.json();

  if (!title || !content || !tagName) {
    return NextResponse.json(
      {
        message: "Title, content, tagName are required",
      },
      {
        status: 400,
      }
    );
  }

  const slug = generateSlug(title);

  let tag = await prisma.tag.findFirst({
    where: {
      name: tagName,
    },
  });

  if (!tag) {
    tag = await prisma.tag.create({
      data: {
        name: tagName,
      },
    });
  }

  const post = await prisma.post.create({
    data: {
      title,
      content,
      slug,
      author: {
        connect: {
          email: authorEmail,
        },
      },
      tag: {
        connect: {
          id: tag.id,
        },
      },
    },
  });

  return NextResponse.json(
    {
      message: "Post created",
    },
    {
      status: 201,
    }
  );
}

export async function PUT(req: NextRequest) {
  const { title, content, tagName, authorEmail, slug } = await req.json();

  if (!title || !content || !tagName || !authorEmail || !slug) {
    return NextResponse.json(
      {
        message: "Title, content, tagName, authorEmail, slug are required",
      },
      {
        status: 400,
      }
    );
  }

  const newSlug = generateSlug(title);

  let tag = await prisma.tag.findFirst({
    where: {
      name: tagName,
    },
  });

  if (!tag) {
    tag = await prisma.tag.create({
      data: {
        name: tagName,
      },
    });
  }

  await prisma.post.update({
    where: {
      slug,
      author: {
        email: authorEmail,
      },
    },
    data: {
      title,
      content,
      slug: newSlug,
      tag: {
        connect: {
          id: tag.id,
        },
      },
    },
  });

  return NextResponse.json(
    {
      message: "Post updated",
    },
    {
      status: 200,
    }
  );
}
