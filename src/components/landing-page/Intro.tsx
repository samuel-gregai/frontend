"use client";
import React, { useRef, useState, useEffect } from "react";
import HighlightText from "../misc/highlight";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

function Intro() {
  const sectionRef = useRef(null);
  const [firstHighlightReady, setFirstHighlightReady] = useState(false);
  const [secondHighlightReady, setSecondHighlightReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // First container scrolls out on exit
  const containerY = useTransform(scrollYProgress, [0.8, 1], ["0%", "-100%"]);

  // Second highlight slides in from below and fades in
  const secondY = useTransform(scrollYProgress, [0.4, 0.7], ["100vh", "0vh"]);
  const secondOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

  // Trigger first highlight when pinned
  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (value > 0.1 && !firstHighlightReady) {
      setFirstHighlightReady(true);
    }

    // Trigger second highlight ONLY when it has fully reached destination
    if (value > 0.7 && !secondHighlightReady) {
      setSecondHighlightReady(true);
    }
  });

  return (
    <div ref={sectionRef} className="relative h-[200vh]">
      <motion.div
        className="sticky top-0 h-screen flex flex-col items-center justify-center gap-10 px-10"
        style={{ y: containerY }}
      >
        {/* First Highlight */}
        <HighlightText
          text="Account Management isn't meant to be paper work"
          className="heading-three"
          shouldAnimate={firstHighlightReady}
          transition={{ duration: 2 }}
        />

        {/* Second Highlight — only animates when fully arrived */}
        <motion.div style={{ y: secondY, opacity: secondOpacity }}>
          <HighlightText
            text="Yet... We spend 50% of our time doing it"
            className="heading-three"
            shouldAnimate={secondHighlightReady}
            transition={{ duration: 2 }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Intro;
