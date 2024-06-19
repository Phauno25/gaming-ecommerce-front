import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { AuthType } from "../auth/types/types";
export const useAuth = (): AuthType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
