"use client";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinSchema } from "@/schemas";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { LoadingSpinner } from "../ui/loading-spinner";
import { forgotPasswordHandler } from "@/services/auth.service";
import usePersistTimer from "@/helpers/Timer";

interface EmailI {
  email: string;
}

function ForgotPasswordForm() {
  const emailOnlySchema = signinSchema.pick({ email: true });

  const form = useForm<EmailI>({
    resolver: zodResolver(emailOnlySchema),
    defaultValues: {
      email: "",
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting, errors },
  } = form;
  const onSubmit = async (email: EmailI) => {
    try {
      const response = await forgotPasswordHandler(email);
      console.log(response);
    } catch (error) {
      console.error("error sending password reest link", error);
    }
  };

  const timer = usePersistTimer();
  return (
    <Form {...form}>
      <form
        className="w-full flex flex-col gap-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="m@example.com"
                  // type="email"
                  {...field}
                  disabled={isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        {/* <div>
          <span className="text-gray-500">
            Didn't receive email? Resend in {timer}
          </span>
        </div> */}
        <Button disabled={isSubmitting} className="hover:cursor-pointer">
          {isSubmitting ? <LoadingSpinner /> : "Submit"}
        </Button>
        {/* <Button
          className="bg-red-300 hover:bg-red-500 hover:cursor-pointer"
          onClick={handleCancelAction}
        >
          Cancel
        </Button> */}
      </form>
    </Form>
  );
}

export default ForgotPasswordForm;
