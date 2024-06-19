"use client";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { AuthType } from "../auth/types/types";

export const AuthContext = createContext<AuthType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const loggedUser = localStorage.getItem(process.env.NEXT_PUBLIC_AUTH_USER!);
    if (loggedUser) {
      const parsedUser = JSON.parse(loggedUser);
      setUser(parsedUser);
    }
  }, []);

  const sessionData: AuthType = {
    user,
  };

  return (
    <AuthContext.Provider value={sessionData}>{children}</AuthContext.Provider>
  );
};
