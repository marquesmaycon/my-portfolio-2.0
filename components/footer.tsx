import { ArrowUpRight } from "./svgs/arrow-up-right";

const links = [
  { name: "Instagram", href: "https://ig.me/m/marquesmaycon/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/mayconhenrique/" },
  { name: "GitHub", href: "https://github.com/marquesmaycon" },
];

export function Footer() {
  return (
    <footer className="relative -z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10" />
      <div className="container mx-auto px-4">
        <div className="border-t border-white/50 py-6 text-sm flex flex-col md:flex-row items-center md:justify-between gap-8">
          <div className="text-white/40">
            &copy; 2025. Todos os direitos reservados
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {links.map(({ name, href }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5"
              >
                <span className="font-semibold">{name}</span>
                <ArrowUpRight className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
