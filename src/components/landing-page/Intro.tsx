import React from "react";
import { TextReveal } from "../magicui/text-reveal";
import HighlightText from "../misc/highlight";
import { BoxReveal } from "../magicui/box-reveal";

function Intro() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-10  h-screen">
        <BoxReveal>
          <HighlightText
            text="Account Management isn't meant to be paper work"
            className="heading-three"
          />
        </BoxReveal>
        <HighlightText
          text="Yet... We spend 50% of our time doing it"
          className="heading-three"
        />
      </div>
    </div>
  );
}

export default Intro;
