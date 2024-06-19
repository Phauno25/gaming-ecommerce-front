"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "../components/button/Button";
import Menu from "../components/menu/Menu";
import { platformService } from "../platforms/api/platform";

const NavBar = () => {
  const [platforms, setPlatforms] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const platformsData = await platformService.getAll();
        setPlatforms(platformsData);
        console.log(platformsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full flex justify-between items-center px-6 py-4 bg-neutral-800 border-b-2 border-orange-950">
      <img className=" w-[150px] h-auto" alt="logo" src="/logo.png" />
      {platforms && <Menu data={platforms} />}
      <div className=" flex gap-4">
        <Button size="sm" iconName="shopping_cart" />
        <Button href="/account" size="sm" iconName="person" variant="outline" />
      </div>
    </div>
  );
};

export default NavBar;
