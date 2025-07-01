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
        trigger: target as Element,
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
        <p ref={titleRef} className="heading-one text-blue-500 text-center">
          GREG.
        </p>

        <p ref={subtitleRef} className="heading-two text-blue-500 text-center ">
          Post Sales Reinvented
        </p>
      </div>
    </div>
  );
}

export default Hero;
