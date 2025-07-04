"use client";

import { Settings } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import type { SidebarVariant, SidebarCollapsible, ContentLayout } from "@/lib/layout-preferences";
import { setValueToCookie } from "@/server/server-actions";

type LayoutControlsProps = {
  readonly variant: SidebarVariant;
  readonly collapsible: SidebarCollapsible;
  readonly contentLayout: ContentLayout;
};

export function LayoutControls({ variant, collapsible, contentLayout }: LayoutControlsProps) {
  const handleValueChange = async (key: string, value: string) => {
    await setValueToCookie(key, value);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="icon">
          <Settings />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end">
        <div className="flex flex-col gap-5">
          <div className="space-y-1.5">
            <h4 className="text-sm leading-none font-medium">布局设置</h4>
            <p className="text-muted-foreground text-xs">自定义您的仪表板布局偏好。</p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="space-y-1">
              <Label className="text-xs font-medium">侧边栏变体</Label>
              <ToggleGroup
                className="w-full"
                size="sm"
                variant="outline"
                type="single"
                value={variant}
                onValueChange={(value) => handleValueChange("sidebar_variant", value)}
              >
                <ToggleGroupItem className="text-xs" value="inset" aria-label="切换内嵌">
                  内嵌
                </ToggleGroupItem>
                <ToggleGroupItem className="text-xs" value="sidebar" aria-label="切换侧边栏">
                  侧边栏
                </ToggleGroupItem>
                <ToggleGroupItem className="text-xs" value="floating" aria-label="切换浮动">
                  浮动
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            <div className="space-y-1">
              <Label className="text-xs font-medium">侧边栏可折叠</Label>
              <ToggleGroup
                className="w-full"
                size="sm"
                variant="outline"
                type="single"
                value={collapsible}
                onValueChange={(value) => handleValueChange("sidebar_collapsible", value)}
              >
                <ToggleGroupItem className="text-xs" value="icon" aria-label="切换图标">
                  图标
                </ToggleGroupItem>
                <ToggleGroupItem className="text-xs" value="offcanvas" aria-label="切换离屏">
                  离屏
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            <div className="space-y-1">
              <Label className="text-xs font-medium">内容布局</Label>
              <ToggleGroup
                className="w-full"
                size="sm"
                variant="outline"
                type="single"
                value={contentLayout}
                onValueChange={(value) => handleValueChange("content_layout", value)}
              >
                <ToggleGroupItem className="text-xs" value="centered" aria-label="切换居中">
                  居中
                </ToggleGroupItem>
                <ToggleGroupItem className="text-xs" value="full-width" aria-label="切换全宽">
                  全宽
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}