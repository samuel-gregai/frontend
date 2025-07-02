"use client";
import Chatbox from "@/components/Chatbox";
import { useAuth } from "@/contexts/AuthContext";
function Page() {
  const { user } = useAuth();
  const email = user?.email;
  const firstName = user?.firstName;
  const profilePicture = user?.profilePicture;

  return (
    <div className="h-[90] w-screen flex flex-col mt-40">
      <div>
        <p>{`Hello and welcome ${firstName}`}</p>
      </div>
      <div className="flex-1 flex items-end justify-end p-4">
        <div className="shadow-lg p-3 animate-in fade-in flex items-end justify-end">
          <Chatbox />
        </div>
      </div>
    </div>
  );
}
export default Page;
