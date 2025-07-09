"use client";
import React, { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { logoutHandler } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import Spinner from "./ui/spinner";
import { toast } from "sonner";
function Logout() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const { logout } = useAuth();
  const router = useRouter();
  const handleLogout = async () => {
    try {
      setIsLoading(true);
      const response = await logoutHandler();
      if (response.success) {
        toast.success(response.data?.message || "Logout successful");
      } else {
        toast.error(response?.data?.message);
      }
      logout();
      router.push("/signin");
      setIsLoading(false);
    } catch (error) {
      console.error("error logging out", error);
      setIsLoading(false);
    }
  };

  return (
    <Button
      className="bg-transparent hover:bg-gray-600"
      onClick={handleLogout}
      disabled={isLoading}
    >
      {isLoading ? <Spinner /> : "Signout"}
    </Button>
  );
}

export default Logout;
