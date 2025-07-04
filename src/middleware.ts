import { NextRequest, NextResponse } from "next/server";

import { authMiddleware } from "./middleware/auth-middleware";

// 中间件函数
export function middleware(req: NextRequest) {
  // 身份认证中间件
  // const response = authMiddleware(req)
  // if (response) {
  //   return response
  // }

  return NextResponse.next();
}

// 配置匹配器
export const config = {
  matcher: ["/dashboard/:path*", "/auth/login"],
};