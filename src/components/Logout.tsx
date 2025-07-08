"use client";
import React, { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { logoutHandler } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

function Logout() {
  const [loading, setIsLoading] = useState<boolean>(false);
  const { logout } = useAuth();
  const router = useRouter();
  const handleLogout = async () => {
    try {
      setIsLoading(true);
    } catch (error) {}
  };

  return <Button>Logout</Button>;
}

export default Logout;
