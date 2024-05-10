import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-screen h-screen flex bg-neutral-800">
      <div className="basis-1/2 h-full">
        <div className="w-full flex flex-row">
          <Link href={"/"} className="p-4">
            <Image alt="logo" width={200} height={50} src="/logo.png" />
          </Link>
        </div>
        <div className="flex justify-center items-center h-full">
          {children}
        </div>
      </div>

      <div className="basis-1/2">
        <picture>
          <img
            src="/sign-wallpaper.jpg"
            alt="wallpaper"
            className="object-cover h-full"
          />
        </picture>
      </div>
    </div>
  );
};

export default AuthLayout;
