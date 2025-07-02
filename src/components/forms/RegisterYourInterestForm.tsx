"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { RegisterInterestHandler } from "@/services/wait-list.service";
import { toast } from "sonner";

function RegisterYourInterestForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [succesMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await RegisterInterestHandler(email);
      console.log("response from the UI", response);
      if (response.success) {
        setSuccess(true);
        setSuccessMessage(response.data.message);
        toast.success(response.data.message);
        setEmail("");
      } else {
        setError(response.message || "Registration failed");
        toast.error(response.message || "Registration failed");
      }
    } catch (err: unknown) {
      const errMsg =
        err instanceof Error && err.message
          ? err.message
          : "Something went wrong";
      setError(errMsg);
      toast.warning(errMsg);
    } finally {
      setLoading(false);
    }
  }
  console.log(error);
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Registering..." : "Register your interest"}
          </Button>
        </div>
        {success && <p className="text-green-600">{succesMessage}</p>}
        {error && <p className="text-red-600">{error}</p>}
      </div>
    </form>
  );
}

export default RegisterYourInterestForm;
