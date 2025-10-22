import Image from "next/image";

import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";

import { Card } from "../card";
import { SectionHeader } from "../section-header";
import { ArrowUpRight } from "../svgs/arrow-up-right";
import { CheckCircle } from "../svgs/check-circle";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export function Projects() {
  return (
    <section id="projects" className="pb-16 px-4 lg:py-24">
      <div className="container mx-auto">
        <SectionHeader
          eyebrow="Portfolio"
          title="Projetos em Destaque"
          description="Veja como transformei ideias em realidade com meus projetos recentes"
        />
        <div className="flex flex-col gap-20 mt-10 md:mt-20">
          {portfolioProjects.map(
            ({ title, company, year, results, link, image }, index) => (
              <Card
                key={title}
                className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
                style={{ top: `${64 + index * 40}px` }}
              >
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                    <div className="gradient-primary inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                      <span>{company}</span>
                      <span>&bull;</span>
                      <span>{year}</span>
                    </div>

                    <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                      {title}
                    </h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                      {results.map((result) => (
                        <li
                          key={result.title}
                          className="flex gap-2 text-sm md:text-base text-white/50"
                        >
                          <CheckCircle className="size-5 md:size-6" />
                          <span>{result.title}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={link} target="_blank">
                      <button
                        type="button"
                        className="bg-white text-gray-950 h-12 w-full px-6 md:w-auto rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 cursor-pointer hover:bg-white/70 transition-colors duration-300"
                      >
                        <span>View Project</span>
                        <ArrowUpRight className="size-4" />
                      </button>
                    </a>
                  </div>
                  <div className="relative">
                    <Image
                      src={image}
                      alt={title}
                      className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
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
