import { Star } from "./svgs/star";

const words = [
  "Performático",
  "Acessível",
  "Seguro",
  "Interativo",
  "Escalável",
  "Intuitivo",
  "Moderno",
  "Rápido",
  "Responsivo",
  "Eficiente",
];

export function Tape() {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="gradient-primary -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-3 pr-4 animate-move-left">
            {[...words, ...words].map((word) => (
              <div key={word} className="inline-flex items-center gap-4">
                <span className="text-gray-900 uppercase font-extrabold text-sm">
                  {word}
                </span>
                <Star className="size-6 text-gray-900 -rotate-12 animate-spin [animation-duration:7s]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
