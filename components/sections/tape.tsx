"use client";

import { useMemo } from "react";

import { Star } from "../svgs/star";

const words = [
  "Performático",
  "Acessível",
  "Seguro",
  "Interativo",
  "Escalável",
  "Intuitivo",
  "Modular",
  "Personalizável",
  "Moderno",
  "Rápido",
  "Responsivo",
  "Eficiente",
  "Otimizado",
  "Robusto",
  "Flexível",
];

const WORDS_ARRAY_WIDTH = 2040;

export function Tape() {
  const repeatCount = useMemo(() => {
    if (typeof window === "undefined") return 2;
    return Math.ceil(window.innerWidth / WORDS_ARRAY_WIDTH) + 1;
  }, []);

  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="gradient-primary -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-3 pr-4 animate-move-left [animation-duration:20s]">
            {Array.from({ length: repeatCount }).flatMap((_, repeatIndex) =>
              words.map((word, i) => (
                <div
                  key={`${word}-${repeatIndex}-${i.toString()}`}
                  className="inline-flex items-center gap-4"
                >
                  <span className="text-gray-900 uppercase font-extrabold text-sm">
                    {word}
                  </span>
                  <Star className="size-6 text-gray-900 -rotate-12 animate-spin [animation-duration:7s]" />
                </div>
              )),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
