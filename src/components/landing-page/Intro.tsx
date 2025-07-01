import React from "react";
import HighlightText from "../misc/highlight";
import { BoxReveal } from "../magicui/box-reveal";

function Intro() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-10  h-screen">
        <HighlightText
          text="Account Management isn't meant to be paper work"
          className="heading-two"
          transition={{ duration: 2 }}
        />

        <HighlightText
          text="Yet... We spend 50% of our time doing it"
          className="heading-two"
          transition={{ delay: 2, duration: 2 }}
        />
      </div>
    </div>
  );
}

export default Intro;
