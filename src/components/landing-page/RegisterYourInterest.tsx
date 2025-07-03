import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import RegisterYourInterestForm from "../forms/RegisterYourInterestForm";
interface RegisterInterestPageProps {
  id?: string;
}
function RegisterYourInterest({ id }: RegisterInterestPageProps) {
  return (
    <div
      className="flex flex-col md:flex-row items-center md:min-h-[80vh] justify-center  gap-5 px-4 py-10"
      id={id}
    >
      {/* <section className="flex-1 flex items-center justify-center w-full md:w-auto mb-6 md:mb-0">
        <h3 className="text-center text-2xl md:text-3xl font-semibold">
          Register your interest
        </h3>
      </section> */}
      <div className="flex-1 flex items-center justify-center">
        <Card className=" flex items-center justify-center mx-auto gap-5 md:min-w-fit lg:min-w-lg">
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
