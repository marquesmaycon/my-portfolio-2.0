import Image from "next/image";

import dummyUsersPrintScreen from "@/assets/images/dummy-users.png";
import habitTrackerPrintScreen from "@/assets/images/habit-tracker.png";
import nextSaasRbacPrintScreen from "@/assets/images/next-saas-rbac.png";

import { Card } from "../card";
import { SectionHeader } from "../section-header";
import { ArrowUpRight } from "../svgs/arrow-up-right";
import { CheckCircle } from "../svgs/check-circle";

const portfolioProjects = [
  {
    tag: "API externas",
    year: "2025",
    title: "Dummy Users",
    topics: [
      { title: "React, TanStack Query, Ant Design, TypeScript" },
      {
        title:
          "Sistema completo de gerenciamento de usuários que demonstra implementação de autenticação, CRUD de usuários, gerenciamento de estado e boas práticas de desenvolvimento frontend.",
      },
      { title: "Persistências simulados no cache com TanStack Query" },
    ],
    demo: "https://dummy-users.mklly.com.br/",
    repository: "https://github.com/marquesmaycon/dummy-users",
    image: dummyUsersPrintScreen,
  },
  {
    tag: "Full Stack",
    year: "2025",
    title: "Habit Tracker",
    topics: [
      {
        title:
          "React, Next.js, PostgreSQL, Drizzle ORM, Tailwind CSS, Radix UI, Dayjs, TypeScript",
      },
      {
        title:
          "Um sistema completo de rastreamento de hábitos. Organize sua rotina, acompanhe seu progresso e construa hábitos saudáveis de forma eficiente e visual.",
      },
      {
        title:
          "Adicione hábitos, configure o dia da semana, acompanhe seu progresso no formato de calendário, dados persistidos no banco de dados.",
      },
    ],
    demo: "https://habit-tracker.mklly.com.br/",
    repository: "https://github.com/marquesmaycon/habit-tracker",
    image: habitTrackerPrintScreen,
  },
  {
    tag: "Mono Repo",
    year: "2025",
    title: "Next Saas RBAC",
    topics: [
      {
        title:
          "Next.js, Turborepo, PostgreSQL, Prisma ORM, Fastify, Node, Shadcn/ui, Tailwind CSS, TypeScript",
      },
      {
        title:
          "Um boilerplate completo para SaaS multi-tenant com autenticação robusta e sistema de autorização baseado em RBAC (Role-Based Access Control). Desenvolvido com as melhores práticas e arquitetura monorepo para máxima escalabilidade e reutilização de código.",
      },
    ],
    repository: "https://github.com/marquesmaycon/next-saas-rbac",
    image: nextSaasRbacPrintScreen,
  },
];

export function Projects() {
  return (
    <section id="projects" className="pb-16 px-4 lg:py-24">
      <div className="container mx-auto">
        <SectionHeader
          eyebrow="Portfólio"
          title="Projetos em Destaque"
          description="Esses são meus projetos mais relevantes e completos"
        />
        <div className="flex flex-col gap-20 mt-10 md:mt-20">
          {portfolioProjects.map(
            ({ title, tag, year, topics, demo, repository, image }, index) => (
              <Card
                key={title}
                className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
                style={{ top: `${64 + index * 40}px` }}
              >
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                    <div className="gradient-primary inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                      <span>{tag}</span>
                      <span>&bull;</span>
                      <span>{year}</span>
                    </div>

                    <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                      {title}
                    </h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                      {topics.map((result) => (
                        <li
                          key={result.title}
                          className="flex gap-2 text-sm md:text-base text-white/50"
                        >
                          <CheckCircle className="size-5 md:size-6 shrink-0" />
                          <span>{result.title}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={repository} target="_blank" className="mr-4">
                      <button
                        type="button"
                        className="bg-white text-gray-950 h-12 w-full px-6 md:w-auto rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 cursor-pointer hover:bg-white/70 transition-colors duration-300"
                      >
                        <span>Ver Repositório</span>
                        <ArrowUpRight className="size-4" />
                      </button>
                    </a>
                    {demo && (
                      <a href={demo} target="_blank">
                        <button
                          type="button"
                          className="bg-white text-gray-950 h-12 w-full px-6 md:w-auto rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 cursor-pointer hover:bg-white/70 transition-colors duration-300"
                        >
                          <span>Ver Demo</span>
                          <ArrowUpRight className="size-4" />
                        </button>
                      </a>
                    )}
                  </div>
                  <div className="relative">
                    <Image
                      src={image}
                      alt={title}
                      className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-[650px] lg:max-w-none object-cover object-top-left border-4 border-b-0 border-white/30 rounded-2xl rounded-b-none"
                    />
                  </div>
                </div>
              </Card>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
