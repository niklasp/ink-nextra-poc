"use client";

import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import { ClassNameable } from "../types";

// Define a properly typed AnimatedDiv component
const AnimatedDiv = animated.div as React.ForwardRefExoticComponent<
  React.PropsWithChildren<any>
>;

interface SidebarProps {
  show: boolean;
  onClose: () => void;
  width?: number;
}

export const Sidebar: React.FC<
  React.PropsWithChildren<SidebarProps & ClassNameable>
> = ({ children, show, onClose, width: sidebarWidth, className }) => {
  const width = sidebarWidth || 300;
  const [isBrowser, setIsBrowser] = useState(false);

  // Set isBrowser to true once component mounts
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const transactionPanelProps = useSpring({
    from: { translateX: width, width },
    to: { translateX: show ? 0 : width },
  });

  if (!isBrowser) {
    // Return a non-animated version during SSR
    return null; // Or a loading state/placeholder
  }

  return (
    <AnimatedDiv
      style={transactionPanelProps}
      className={clsx(
        "fixed right-0 bottom-0 overflow-y-scroll h-full z-40",
        "dark:bg-background-700 bg-background-300",
        className
      )}
    >
      <div className="w-full p-4 m-0">
        <button
          className="border-none bg-transparent m-0 p-0 hover:cursor-pointer hover:opacity-80 transition-opacity duration-75"
          onClick={onClose}
        >
          <img src="/img/close.svg" alt="close" className="w-6" />
        </button>
      </div>
      {children}
    </AnimatedDiv>
  );
};
