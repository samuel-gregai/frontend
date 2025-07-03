"use client";
import React, { useRef, useState, useEffect } from "react";
import HighlightText from "../misc/highlight";
import { motion, useInView } from "framer-motion";

function Intro() {
  const firstRef = useRef(null);
  const isFirstInView = useInView(firstRef, {
    margin: "-50% 0px -50% 0px",
    once: true,
  });

  const [showSecond, setShowSecond] = useState(false);
  const [secondHighlightReady, setSecondHighlightReady] = useState(false);
  const [firstHighlightReady, setFirstHighlightReady] = useState(false);

  useEffect(() => {
    if (isFirstInView) {
      // Start first highlight immediately when in view
      setFirstHighlightReady(true);
    }
  }, [isFirstInView]);

  useEffect(() => {
    if (firstHighlightReady) {
      // Wait for first highlight to finish (2s duration) before starting second
      setTimeout(() => {
        setShowSecond(true);
      }, 2000);
    }
  }, [firstHighlightReady]);

  return (
    <div className="flex flex-col items-center justify-center gap-10 min-h-[70vh] px-10 overflow-hidden">
      {/* FIRST Highlight (triggered normally but delayed) */}
      <HighlightText
        ref={firstRef}
        text="Account Management isn't meant to be paper work"
        className="heading-three"
        shouldAnimate={firstHighlightReady}
        transition={{ duration: 2 }}
      />

      {/* SECOND Highlight (waits for slide to finish) */}
      <motion.div
        initial={{ y: "100vh", opacity: 0 }}
        animate={showSecond ? { y: 0, opacity: 1 } : {}}
        transition={{ ease: "easeOut", duration: 2 }}
        onAnimationComplete={() => setSecondHighlightReady(true)} // 👈 This is the key!
      >
        <HighlightText
          text="Yet... We spend 50% of our time doing it"
          className="heading-three"
          shouldAnimate={secondHighlightReady} // 👈 Controlled!
          transition={{ duration: 2 }}
        />
      </motion.div>
    </div>
  );
}

export default Intro;
