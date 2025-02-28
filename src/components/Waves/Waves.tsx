import clsx from "clsx";
import React from "react";

export const Waves: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <figure className={clsx("m-0", className)}>
      <div className="bg-waves-light dark:bg-waves bg-[length:80px] h-8 w-full bg-repeat-x" />
      <div className="bg-waves-light dark:bg-waves bg-[length:80px] h-8 w-full bg-repeat-x" />
    </figure>
  );
};
