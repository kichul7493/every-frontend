import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prismaClient";

export async function GET(req: NextRequest): Promise<NextResponse> {
  const tag = req.nextUrl.searchParams.get("tag");

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
    });

    return NextResponse.json(
      {
        posts,
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
    });

    return NextResponse.json(
      {
        posts,
      },
      {
        status: 200,
      }
    );
  }
}
