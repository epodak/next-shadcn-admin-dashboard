import {
  Home,
  ChartPie,
  Grid2X2,
  ChartLine,
  ShoppingBag,
  BookA,
  Forklift,
  Mail,
  MessageSquare,
  Calendar,
  Kanban,
  ReceiptText,
  Users,
  Lock,
  Fingerprint,
  SquareArrowUpRight,
  type LucideIcon,
} from "lucide-react";

export interface NavSubItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  comingSoon?: boolean;
  newTab?: boolean;
}

export interface NavMainItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  subItems?: NavSubItem[];
  comingSoon?: boolean;
  newTab?: boolean;
}

export interface NavGroup {
  id: number;
  label?: string;
  items: NavMainItem[];
}

export const sidebarItems: NavGroup[] = [
  {
    id: 1,
    label: "仪表板",
    items: [
      {
        title: "仪表板",
        url: "/dashboard",
        icon: Home,
        subItems: [
          { title: "默认", url: "/dashboard/default", icon: ChartPie },
          { title: "客户关系管理", url: "/dashboard", icon: Grid2X2, comingSoon: true },
          { title: "数据分析", url: "/dashboard/analytics", icon: ChartLine, comingSoon: true },
          { title: "电子商务", url: "/dashboard/e-commerce", icon: ShoppingBag, comingSoon: true },
          { title: "学院", url: "/dashboard/academy", icon: BookA, comingSoon: true },
          { title: "物流", url: "/dashboard/logistics", icon: Forklift, comingSoon: true },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "页面",
    items: [
      {
        title: "身份认证",
        url: "/auth",
        icon: Fingerprint,
        subItems: [
          { title: "登录 v1", url: "/auth/v1/login", newTab: true },
          { title: "注册 v1", url: "/auth/v1/register", newTab: true },
        ],
      },
      {
        title: "邮件",
        url: "/mail",
        icon: Mail,
        comingSoon: true,
      },
      {
        title: "聊天",
        url: "/chat",
        icon: MessageSquare,
        comingSoon: true,
      },
      {
        title: "日历",
        url: "/calendar",
        icon: Calendar,
        comingSoon: true,
      },
      {
        title: "看板",
        url: "/kanban",
        icon: Kanban,
        comingSoon: true,
      },
      {
        title: "发票",
        url: "/invoice",
        icon: ReceiptText,
        comingSoon: true,
      },
      {
        title: "用户",
        url: "/users",
        icon: Users,
        comingSoon: true,
      },
      {
        title: "角色",
        url: "/roles",
        icon: Lock,
        comingSoon: true,
      },
    ],
  },
  {
    id: 3,
    label: "其他",
    items: [
      {
        title: "其他",
        url: "/others",
        icon: SquareArrowUpRight,
        comingSoon: true,
      },
    ],
  },
];