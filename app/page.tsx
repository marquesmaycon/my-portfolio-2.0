import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Tape } from "@/components/tape";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <Tape />
      <Testimonials />
    </>
  );
}
