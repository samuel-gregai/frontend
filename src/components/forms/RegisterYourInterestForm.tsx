"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { RegisterInterestHandler } from "@/services/wait-list.service";

function RegisterYourInterestForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await RegisterInterestHandler(email);

      if (response.success) {
        setSuccess(true);
        setEmail("");
      } else {
        setError(response.message || "Registration failed");
      }
    } catch (err: unknown) {
      setError(
        err instanceof Error && err.message
          ? err.message
          : "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  }

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
        {success && (
          <p className="text-green-600">
            Successfully registered! Check your email for confirmation.
          </p>
        )}
        {error && <p className="text-red-600">{error}</p>}
      </div>
    </form>
  );
}

export default RegisterYourInterestForm;
