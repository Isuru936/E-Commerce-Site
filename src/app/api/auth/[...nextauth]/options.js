import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

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
        const user = {
          id: 1,
          name: "J Smith",
          email: "john@email.com",
          password: "password",
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
  // Uncomment the following to customize the sign-in page
  // pages:{
  //   signIn: '/auth/signin',
  // }
};
