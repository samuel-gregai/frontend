import { useCallback } from "react";
import { isValidToken, decodeJWT } from "@/lib/jwt";
import { UserType } from "@/types";

export function useInitialAuthBootstrap(setUser: (user: UserType | null) => void, setMethod: (method: "jwt" | "session" | null) => void) {
  return useCallback(() => {
    const token = localStorage.getItem("access_token");
    if (token && isValidToken(token)) {
      const payload = decodeJWT(token);
      if (payload) {
        setUser({
          id: payload.sub,
          email: payload.email ?? "",
          name: payload.name,
          ...payload,
        });
        setMethod("jwt");
        return;
      }
    }
  }, [setUser, setMethod]);
}
