"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { type ClassNameValue, twMerge } from "tailwind-merge";
import bookImage from "@/assets/images/book-cover.png";
import mapImage from "@/assets/images/map.png";
import smileMemojiImage from "@/assets/images/memoji-smile.png";
import { Card } from "./card";
import { CardHeader } from "./card-header";
import { SectionHeader } from "./section-header";
import { Chrome } from "./svgs/chrome";
import { Css3 } from "./svgs/css3";
import { Github } from "./svgs/github";
import { Html5 } from "./svgs/html5";
import { React } from "./svgs/react";
import { SquareJs } from "./svgs/square-js";

const toolsbox = [
  { title: "JavaScript", icon: SquareJs },
  { title: "HTML 5", icon: Html5 },
  { title: "CSS 3", icon: Css3 },
  { title: "React", icon: React },
  { title: "Chrome", icon: Chrome },
  { title: "Github", icon: Github },
];

const hobbies = [
  {
    title: "Pintura",
    emoji: "🎨",
    left: "5%",
    top: "5%",
  },
  {
    title: "Fotografia",
    emoji: "📸",
    left: "50%",
    top: "5%",
  },
  {
    title: "Fitness",
    emoji: "🏋️‍♂️",
    left: "35%",
    top: "40%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Leitura",
    emoji: "📕",
    left: "5%",
    top: "65%",
  },
  {
    title: "Pintura 2",
    emoji: "🎨",
    left: "45%",
    top: "70%",
  },
  {
    title: "Pintura 3",
    emoji: "🎨",
    left: "70%",
    top: "45%",
  },
];

export function About() {
  const ref = useRef(null);

  return (
    <section className="py-20 px-4 lg:py-28" id="about">
      <div className="container mx-auto">
        <SectionHeader
          eyebrow="Sobre mim"
          title="Conheça-me melhor"
          description="Quem eu sou, o que eu faço e o que me inspira"
        />
        <div className="mt-20 flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-5 md:gap-8 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="Leituras"
                description="Explore os livros que definem minhas perspectivas"
              />
              <div className="w-40 mx-auto mt-8 md:mt-0">
                <Image src={bookImage} alt="Book cover" />
              </div>
            </Card>
            <Card className="min-h-[320px]  md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Minhas ferramentas"
                description="Explore as ferramentas que utilizo para criar experiências
              digitais"
                className="px-6 pt-6"
              />
              <ToolboxItems
                items={toolsbox}
                iconWrapperClassName="animate-move-left"
              />
              <ToolboxItems
                items={toolsbox}
                className="mt-6"
                iconWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:20s]"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Além do código"
                description="Explore meus interesses e hobbies fora do código"
                className="p-6"
              />
              <div className="relative flex-1" ref={ref}>
                {hobbies.map(({ title, emoji, left, top }) => (
                  <motion.div
                    key={title}
                    className="absolute inline-flex items-center gap-2 px-6 gradient-primary rounded-full py-1.5"
                    style={{ left, top }}
                    drag
                    dragConstraints={ref}
                  >
                    <span className="font-medium text-gray-950">{title}</span>
                    <span>{emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="relative h-[320px] p-0 md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="Map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-1/2 rounded-full after:[''] after:absolute after:inset-0 after:outline after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full gradient-primary -z-20 animate-ping [animation-duration:2s]" />
                <div className="absolute inset-0 rounded-full gradient-primary -z-10" />
                <Image
                  src={smileMemojiImage}
                  alt="Smile Memoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

const TechIcon = ({
  component: Component,
}: {
  component: React.ElementType;
}) => {
  return (
    <>
      <Component className="size-10 fill-[url(#tech-icon-gradient)]" />
      <svg className="size-0">
        <title>Tech Icon Gradient</title>
        <linearGradient id="tech-icon-gradient">
          <stop offset="0%" stopColor="var(--color-primary)" />
          <stop offset="100%" stopColor="var(--color-secondary)" />
        </linearGradient>
      </svg>
    </>
  );
};

type ToolboxItemsProps = React.ComponentProps<"div"> & {
  items: { title: string; icon: React.ElementType }[];
  iconWrapperClassName?: ClassNameValue;
};

const ToolboxItems = ({
  items,
  className,
  iconWrapperClassName,
  ...props
}: ToolboxItemsProps) => {
  return (
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className,
      )}
      {...props}
    >
      <div
        className={twMerge(
          "flex flex-none py-0.5 gap-6 pr-6",
          iconWrapperClassName,
        )}
      >
        {[...items, ...items].map(({ title, icon }, i) => (
          <div
            key={title + +i}
            className="inline-flex items-center gap-2 py-2 px-3 outline-2 outline-white/10 rounded-lg"
          >
            <TechIcon component={icon} />
            <span className="font-semibold">{title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
