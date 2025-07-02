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
    <div className="h-screen w-screen flex flex-col">
      <div>
        <p>{`Hello and welcome ${firstName}`}</p>
      </div>
      <div className="flex-1 flex items-end justify-end p-4">
        <div className="bg-primary/80 border-2 border-primary rounded-xl shadow-lg p-3 animate-in fade-in flex items-end justify-end">
          <Chatbox />
        </div>
      </div>
    </div>
  );
}
export default Page;
