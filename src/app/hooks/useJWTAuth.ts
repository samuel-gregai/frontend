import { useCallback } from "react";
import { decodeJWT, isValidToken } from "@/lib/jwt";
import { authInstance } from "@/lib/axios";
import { UserType } from "@/types";

export function useJwtAuth(setUser: (user: UserType | null) => void, setMethod: (method: "jwt" | "session" | null) => void) {
  const login = useCallback((token: string) => {
    localStorage.setItem("access_token", token);
    const payload = decodeJWT(token);
    if (payload) {
      const userData = {
        id: payload.sub,
        email: payload.email ?? "",
        name: payload.name,
        ...payload,
      };
      setUser(userData);
      setMethod("jwt");
    }
  }, [setUser, setMethod]);

  const refreshToken = useCallback(async () => {
    const token = localStorage.getItem("access_token");
    if (!token) return false;

    try {
      const res = await authInstance.post("/auth/refresh-token", {}, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      });

      if (res.status === 200 && res.data.data?.token) {
        login(res.data.data.token);
        return true;
      }
    } catch (e) {
      console.error("Token refresh failed:", e);
    }
    return false;
  }, [login]);

  return { login, refreshToken };
}
