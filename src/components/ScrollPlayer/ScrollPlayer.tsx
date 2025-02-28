"use client";

import React from "react";
import { ClassNameable } from "../types";
import dynamic from "next/dynamic";

// Dynamically import the component with no SSR
const LottiePlayer = dynamic(
  () => import("@/src/components/ScrollPlayer/LottiePlayerComponent"), // Create this file
  { ssr: false } // This is key - prevents server-side rendering
);

interface ScrollPlayerProps extends ClassNameable {
  animationData: object;
}

export const ScrollPlayer: React.FC<ScrollPlayerProps> = (props) => {
  return <LottiePlayer {...props} />;
};
