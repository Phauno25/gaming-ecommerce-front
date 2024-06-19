import React, { ReactNode } from "react";

const Tabs = ({ children }: { children: ReactNode }) => {
  return (
    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
      {children}
    </ul>
  );
};

export default Tabs;
