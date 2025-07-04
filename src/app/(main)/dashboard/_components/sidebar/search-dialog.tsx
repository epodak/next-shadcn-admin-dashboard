"use client";
import * as React from "react";

import { ChartPie, Grid2X2, ChartLine, ShoppingBag, BookA, Forklift, Search } from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

const searchItems = [
  { group: "仪表板", icon: ChartPie, label: "默认" },
  { group: "仪表板", icon: Grid2X2, label: "客户关系管理", disabled: true },
  { group: "仪表板", icon: ChartLine, label: "数据分析", disabled: true },
  { group: "仪表板", icon: ShoppingBag, label: "电子商务", disabled: true },
  { group: "仪表板", icon: BookA, label: "学院", disabled: true },
  { group: "仪表板", icon: Forklift, label: "物流", disabled: true },
  { group: "身份认证", label: "登录 v1" },
  { group: "身份认证", label: "注册 v1" },
];

export function SearchDialog() {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <div
        className="text-muted-foreground flex cursor-pointer items-center gap-2 text-sm"
        onClick={() => setOpen(true)}
      >
        <Search className="size-4" />
        搜索
        <kbd className="bg-muted inline-flex h-5 items-center gap-1 rounded border px-1.5 text-[10px] font-medium select-none">
          <span className="text-xs">⌘</span>J
        </kbd>
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="搜索仪表板、用户和更多…" />
        <CommandList>
          <CommandEmpty>未找到结果。</CommandEmpty>
          {[...new Set(searchItems.map((item) => item.group))].map((group, i) => (
            <React.Fragment key={group}>
              {i !== 0 && <CommandSeparator />}
              <CommandGroup heading={group} key={group}>
                {searchItems
                  .filter((item) => item.group === group)
                  .map((item) => (
                    <CommandItem className="!py-1.5" key={item.label} onSelect={() => setOpen(false)}>
                      {item.icon && <item.icon />}
                      <span>{item.label}</span>
                    </CommandItem>
                  ))}
              </CommandGroup>
            </React.Fragment>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}