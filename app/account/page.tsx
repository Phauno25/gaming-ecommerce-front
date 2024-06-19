"use client";
import React from "react";
import { useAuth } from "../hooks/useAuth";
import Icon from "../components/icon/Icon";
import Tabs from "../components/tabs/Tabs";
import TabItem from "../components/tabs/TabItem";

const Page = () => {
  const { user } = useAuth();
  const userDate = new Date(user?.createdAt!).toLocaleDateString("es");
  return null;
};

export default Page;
