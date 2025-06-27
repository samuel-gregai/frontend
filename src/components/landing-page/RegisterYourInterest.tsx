import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import RegisterYourInterestForm from "../forms/RegisterYourInterestForm";

function RegisterYourInterest() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-5 px-4 py-10">
      <section className="flex-1 flex items-center justify-center w-full md:w-auto mb-6 md:mb-0">
        <h3 className="text-center text-2xl md:text-3xl font-semibold">
          Register your interest
        </h3>
      </section>
      <div className="flex-1 flex items-center justify-center">
        <Card className=" flex items-center justify-center mx-auto gap-5 min-w-lg">
          <div className="w-full max-w-md p-4 flex flex-col gap-5">
            <CardHeader>
              <CardTitle>Register your interest</CardTitle>
              <CardDescription>
                Enter your email below to continue
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RegisterYourInterestForm />
            </CardContent>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default RegisterYourInterest;
