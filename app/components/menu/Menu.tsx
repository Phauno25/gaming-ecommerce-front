import React from "react";
import { MenuProps } from "./types";
import Icon from "../icon/Icon";

const Menu: React.FC<MenuProps> = ({ data }) => {
  return (
    <div className=" no-underline items-center justify-between md:flex">
      <ul className="flex font-medium md:flex-row md:mt-0 gap-6">
        {data.map((item) => (
          <li>
            <a
              href="#"
              className="flex items-center text-sm py-2 px-3 no-underline gap-2"
              aria-current="page"
            >
              <img
                alt={item.attributes.title + " logo"}
                className=" w-5 h-5 brightness-0 invert"
                src={`http://localhost:1337${item.attributes.icon.data.attributes.url}`}
              />

              {item.attributes.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
