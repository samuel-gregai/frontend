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
    console.log("[AuthProvider] Starting auth bootstrap + session check...");
    setIsLoading(true);

    bootstrap(); // You can log inside bootstrap if needed

    (async () => {
      const sessionOK = await verifySession();
      console.log("[AuthProvider] verifySession result:", sessionOK);

      if (!sessionOK) {
        console.log(
          "[AuthProvider] No valid session found. Resetting auth state."
        );
        setUser(null);
        setAuthMethod(null);
      } else {
        console.log("[AuthProvider] Session verified successfully.");
      }

      setIsLoading(false);
    })();
  }, [bootstrap, verifySession]);

  const logout = async () => {
    console.log("[AuthProvider] Logging out...");
    localStorage.removeItem("access_token");
    setUser(null);
    setAuthMethod(null);
    router.push("/signin");
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
