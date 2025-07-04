import Link from "next/link";

import { Command } from "lucide-react";

import { Button } from "@/components/ui/button";

import { LoginFormV1 } from "./_components/login-form";

export default function LoginV1() {
  return (
    <div className="flex h-dvh">
      <div className="bg-primary hidden lg:block lg:w-1/3">
        <div className="flex h-full flex-col items-center justify-center p-12 text-center">
          <div className="space-y-6">
            <Command className="text-primary-foreground mx-auto size-12" />
            <div className="space-y-2">
              <h1 className="text-primary-foreground text-5xl font-light">再次回来</h1>
              <p className="text-primary-foreground/80 text-xl">登录以继续</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-background flex w-full items-center justify-center p-8 lg:w-2/3">
        <div className="w-full max-w-md space-y-10 py-24 lg:py-32">
          <div className="space-y-4 text-center">
            <div className="text-foreground font-medium tracking-tight">登录</div>
            <div className="text-muted-foreground mx-auto max-w-xl">
              欢迎回来。输入您的邮箱和密码，希望您这次记得它们。
            </div>
          </div>
          <div className="space-y-4">
            <LoginFormV1 />
            <Button className="w-full" variant="outline">
              使用 Google 继续
            </Button>
            <p className="text-muted-foreground text-center text-xs font-medium">
              没有账户？{" "}
              <Link href="register" className="text-primary font-semibold">
                注册
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}