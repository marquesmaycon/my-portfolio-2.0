import Image, { type StaticImageData } from "next/image";

import { Card } from "../card";
import { SectionHeader } from "../section-header";

type Testimonial = {
  name: string;
  position: string;
  text: string;
  avatar: StaticImageData;
};

const testimonials: Testimonial[] = [];

export function Testimonials() {
  if (testimonials.length === 0) {
    return null;
  }
  return (
    <section className="py-16 px-4 lg:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="Clientes Satisfeitos"
          title="O que os clientes dizem sobre mim"
          description="Não acredite apenas na minha palavra, veja o que meus clientes têm a dizer sobre meu trabalho."
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -m-4">
          <div className="flex flex-none gap-8 pr-8 animate-move-left [animation-duration:90s] hover:[animation-play-state:paused] ">
            {[...testimonials, ...testimonials].map(
              ({ name, avatar, position, text }, i) => (
                <Card
                  key={name + +i}
                  className="max-w-xs p-6 md:max-w-md md:p-8 hover:-rotate-3 transition duration-300"
                >
                  <div className="flex gap-4 items-center">
                    <div className="size-14 bg-gray-700 rounded-full inline-flex items-center justify-center shrink-0">
                      <Image src={avatar} alt={name} className="max-h-full" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{name}</h3>
                      <h4 className="text-sm text-white/40">{position}</h4>
                    </div>
                  </div>
                  <p className="mt-4 md:mt-6 text-sm md:text-base">{text}</p>
                </Card>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
