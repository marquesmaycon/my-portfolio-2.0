import { GrainBg } from "../graing-bg";
import { ArrowUpRight } from "../svgs/arrow-up-right";

export function Contact() {
  return (
    <section className="py-16 pt-12 lg:py-24 lg:pt-20" id="contact">
      <div className="container mx-auto px-4">
        <div className="gradient-primary text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative z-0">
          <GrainBg />
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Vamos criar algo incrível juntos!
              </h2>
              <p className="text-sm md:text-base mt-2">
                Pronto para dar vida ao seus próximo projeto? Entre em contato e
                vamos discutir como posso te ajudar a atingir seus objetivos.
              </p>
            </div>
            <div>
              <button
                type="button"
                className="text-white bg-gray-900 border border-gray-950 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max cursor-pointer hover:bg-gray-700 hover:backdrop-blur-3xl transition-all duration-300"
              >
                <span className="font-semibold">Entre em contato</span>
                <ArrowUpRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
