import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  async function middleware(request) {
    const token = request.nextauth.token; // Access token
    console.log(token); // Check if token is accessible
    console.log(request.nextUrl.pathname); // Check path for debugging

    if (
      request.nextUrl.pathname.startsWith("/admin/food") &&
      token?.role !== "admin"
    ) {
      return NextResponse.rewrite(new URL("/denied", request.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token, // Ensure correct role check
    },
  }
);

export const config = {
  matcher: ["/admin/food"], // Protect these routes
};
