"use client";
import Chatbox from "@/components/Chatbox";
import { useAuth0, User } from "@auth0/auth0-react";
import { transformUserData } from "@/lib/transformUserData";
function Page() {
  const { user } = useAuth0();

  if (!user) {
    return <div>Loading...</div>;
  }

  const userData = transformUserData(user);
  console.log(userData);

  return (
    <div className="h-[90] w-screen flex flex-col mt-40">
      <div>
        <p>{`Hello and welcome ${userData.name}`}</p>
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
