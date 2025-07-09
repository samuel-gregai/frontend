import React from "react";
import ForgotPasswordForm from "@/components/forms/ForgotPasswordForm.";
function page() {
  return (
    <div className="h-[80vh] flex items-center justify-center">
      <div className="flex flex-col gap-5 items-center justify-center w-[400px] border border-gray-500 rounded-2xl p-5">
        <header className="flex flex-col gap-5 items-center">
          <p className="heading-three">Reset Password</p>
          <p className="font-thin text-sm text-gray-400">
            Enter your user account's verified email address and we will send
            you a password reset link
          </p>
        </header>
        <main className="flex flex-col w-full ">
          <ForgotPasswordForm />
        </main>
      </div>
    </div>
  );
}

export default page;
