import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "@/utils/db.js";
import User from "@/models/User";
import { signIn } from "next-auth/react";

export const options = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        name: { label: "username", type: "text" },
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await dbConnect();

        const user = await User.findOne({ email: credentials.email });

        if (user && user.password === credentials.password) {
          return user;
        } else if (!user) {
          const newUser = new User({
            name: credentials.name,
            email: credentials.email,
            password: credentials.password,
            role: "user",
          });
          await newUser.save();
          return newUser;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role ?? "user"; // Ensure role is assigned
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.role = token.role ?? "user"; // Ensure role is assigned
      }
      return session;
    },
    async signIn({ user, account, profile }) {
      await dbConnect();
      const existingUser = await User.findOne({ email: user.email });

      if (!existingUser) {
        const newUser = new User({
          name: user.username,
          email: user.email,
          role: "user",
          password: user.password,
        });
        await newUser.save();
      }

      return true;
    },
  },
};
