"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);
function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  useEffect(() => {
    let titleSplit: any = null;
    let subtitleSplit: any = null;
    if (titleRef.current) {
      titleSplit = new SplitText(titleRef.current, { type: "words,chars" });
      gsap.from(titleSplit.chars, {
        y: 100,
        opacity: 0,
        duration: 2,
        stagger: 0.05,
        ease: "bounce.out",
      });
    }

    if (subtitleRef.current) {
      subtitleSplit = new SplitText(subtitleRef.current, {
        type: "words,chars",
      });
      gsap.from(subtitleSplit.words, {
        y: 100,
        opacity: 0,
        duration: 2,
        stagger: 0.05,
        ease: "elastic.inOut",
      });
    }
    return () => {
      if (titleSplit) titleSplit.revert();
      if (subtitleSplit) subtitleSplit.revert();
    };
  }, []);
  return (
    <div className="flex flex-col items-center justify-center  h-screen relative">
      <div className="flex flex-col items-center justify-center gap-5">
        <p
          ref={titleRef}
          className="title tracking-wider font-extrabold text-5xl md:text-8xl text-blue-500 text-center"
        >
          GREG.
        </p>

        <p
          ref={subtitleRef}
          className="tracking-wider font-extrabold text-3xl md:text-5xl text-blue-500 text-center subtitle"
        >
          Post Sales Reinvented
        </p>
      </div>
    </div>
  );
}

export default Hero;
