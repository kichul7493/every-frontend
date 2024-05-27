import prisma from "@/lib/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
): Promise<NextResponse> {
  const { slug } = params;

  const post = await prisma.post.findFirst({
    where: {
      slug,
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
    },
  });

  if (!post) {
    return NextResponse.json(
      {
        error: "Post not found",
      },
      {
        status: 404,
      }
    );
  }

  return NextResponse.json(
    {
      post,
    },
    {
      status: 200,
    }
  );
}
