import ChatBot from "@/components/landing-page/Chatbot";
import ContactUs from "@/components/landing-page/Contact-Us";
import Demo from "@/components/landing-page/Demo";
import Hero from "@/components/landing-page/Hero";
import HeroSection from "@/components/landing-page/HeroPage";
import Intro from "@/components/landing-page/Intro";
import RegisterYourInterest from "@/components/landing-page/RegisterYourInterest";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <HeroSection />
      <ChatBot />
      {/* <Hero />
      <Intro />
      <Demo id="about" />
      <RegisterYourInterest id="register-interest" />
      <ContactUs id="contact" /> */}
    </main>
  );
}
