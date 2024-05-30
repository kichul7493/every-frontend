import prisma from "@/utils/prismaClient";

export default async function getTags() {
  return await prisma.tag.findMany();
}
