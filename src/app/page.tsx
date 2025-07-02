import ContactUs from "@/components/landing-page/Contact-Us";
import Demo from "@/components/landing-page/Demo";
import Hero from "@/components/landing-page/Hero";
import Intro from "@/components/landing-page/Intro";
import RegisterYourInterest from "@/components/landing-page/RegisterYourInterest";
import Feature from "@/components/misc/Feature";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Intro />
      <Demo id="about" />
      {/* <Feature /> */}
      <RegisterYourInterest id="register-interest" />
      <ContactUs id="contact" />
    </main>
  );
}
