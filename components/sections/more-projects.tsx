import Image from "next/image";

import gowPrintScreen from "@/assets/images/god-of-war-lp.png";
import jogoDaMemoriaPrintScreen from "@/assets/images/jogo-da-memoria.png";
import videoPlayerPrintScreen from "@/assets/images/redux-zustand-video-player.png";

import { Card } from "../card";
import { SectionHeader } from "../section-header";
import { ArrowUpRight } from "../svgs/arrow-up-right";

const projects = [
  {
    tag: "Gerenciamento de Estado React",
    year: "2025",
    title: "🎥 Video Player Redux vs Zustand",
    description:
      "Um player de vídeo interativo desenvolvido com React e TypeScript, demonstrando a implementação de gerenciamento de estado com Redux e Zustand. Permite alternar entre as duas soluções em tempo real para comparar performance.",
    image: videoPlayerPrintScreen,
    repository: "https://github.com/marquesmaycon/video-player-redux-zustand",
    demo: "https://video-player-redux-zustand.vercel.app/",
  },
  {
    tag: "Landing Page com SCSS",
    year: "2023",
    title: "🏛️ God of War - Ragnarök Landing Page",
    description:
      "Uma landing page épica e imersiva para o lançamento de God of War Ragnarök. Design moderno com animações fluidas, carousel interativo de personagens e seção de trailer integrada.",
    image: gowPrintScreen,
    repository: "https://github.com/marquesmaycon/god-of-war-ragnarok",
    demo: "https://god-of-war-ragnarok.mklly.com.br/",
  },
  {
    tag: "Jogo da Memórias Vanilla JS",
    year: "2022",
    title: "🧠 Jogo da Memória - Rick and Morty",
    description:
      "Um jogo da memória interativo com temática de Rick and Morty, desenvolvido com JavaScript vanilla. O jogador deve encontrar os pares de cartas no menor tempo possível.",
    image: jogoDaMemoriaPrintScreen,
    repository: "https://github.com/marquesmaycon/jogo-da-memoria",
    demo: "https://jogo-da-memoria.mklly.com.br/",
  },
];

export function MoreProjects() {
  if (projects.length === 0) {
    return null;
  }
  return (
    <section className="py-16 px-4 lg:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="Mais Projetos"
          title="Projetos Adicionais"
          description="Esses são outros projetos que desenvolvi ao longo dos últimos anos"
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -m-4">
          <div className="flex flex-none gap-8 pr-8 animate-move-left [animation-duration:60s] hover:[animation-play-state:paused] ">
            {[...projects, ...projects].map(
              (
                { title, description, image, repository, demo, tag, year },
                i,
              ) => (
                <Card
                  key={title + +i}
                  className="max-w-xs p-6 md:max-w-md md:p-8  flex flex-col gap-4"
                >
                  <div>
                    <div className="gradient-primary inline-flex gap-2 font-bold uppercase tracking-widest text-xs text-transparent bg-clip-text">
                      <span>{tag}</span>
                      <span>&bull;</span>
                      <span>{year}</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{title}</h3>
                    <p className="text-sm text-white/40 line-clamp-4">
                      {description}
                    </p>
                  </div>
                  <div className="h-[250px] overflow-clip relative">
                    <Image
                      src={image}
                      alt={title}
                      className="rounded-2xl border border-white/10 mt-auto absolute inset-0 h-full w-full object-cover overflow-hidden"
                    />
                  </div>
                  <div className="flex items-center mt-auto">
                    <a href={repository} target="_blank" className="mr-4">
                      <button
                        type="button"
                        className="bg-white text-gray-950 w-full px-4 py-1.5 md:w-auto rounded-xl font-medium text-sm md:text-base inline-flex items-center justify-center gap-2 cursor-pointer hover:bg-white/70 transition-colors duration-300"
                      >
                        <span>Repositório</span>
                        <ArrowUpRight className="size-4" />
                      </button>
                    </a>
                    {demo && (
                      <a href={demo} target="_blank">
                        <button
                          type="button"
                          className="bg-white text-gray-950 w-full px-4 py-1.5 md:w-auto rounded-xl font-medium text-sm md:text-base inline-flex items-center justify-center gap-2 cursor-pointer hover:bg-white/70 transition-colors duration-300"
                        >
                          <span>Demo</span>
                          <ArrowUpRight className="size-4" />
                        </button>
                      </a>
                    )}
                  </div>
                </Card>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
