import { useCallback } from "react";
import { authInstance } from "@/lib/axios";
import { UserType } from "@/types";

export function useSessionAuth(setUser: (user: UserType | null) => void, setMethod: (method: "jwt" | "session" | null) => void) {
  const verifySession = useCallback(async () => {
    try {
      const response = await authInstance.get("/api/v1/users/me", {
        withCredentials: true,
      });
  
      console.log("Session auth response:", response); // 🔍 LOG
  
      if (response.status === 200 && response.data?.data) {
        const userData = {
          id: response.data.data.id || response.data.data.sub,
          email: response.data.data.email ?? "",
          name: response.data.data.name,
          ...response.data.data,
        };
        console.log("Setting userData:", userData); // 🔍 LOG
        setUser(userData);
        setMethod("session");
        return true;
      }
    } catch (err) {
      console.error("Session auth failed", err);
    }
    return false;
  }, [setUser, setMethod]);
  

  return { verifySession };
}
