import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

export type TabItemProps = {
  children: ReactNode;
  href?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
