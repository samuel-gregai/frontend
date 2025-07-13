"use client";
import React, { useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";

function layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export default layout;
