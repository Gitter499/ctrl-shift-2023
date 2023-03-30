import NextAuth from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import db from "@/util/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

export const authOptions: NextAuthOptions = {
  // @see
  adapter: PrismaAdapter(db as any),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!!,

      clientSecret: process.env.GITHUB_CLIENT_SECRET!!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async session({ token, session }) {
      if (token) {
        // @ts-ignore
        session.user.id = token.id;
        // @ts-ignore

        session.user.name = token.name;
        // @ts-ignore

        session.user.email = token.email;
        // @ts-ignore

        session.user.image = token.picture;
      }

      return session;
    },
    async jwt({ token, user }) {
      const dbUser = await db.user.findFirst({
        where: {
          email: token.email,
        },
      });

      if (!dbUser) {
        if (user) {
          token.id = user?.id;
        }
        return token;
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
      };
    },
  },
};

export default NextAuth(authOptions);
