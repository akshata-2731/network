import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";


export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/login", // your custom login page
  },
  callbacks: {
    async redirect(params: { url: string; baseUrl: string }): Promise<string> {
      // Redirect to dashboard after login
      return `${params.baseUrl}/dashboard`;
    },
  },
};


export default NextAuth(authOptions);