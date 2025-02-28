"use client";

import { createContext } from "react";

export interface UIProps {
  showSidebar: boolean;
  setShowSidebar: (show: boolean) => void;
}

export const UIContext = createContext<UIProps>({
  showSidebar: false,
  setShowSidebar: () => undefined,
});
