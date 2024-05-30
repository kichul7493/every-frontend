import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

const getPrisma = () => {
  if (prisma) {
    return prisma;
  } else {
    prisma = new PrismaClient();

    return prisma;
  }
};

export default getPrisma();
