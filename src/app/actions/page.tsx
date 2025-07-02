import Chatbox from "@/components/Chatbox";
import { useAuth } from "@/contexts/AuthContext";
function Page() {
  const { user } = useAuth();
  console.log("userrrrr", user);
  return (
    <div className="flex justify-end p-2 items-end h-screen">
      <p></p>
      <Chatbox />
    </div>
  );
}
export default Page;
