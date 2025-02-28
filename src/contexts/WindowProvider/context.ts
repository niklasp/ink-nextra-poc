"use client";
import { createContext } from "react";

export interface WindowProps {
  scrollY: number;
}

export const WindowContext = createContext<WindowProps>({
  scrollY: 0,
});
