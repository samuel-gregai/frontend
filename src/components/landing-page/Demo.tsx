"use client";
import React, { useEffect } from "react";
import VoiceOver from "../misc/VoiceOver";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

interface AboutPageProps {
  id: string;
}
function About({ id }: AboutPageProps) {
  useEffect(() => {
    gsap.utils.toArray(".text-in").forEach((el) => {
      gsap.fromTo(
        el as Element,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: el as Element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
          ease: "elastic",
          duration: 2,
          stagger: 4,
        }
      );
    });
  }, []);

  return (
    <div
      className="h-auto min-h-screen flex flex-col md:flex-row justify-center items-center px-4 md:px-20 gap-20 md:gap-0"
      id={id}
    >
      <div className="md:flex-1 flex items-center flex-col gap-10 md:gap-20  w-full md:w-auto">
        <h2 className="text-in heading-three text-center md:text-left">
          Let Greg, your AI-powered assistant, handle the admin chaos{" "}
        </h2>
        <h2 className="text-in heading-three text-center md:text-left">
          So you can focus on what actually moves the needle: your customers.
        </h2>
        <h2 className="text-in heading-three text-center md:text-left">
          Get in line before Greg starts ghosting humans.
          <br />
          Early users get first dibs, feedback perks, and eternal glory.
        </h2>
      </div>
      <section className="flex-1">Hello my name is Samuel</section>
    </div>
  );
}

export default About;
