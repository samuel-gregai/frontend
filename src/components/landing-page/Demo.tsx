"use client";
import React, { useEffect, useRef } from "react";
import VoiceOver from "../misc/VoiceOver";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function Demo() {
  const addToRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (addToRef.current) {
      const h2s = addToRef.current.querySelectorAll("h2");
      gsap.from(h2s, {
        y: 100,
        scrollTrigger: {
          trigger: h2s,
          toggleActions: "restart reverse none none",
        },
        ease: "back",
        duration: 3,
        stagger: 0.2,
      });
    }
  }, []);
  return (
    <div className=" h-screen flex justify-center items-center flex-row px-20">
      <section
        className="flex-1 flex items-center flex-col gap-20 min-h-[500px]"
        ref={addToRef}
      >
        <h2 className="heading-three">
          Let Greg, your AI-powered assistant, handle the admin chaos{" "}
        </h2>
        <h2 className="heading-three">
          So you can focus on what actually moves the needle: your customers.
        </h2>
        <h2 className="heading-three">
          Get in line before Greg starts ghosting humans.
          <br />
          Early users get first dibs, feedback perks, and eternal glory.
        </h2>
      </section>
      <section className=" flex-1">
        <VoiceOver />
      </section>
    </div>
  );
}

export default Demo;
