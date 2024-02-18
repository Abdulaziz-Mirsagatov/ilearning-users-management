import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import bcrypt from "bcryptjs";

import CredentialsProvider from "next-auth/providers/credentials";
import { updateUser } from "./actions";

const prisma = new PrismaClient();

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        // validate credentials
        if (!credentials.email || !credentials.password) return null;

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email as string,
          },
        });
        if (!user) return null;

        const isValid = await bcrypt.compare(
          credentials.password as string,
          user.password
        );
        if (!isValid) return null;

        const isBlocked = user.status === "blocked";
        if (isBlocked) return null;

        await updateUser(user.email!, {
          lastLogin: new Date().toISOString(),
        });

        return { id: user.id, name: user.name, email: user.email };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
  pages: {
    signIn: "/login",
  },
});
