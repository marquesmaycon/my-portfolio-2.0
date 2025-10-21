"use client";

import Image from "next/image";

import memojiImage from "@/assets/images/memoji-computer.png";

import { GrainBg } from "./graing-bg";
import { HeroOrbit } from "./hero-orbit";
import { ArrowDown } from "./svgs/arrow-down";
import { Sparkle } from "./svgs/sparkle";
import { Star } from "./svgs/star";

export function Hero() {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] ">
        <GrainBg />
        <div className="hero-ring" />
        <div className="hero-ring size-[820px]" />
        <div className="hero-ring size-[1020px]" />
        <div className="hero-ring size-[1220x]" />

        <HeroOrbit
          size={430}
          rotation={-14}
          orbitDuration="30s"
          spinDuration="3s"
        >
          <Sparkle className="text-emerald-300/20 size-8" />
        </HeroOrbit>

        <HeroOrbit
          size={440}
          rotation={79}
          orbitDuration="32s"
          spinDuration="3s"
        >
          <Sparkle className="text-emerald-300/20 size-5" />
        </HeroOrbit>

        <HeroOrbit size={520} rotation={-41} orbitDuration="34s">
          <div className="bg-emerald-300/20 size-3 rounded-full" />
        </HeroOrbit>

        <HeroOrbit
          size={530}
          rotation={178}
          orbitDuration="36s"
          spinDuration="3s"
        >
          <Sparkle className="text-emerald-300/20 size-10" />
        </HeroOrbit>

        <HeroOrbit
          size={550}
          rotation={20}
          orbitDuration="38s"
          spinDuration="6s"
        >
          <Star className="text-emerald-300 size-12" />
        </HeroOrbit>

        <HeroOrbit
          size={590}
          rotation={98}
          orbitDuration="40s"
          spinDuration="6s"
        >
          <Star className="text-emerald-300 size-8" />
        </HeroOrbit>

        <HeroOrbit size={650} rotation={-5} orbitDuration="42s">
          <div className="bg-emerald-300/20 size-3 rounded-full" />
        </HeroOrbit>

        <HeroOrbit
          size={710}
          rotation={144}
          orbitDuration="44s"
          spinDuration="3s"
        >
          <Sparkle className="text-emerald-300/20 size-14" />
        </HeroOrbit>

        <HeroOrbit size={720} rotation={83} orbitDuration="46s">
          <div className="bg-emerald-300/20 size-3 rounded-full" />
        </HeroOrbit>

        <HeroOrbit
          size={800}
          rotation={-72}
          orbitDuration="48s"
          spinDuration="6s"
        >
          <Star className="text-emerald-300 size-28" />
        </HeroOrbit>
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
            <div className="relative bg-green-500 size-2.5 rounded-full">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large" />
            </div>
            <div className="text-sm font-medium">
              Disponível para novos projetos
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide text-balance">
            Construindo experiências incríveis
          </h1>
          <p className="mt-4 text-center text-white/60 text-balance md:text-lg">
            Sou um desenvolvedor full-stack apaixonado por criar aplicações web
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center mt-8 gap-4">
          <button
            type="button"
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl"
          >
            <span className="font-semibold">Explore meu trabalho</span>
            <ArrowDown />
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
