import { NextResponse } from "next/server";
import { auth } from "./auth";

const LOGIN_PATH = "/login";
const LOGOUT_PATH = "/api/auth/signout";

export default auth((req) => {
  const isLoggedIn = !!req.auth;

  const path = req.nextUrl.pathname;
  const origin = req.nextUrl.origin;
  const loginUrl = new URL(`${origin}${LOGIN_PATH}`);

  // logged in and accessing login route -> redirect to origin
  if (isLoggedIn && path.startsWith(LOGIN_PATH))
    return NextResponse.redirect(`${origin}/users`);
  // logged in and accessing logout route -> redirect to login
  if (!isLoggedIn && path.startsWith(LOGOUT_PATH))
    return NextResponse.redirect(loginUrl);
  // not logged in and accessing a protected route -> redirect to login
  if (!isLoggedIn && !path.startsWith(LOGIN_PATH))
    return NextResponse.redirect(loginUrl);

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
