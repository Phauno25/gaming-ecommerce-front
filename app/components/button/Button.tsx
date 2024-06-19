import React from "react";
import { ButtonPropTypes } from "./types";
import clsx from "clsx";
import Icon from "../icon/Icon";
import { useRouter } from "next/navigation";

const variantStyles = {
  fill: "border-2 border-orange-400 bg-orange-400 text-neutral-950 font-bold rounded-md",
  outline:
    "border-2 border-orange-400 bg-transparent text-orange-400 font-bold rounded-md",
  link: "bg-transparent text-orange-400 font-bold rounded-md",
};
const sizeStyles = {
  xs: "px-2 py-2 text-xs font-medium",
  sm: "px-2 py-2 text-sm font-medium",
  md: "px-2 py-2 text-sm font-medium",
  lg: "px-4 py-3 text-base font-medium",
};

const Button: React.FC<ButtonPropTypes> = ({
  disabled,
  variant = "fill",
  size = "md",
  iconName,
  iconPosition = "left",
  iconColor,
  children,
  href,
  ...props
}) => {
  const router = useRouter();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    props.onClick && props.onClick(e);
    if (href) {
      router.push(href);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={clsx(
        "flex justify-evenly items-center",
        variantStyles[variant],
        sizeStyles[size],
        iconPosition === "right" ? "flex-row-reverse" : "flex-row"
      )}
      {...props}
    >
      {iconName && (
        <Icon
          variant={variant}
          name={iconName}
          color={iconColor || "inherit"}
        />
      )}
      {children}
    </button>
  );
};

export default Button;
