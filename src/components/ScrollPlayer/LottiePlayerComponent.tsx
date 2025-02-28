"use client";

import React from "react";
import { ClassNameable } from "../types";
import "@lottiefiles/lottie-player";
import { useLottie, useLottieInteractivity } from "lottie-react";

interface LottiePlayerProps extends ClassNameable {
  animationData: object;
}

const LottiePlayerComponent: React.FC<LottiePlayerProps> = ({
  animationData,
  className,
}) => {
  const lottieObj = useLottie({ animationData });
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "scroll",
    actions: [
      {
        visibility: [0, 1],
        type: "seek",
        frames: [0, lottieObj?.getDuration(true) || 0],
      },
    ],
  });

  return <div className={className}>{Animation}</div>;
};

export default LottiePlayerComponent;
