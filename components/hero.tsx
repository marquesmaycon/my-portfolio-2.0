"use client";

import Image from "next/image";

import ArrowDown from "@/assets/icons/arrow-down.svg";
import StarIcon from "@/assets/icons/star.svg";
import grainImage from "@/assets/images/grain.jpg";
import memojiImage from "@/assets/images/memoji-computer.png";

export function Hero() {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      />
      <div className="hero-ring" />
      <div className="hero-ring size-[820px]" />
      <div className="hero-ring size-[1020px]" />
      <div className="hero-ring size-[1220x]" />

      <div className="asbolute">
        <StarIcon />
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Memoji"
            width={300}
            height={300}
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide text-balance">
            Construindo experiências incríveis
          </h1>
          <p className="mt-4 text-center text-white/60 text-balance md:text-lg">
            Sou um desenvolvedor front-end apaixonado por criar interfaces
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center mt-8 gap-4">
          <button
            type="button"
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl"
          >
            <span className="font-semibold">Explore meu trabalho</span>
            <ArrowDown alt="Arrow Down" className="size-4" />
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl"
          >
            <span>🤝</span>
            <span className="font-semibold">Entre em contato</span>
          </button>
        </div>
      </div>
    </div>
  );
}
