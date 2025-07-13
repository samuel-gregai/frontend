import React from "react";
import { Button } from "@/components/ui/button";

function ConfirmEmail() {
  return (
    <div className="h-[90vh] flex items-center justify-center">
      <div className="flex flex-col gap-10">
        <header>
          <h2 className="heading-three">
            Thank you creating an account with Greg
          </h2>
        </header>
        <main className="flex items-center flex-col gap-0">
          <p>A confirmation email has been sent to your email.</p>
          <p>Click on the link in your email to verify your email account</p>
        </main>
        <Button>Verify email</Button>
      </div>
    </div>
  );
}

export default ConfirmEmail;
