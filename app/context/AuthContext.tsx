"use client";
import React, { createContext, ReactNode } from "react";

/* type AuthType = {
  accessToken: string | null | undefined;
  user: string | null | undefined;
  login: string | null | undefined;
  logout: string | null | undefined;
  updateUser: string | null | undefined;
};
 */
export const AuthContext = createContext({});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const sessionData = {
    accessToken: null,
    user: null,
    login: null,
    logout: null,
    updateUser: null,
  };
  return (
    <AuthContext.Provider value={sessionData}>{children}</AuthContext.Provider>
  );
};
