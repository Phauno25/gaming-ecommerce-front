import Link from "next/link";
import React from "react";
import { TabItemProps } from "./types";

const TabItem = ({ children, href, onClick, ...props }: TabItemProps) => {
  return (
    <li className="me-2">
      {href ? (
        <Link
          href={href}
          aria-current="page"
          className="flex items-center justify-center gap-1 p-4 text-neutral-50 rounded-t-lg active:text-orange-400 hover:bg-gray-800 hover:text-orange-300"
        >
          {children}
        </Link>
      ) : (
        <button
          onClick={onClick}
          aria-current="page"
          className="flex items-center justify-center gap-1 p-4 text-neutral-50 rounded-t-lg active:text-orange-400 hover:bg-gray-800 hover:text-orange-300"
        >
          {children}
        </button>
      )}
    </li>
  );
};

export default TabItem;
