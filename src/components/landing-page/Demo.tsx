"use client";
import React, { useEffect, useRef } from "react";
import VoiceOver from "../misc/VoiceOver";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

interface AboutPageProps {
  id: string;
}

function About({ id }: AboutPageProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const voiceRef = useRef(null);
  const textRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: pinRef.current,
          start: "top top",
          end: "+=200%",
          scrub: true,
          anticipatePin: 1,
          markers: false,
        },
      });

      // Step 1: VoiceOver fades in
      tl.fromTo(
        voiceRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        0
      );

      // Step 2: Each h2 fades in one by one
      textRefs.current.forEach((el) => {
        tl.fromTo(
          el,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          },
          "+=0.5"
        );
      });

      // Step 3: Scroll everything upward
      tl.to(
        pinRef.current,
        {
          y: -300,
          ease: "none",
        },
        "+=1"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id={id} ref={sectionRef} className="relative">
      <div
        ref={pinRef}
        className="h-screen flex flex-col md:flex-row justify-center items-center px-4 md:px-20 gap-20 md:gap-0"
      >
        <div className="md:flex-1 flex items-center flex-col gap-10 md:gap-20 w-full md:w-auto">
          {[
            "Let Greg, your AI-powered assistant, handle the admin chaos",
            "So you can focus on what actually moves the needle: your customers.",
            "Get in line before Greg starts ghosting humans. Early users get first dibs, feedback perks, and eternal glory.",
          ].map((text, i) => (
            <h2
              key={i}
              className="text-in heading-three text-center md:text-left"
              ref={(el) => {
                if (el) textRefs.current[i] = el;
              }}
            >
              {text}
            </h2>
          ))}
        </div>
        <section className="flex-1" ref={voiceRef}>
          <VoiceOver />
        </section>
      </div>
    </div>
  );
}

export default About;
