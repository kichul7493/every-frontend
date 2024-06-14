import NextAuth, { CredentialsSignin } from "next-auth";
import credentials from "next-auth/providers/credentials";
import { signin } from "./server/user/userService";

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
          try {
            const user = await signin(email as string, password as string);

            return user;
          } catch (error) {
            throw new CredentialsSignin(
              "이메일 혹은 비밀번호가 올바르지 않습니다."
            );
          }
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
