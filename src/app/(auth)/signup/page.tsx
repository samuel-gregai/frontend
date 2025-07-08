import { AuthForm } from "@/components/forms/AuthForm";
import React from "react";

function SignUp() {
  return (
    <div className="flex justify-center items-center h-[100dvh] min-w-56 md:min-w-[500px] md:min-h-[500px]">
      <AuthForm />
    </div>
  );
}

export default SignUp;
