import { NextResponse, type NextRequest } from "next/server";

// 身份认证中间件
export function authMiddleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isLoggedIn = req.cookies.get("auth-token");

  // 如果用户未登录且访问仪表板，重定向到登录页
  if (!isLoggedIn && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  // 如果用户已登录且访问登录页，重定向到仪表板
  if (isLoggedIn && pathname === "/auth/login") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}