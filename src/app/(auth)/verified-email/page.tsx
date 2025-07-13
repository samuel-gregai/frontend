"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter } from "next/navigation";
function VerifiedEmail() {
  const router = useRouter();
  const handleNavigation = () => {
    router.push("/signin");
  };
  return (
    <div className="full-center">
      <div className="full-center">
        <p className="heading-three">
          Your email has successfully been verified
        </p>
        <Button onClick={handleNavigation}>Please login to continue</Button>
      </div>
    </div>
  );
}

export default VerifiedEmail;
