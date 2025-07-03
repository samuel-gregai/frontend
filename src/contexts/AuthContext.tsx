"use client";

import React, { useState, useEffect, createContext, useContext } from "react";
import { AuthContextType, AuthProviderProps, UserType } from "@/types";
import { useJwtAuth } from "@/hooks/useJWTAuth";
import { useSessionAuth } from "@/hooks/useSessionAuth";
import { useInitialAuthBootstrap } from "@/hooks/useInitialAuthBootstrap";
import { useRouter } from "next/navigation";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserType | null>(null);
  const [authMethod, setAuthMethod] = useState<"jwt" | "session" | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const { login, refreshToken } = useJwtAuth(setUser, setAuthMethod);
  const { verifySession } = useSessionAuth(setUser, setAuthMethod);
  const bootstrap = useInitialAuthBootstrap(setUser, setAuthMethod);
  const router = useRouter();

  useEffect(() => {
    setIsLoading(true);

    bootstrap(); // You can log inside bootstrap if needed

    (async () => {
      const sessionOK = await verifySession();

      if (!sessionOK) {
        setUser(null);
        setAuthMethod(null);
      }

      setIsLoading(false);
    })();
  }, [bootstrap, verifySession]);

  const logout = async () => {
    localStorage.removeItem("access_token");
    setUser(null);
    setAuthMethod(null);
    router.push("/");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        authMethod,
        login,
        signup: login,
        logout,
        refreshToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};
