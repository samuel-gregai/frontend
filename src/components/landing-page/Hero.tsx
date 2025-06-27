"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function animateFromBottomToTop(target: gsap.TweenTarget) {
  gsap.fromTo(
    target,
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: target,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
      },
      ease: "back",
      duration: 2,
    }
  );
}

function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  useEffect(() => {
    if (titleRef.current) {
      animateFromBottomToTop(titleRef.current);
    }
    if (subtitleRef.current) {
      animateFromBottomToTop(subtitleRef.current);
    }
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
