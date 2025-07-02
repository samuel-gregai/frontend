"use client";
import React, { useEffect } from "react";
import { useAnimate, stagger } from "motion/react";
import { FeatureTitle } from "./title";
import VoiceOver from "./VoiceOver";
import { useFeatureStore } from "@/store/animate";
import { useHidePageOverflow } from "@/utils/toggle-page-overflow";
import { useEscapePress } from "@/utils/use-escape-press";

function Feature() {
  const features = [
    {
      title: " Let Greg, your AI-powered assistant, handle the admin chaos",
      id: "chaos",
    },
    {
      title:
        " So you can focus on what actually moves the needle: your customers.",
      id: "customers",
    },
    {
      title:
        "Get in line before Greg starts ghosting humans. Early users get first dibs, feedback perks, and eternal glory.",
      id: "glory",
    },
  ];
  const [scope, animate] = useAnimate();
  const fullscreenFeature = useFeatureStore((state) => state.fullscreenFeature);
  const lastFullscreenFeature = useFeatureStore(
    (state) => state.lastFullscreenFeature
  );
  const setFullscreenFeature = useFeatureStore(
    (state) => state.setFullscreenFeature
  );

  const onEscapePress = () => {
    if (fullscreenFeature) setFullscreenFeature(null);
  };

  useEscapePress(onEscapePress);
  useHidePageOverflow(!!fullscreenFeature);

  useEffect(() => {
    if (fullscreenFeature) {
      animate([
        [
          ".feature-title",
          { opacity: 0, x: "-200px" },
          { duration: 0.3, delay: stagger(0.05) },
        ],
        [
          `.visual-${lastFullscreenFeature}`,
          { opacity: 1, scale: 1, pointerEvents: "auto" },
          { at: "<" },
        ],
        [".active-card .gradient", { opacity: 0, scale: 0 }, { at: "<" }],
        [".active-card .show-me-btn", { opacity: 0 }, { at: "<" }],
        [
          ".back-to-site-btn",
          { opacity: 1, y: "0px" },
          { at: "<", duration: 0.3 },
        ],
      ]);
    } else {
      animate([
        [
          ".feature-title",
          { opacity: 1, x: "0px" },
          { duration: 0.3, delay: stagger(0.05) },
        ],
        [
          `.visual-${lastFullscreenFeature}`,
          { opacity: 0, scale: 0.75, pointerEvents: "none" },
          { at: "<" },
        ],
        [".active-card .gradient", { opacity: 1, scale: 1 }, { at: "<" }],
        [
          ".back-to-site-btn",
          { opacity: 0, y: "300px" },
          { at: "<", duration: 0.3 },
        ],
        [".active-card .show-me-btn", { opacity: 1 }],
      ]);
    }
  }, [animate, fullscreenFeature, lastFullscreenFeature]);
  return (
    <div>
      <div ref={scope}>
        <div className="flex w-full items-start gap-20">
          <div className="w-full py-[50vh]">
            <ul className="flex flex-col gap-10">
              {features.map((feature) => (
                <li key={feature.id}>
                  <FeatureTitle id={feature.id}>{feature.title}</FeatureTitle>
                </li>
              ))}
            </ul>
          </div>
          <div className="sticky top-50 flex  w-full items-center justify-center">
            <div className="relative aspect-square w-full rounded-2xl bg-gray-100 [&:has(>_.active-card)]:bg-transparent">
              <VoiceOver />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
