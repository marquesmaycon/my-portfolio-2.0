import { ArrowUpRight } from "../svgs/arrow-up-right";

const links = [
  {
    name: "WhatsApp",
    href: "https://web.whatsapp.com/send?phone=5544991173753&text=Oi%20Maycon%2C%20vim%20do%20seu%20portf%C3%B3lio",
  },
  { name: "Instagram", href: "https://instagram.com/marquesmaycon/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/mayconhenrique/" },
  { name: "GitHub", href: "https://github.com/marquesmaycon" },
];

export function Footer() {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-primary/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10 pointer-events-none" />
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
                className="inline-flex items-center gap-1.5 hover:underline"
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
