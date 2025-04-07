import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { getLocale } from "next-intl/server";
import { routing } from "./i18n/routing";

const PUBLIC_ROUTES = ["/login", "/api/auth/callback"];

const intlMiddleware = createMiddleware(routing);

export default async function middleware(request: NextRequest) {
  const locale = await getLocale();

  const { pathname } = request.nextUrl;
  const isPublic = PUBLIC_ROUTES.some(
    (path) => pathname === `/${locale}${path}` || pathname === path,
  );

  const sessionToken = request.cookies.get("session_token")?.value;

  const isProd = process.env.NODE_ENV === "production";

  if (isProd && !isPublic && !sessionToken) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = `/${locale}/login`;
    return NextResponse.redirect(loginUrl);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};
