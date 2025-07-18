"use client";
import React from "react";
import { Button } from "../ui/button";
import { useAuth0 } from "@auth0/auth0-react";
function SignInButton() {
  const { loginWithPopup } = useAuth0();
  return <Button onClick={() => loginWithPopup()}>Signin</Button>;
}

export default SignInButton;
