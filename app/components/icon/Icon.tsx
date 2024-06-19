import React from "react";
import { IconProps } from "./types";

const variantClass = {
  fill: "py-0 px-0 material-icons",
  outline: "py-0 px-0 material-icons-outlined",
};

const Icon: React.FC<IconProps> = ({
  variant = "fill",
  color = "inherit",
  name,
}) => {
  return (
    <span className={variantClass[variant]} style={{ color }}>
      {name}
    </span>
  );
};

export default Icon;
