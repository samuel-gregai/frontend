import { useCallback } from "react";
import { authInstance } from "@/lib/axios";
import { UserType } from "@/types";

export function useSessionAuth(setUser: (user: UserType | null) => void, setMethod: (method: "jwt" | "session" | null) => void) {
  const verifySession = useCallback(async () => {
    try {
        const res = await fetch("/api/users/me", {
            method: "GET",
            credentials: "include", // 👈 this tells browser to send cookies
            headers: {
              "Content-Type": "application/json",
            },
          });
          if(res.status === 200) return true
          
    //   if (res.status === 200 && res.data.data) {
    //     const userData = {
    //       id: res.data.data.id || res.data.data.sub,
    //       email: res.data.data.email ?? "",
    //       name: res.data.data.name,
    //       ...res.data.data,
    //     };
    //     setUser(userData);
    //     setMethod("session");
    //     return true;
    //   }
    } catch (err) {
      console.error("Session auth failed", err);
    }
    return false;
  }, [setUser, setMethod]);

  return { verifySession };
}
