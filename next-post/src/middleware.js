import { NextResponse } from "next/server";

export function middleware(req) {
  const isAuthenticated = false;

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/posts/new", "/posts/postid"],
};

// middleware will run for this paths
