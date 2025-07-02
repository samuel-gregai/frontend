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
    <div className="h-screen">
      <div>
        <p>{`Hello and welcome ${firstName}`}</p>
      </div>
      <div className="flex justify-end p-2 items-end ">
        <Chatbox />
      </div>
    </div>
  );
}
export default Page;
