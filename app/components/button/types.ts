import { ButtonHTMLAttributes } from "react";
import { UrlObject } from "url";

export type ButtonPropTypes = {
  variant?: "fill" | "outline";
  size?: "xs" | "sm" | "md" | "lg";
  iconPosition?: "left" | "right";
  iconColor?: string;
  iconName?: string;
  href?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
