import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const mergeCSS = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
