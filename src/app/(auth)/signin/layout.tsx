"use client";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, isLoading, user } = useAuth0();

  const router = useRouter();

  useEffect(() => {
    console.log(isAuthenticated);
    if (!isLoading && isAuthenticated && user) {
      router.replace("/actions");
    }
  }, [isAuthenticated, isLoading, user, router]);

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mx-auto mb-4"></div>
        </div>
      </div>
    );
  }

  if (isAuthenticated && user) {
    return null;
  }

  return <>{children}</>;
}
