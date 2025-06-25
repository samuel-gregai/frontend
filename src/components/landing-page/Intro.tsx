import React from "react";
import { TextReveal } from "../magicui/text-reveal";
import HighlightText from "../misc/highlight";
import { BoxReveal } from "../magicui/box-reveal";

function Intro() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-10">
        <BoxReveal>
          <p className="heading-three">
            Account Management isn't meant to be paper work
          </p>
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
