import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

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
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Simulate user authentication
        const user = {
          id: 1,
          name: "J Smith",
          email: "john@email.com",
          password: "password",
          role: "admin",
        };
        if (
          credentials.email === user.email &&
          credentials.password === "password"
        ) {
          return user;
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
  },
};
