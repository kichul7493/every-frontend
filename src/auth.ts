import NextAuth, { CredentialsSignin } from "next-auth";
import credentials from "next-auth/providers/credentials";
import prisma from "./utils/prismaClient";
import { compare } from "./utils/passwordEncoder";

export const {
  handlers,
  signIn,
  signOut,
  auth,
  unstable_update: update,
} = NextAuth({
  providers: [
    credentials({
      authorize: async ({ email, password }) => {
        if (email && password) {
          const user = await prisma.user.findFirst({
            where: {
              email,
            },
          });

          if (!user || user.status !== "VERIFIED") {
            throw new CredentialsSignin(
              "이메일 혹은 비밀번호가 올바르지 않습니다."
            );
          }

          const isValid = compare(password as string, user.password, user.salt);

          if (!isValid) {
            throw new CredentialsSignin(
              "이메일 혹은 비밀번호가 올바르지 않습니다."
            );
          }

          return {
            id: user.id.toString(),
            name: user.name,
            email: user.email,
            image: "",
          };
        } else {
          throw new CredentialsSignin(
            "이메일 혹은 비밀번호가 올바르지 않습니다."
          );
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24,
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    signIn: async () => {
      return true;
    },
    jwt: async ({ token, user }) => {
      return token;
    },
    session: async ({ session, token }) => {
      return session;
    },
  },
});
