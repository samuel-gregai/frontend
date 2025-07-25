import ChatBot from "@/components/landing-page/Chatbot";
import HeroSection from "@/components/landing-page/HeroPage";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <HeroSection />
      <ChatBot />
    </main>
  );
}
