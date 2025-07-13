"use client";
import React from "react";
import { Button } from "../ui/button";
import { useAuth0 } from "@auth0/auth0-react";
function SignOutButton() {
  const { logout } = useAuth0();
  return (
    <Button
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Sign out
    </Button>
  );
}

export default SignOutButton;
