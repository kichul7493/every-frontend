import prisma from "@/utils/prismaClient";

type CreateUserProps = {
  email: string;
  name: string;
  password: string;
  salt: string;
  code: string;
};

export async function createUser({
  email,
  name,
  password,
  salt,
  code,
}: CreateUserProps) {
  return await prisma.user.create({
    data: {
      email: email,
      name: name,
      password,
      salt,
      code,
      status: "PENDING",
    },
  });
}

export async function findByEmail(email: string) {
  return await prisma.user.findFirst({
    where: {
      email: email,
    },
  });
}

export async function update(userData: User) {
  await prisma.user.update({
    where: {
      id: userData.id,
    },
    data: {
      ...userData,
    },
  });
}
