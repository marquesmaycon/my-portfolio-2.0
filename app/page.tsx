import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Tape } from "@/components/sections/tape";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <Tape />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
