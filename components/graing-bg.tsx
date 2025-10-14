import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

import grainImage from "@/assets/images/grain.jpg";

export function GrainBg({ style, className, ...props }: ComponentProps<"div">) {
  return (
    <div
      style={{
        backgroundImage: `url(${grainImage.src})`,
        ...style,
      }}
      className={twMerge("absolute inset-0 -z-30 opacity-5", className)}
      {...props}
    />
  );
}
