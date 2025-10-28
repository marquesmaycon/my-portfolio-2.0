"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

import { type ClassNameValue, twMerge } from "tailwind-merge";
import bookImage from "@/assets/images/book-cover.png";
import emoji2 from "@/assets/images/emoji2.webp";

import { Card } from "../card";
import { CardHeader } from "../card-header";
import { SectionHeader } from "../section-header";
import { Css3 } from "../svgs/css3";
import { Github } from "../svgs/github";
import { Html5 } from "../svgs/html5";
import { Next } from "../svgs/next";
import { Node } from "../svgs/node";
import { PostgreSql } from "../svgs/postgresql";
import { React } from "../svgs/react";
import { SquareJs } from "../svgs/square-js";
import { TypeScript } from "../svgs/typescript";

const toolsbox = [
  { title: "JavaScript", icon: SquareJs },
  { title: "TypeScript", icon: TypeScript },
  { title: "React.js", icon: React },
  { title: "Next.js", icon: Next },
  { title: "Node.js", icon: Node },
  { title: "PostgreSQL", icon: PostgreSql },
  { title: "HTML 5", icon: Html5 },
  { title: "CSS 3", icon: Css3 },
  { title: "GitHub", icon: Github },
];

const hobbies = [
  {
    title: "Animais",
    emoji: "😻",
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
    emoji: "🏋️",
    left: "35%",
    top: "40%",
  },
  {
    title: "Jogos",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Leitura",
    emoji: "📖",
    left: "5%",
    top: "65%",
  },
  {
    title: "Música",
    emoji: "🎵",
    left: "55%",
    top: "50%",
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
                title="Formação"
                description="Análise e Desenvolvimento de Sistemas - UniCV (2023 - 2025)"
              />
              <div className="w-40 mx-auto mt-8 md:mt-0 -skew-y-4 after:content-[''] after:size-40 after:bg-neutral-300/30 after:absolute after:-top-2 after:-left-2 after:-z-10 after:shadow-lg">
                <Image src={bookImage} alt="Book cover" className="" />
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
                    className="absolute inline-flex items-center gap-2 px-6 gradient-primary rounded-full py-1.5 cursor-grab"
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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d58578.5116221719!2d-51.93705867412789!3d-23.418695968218792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1761143772611!5m2!1spt-BR!2sbr"
                width="640"
                height="450"
                title="Maringá Map"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <div className="absolute top-1/2 left-1/2 -translate-1/2 rounded-full pointer-events-none size-20">
                <div className="absolute inset-0 rounded-full gradient-primary -z-20 animate-ping [animation-duration:2s]" />
                <div className="absolute inset-0 rounded-full gradient-primary -z-10 border-2 border-primary shadow-2xl shadow-primary" />
                <div className="absolute -top-3 inset-0 overflow-hidden p-1">
                  <Image src={emoji2} alt="Smile Memoji" />
                </div>
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
