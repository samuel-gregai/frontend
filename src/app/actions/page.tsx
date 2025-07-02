"use client";
import Chatbox from "@/components/Chatbox";
import { useAuth } from "@/contexts/AuthContext";
function Page() {
  const { user } = useAuth();
  const email = user?.email;
  const firstName = user?.name;
  const profilePicture = user?.profilePicture;
  console.log("userrrrr", user);
  return (
    <div className="flex justify-end p-2 items-end h-screen">
      <p>Hello and welcome ${firstName}</p>
      <Chatbox />
    </div>
  );
}
export default Page;
