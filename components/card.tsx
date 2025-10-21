import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

import { GrainBg } from "./graing-bg";

type CardProps = ComponentProps<"div">;

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={twMerge(
        "bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:content-[''] after:absolute after:inset-0 after:z-10 after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none",
        className,
      )}
      {...props}
    >
      <GrainBg />
      {children}
    </div>
  );
}
