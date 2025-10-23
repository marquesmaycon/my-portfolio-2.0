"use client";

import { useState } from "react";
import { GrainBg } from "../graing-bg";
import { ArrowUpRight } from "../svgs/arrow-up-right";

export function Contact() {
  const [copied, setCopied] = useState(false);

  function copyEmailToClipboard() {
    navigator.clipboard.writeText("mayconmarquesh@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section className="py-16 pt-12 lg:py-24 lg:pt-20" id="contact">
      <div className="container mx-auto px-4">
        <div className="gradient-primary text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative z-0">
          <GrainBg />
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Vamos criar algo incrível juntos!
              </h2>
              <p className="text-sm md:text-base mt-2">
                Pronto para dar vida ao seus próximo projeto? Entre em contato e
                vamos discutir como posso te ajudar a atingir seus objetivos.
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <a
                href="https://web.whatsapp.com/send?phone=5544991173753&text=Oi%20Maycon%2C%20vim%20do%20seu%20portf%C3%B3lio"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  type="button"
                  className="text-white inline-flex items-center justify-center px-6 h-12 rounded-xl gap-2 w-[240px] cursor-pointer bg-gray-900 hover:bg-white/10 hover:backdrop-blur-lg transition-all duration-300 border border-gray-900/50 hover:border-white/50"
                >
                  <span className="font-semibold">Entre em contato</span>
                  <ArrowUpRight className="size-4" />
                </button>
              </a>
              <button
                type="button"
                onClick={copyEmailToClipboard}
                className="border border-white/50 px-4 py-2 rounded-xl w-[240px] text-center text-sm font-semibold cursor-pointer hover:bg-primary/10 hover:backdrop-blur-sm transition-all duration-300 text-white h-12"
              >
                {copied ? "E-mail copiado!" : "mayconmarquesh@gmail.com"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
