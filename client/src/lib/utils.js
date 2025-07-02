import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import animationData from "../assets/lottie-json.json";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const colors = [
  "bg-[#712c4a57] text-[#ff006e] border-[1px] border-[#ff006faa]",

  "bg-[#ffd60a2a] text-[#ffd68a] border-[1px] border-[#ffd6@abb]",

  "bg-[#96d6a02a] text-[#96d6a0] border-[1px] border-[#66d6a@bb]",

  "bg-[#4cc9f02a] text-[#4cc9f8] border-[1px] border-[#4cc9f0bb]",
];

export const getColor = (color) => {
  if (color >= 0 && color < colors.length) {
    return colors[color];
  }
  return colors[0]; // Fallback to the first color if out of range
};

export const animationDefaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
};
