import prisma from "@/lib/prismaClient";

export default async function getTags() {
  return await prisma.tag.findMany();
}
