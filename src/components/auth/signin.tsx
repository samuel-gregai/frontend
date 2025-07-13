"use client";
import React from "react";
import { Button } from "../ui/button";
import { useAuth0 } from "@auth0/auth0-react";
function SignInButton() {
  const { loginWithRedirect } = useAuth0();
  return <Button onClick={() => loginWithRedirect()}>Signin</Button>;
}

export default SignInButton;
