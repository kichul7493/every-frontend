import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prismaClient";

export async function GET(req: NextRequest): Promise<NextResponse> {
  const tag = req.nextUrl.searchParams.get("tag");

  if (tag === "all") {
    const posts = await prisma.post.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        createdAt: true,
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