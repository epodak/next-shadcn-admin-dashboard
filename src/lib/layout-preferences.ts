// 布局偏好设置工具函数

export const allowedVariants = ["inset", "sidebar", "floating"] as const;
export type SidebarVariant = (typeof allowedVariants)[number];

export const allowedCollapsibles = ["icon", "offcanvas"] as const;
export type SidebarCollapsible = (typeof allowedCollapsibles)[number];

export const allowedContentLayouts = ["centered", "full-width"] as const;
export type ContentLayout = (typeof allowedContentLayouts)[number];

// 获取侧边栏变体配置
export function getSidebarVariant(value: string | undefined): SidebarVariant {
  return allowedVariants.includes(value as SidebarVariant) ? (value as SidebarVariant) : "inset";
}

// 获取侧边栏可折叠配置
export function getSidebarCollapsible(value: string | undefined): SidebarCollapsible {
  return allowedCollapsibles.includes(value as SidebarCollapsible) ? (value as SidebarCollapsible) : "icon";
}

// 获取内容布局配置
export function getContentLayout(value: string | undefined): ContentLayout {
  return allowedContentLayouts.includes(value as ContentLayout) ? (value as ContentLayout) : "centered";
}