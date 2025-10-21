import { twMerge } from "tailwind-merge";

type HeroOrbitProps = {
  size: number;
  rotation: number;
  orbitDuration?: string;
  spinDuration?: string;
  children: React.ReactNode;
};

export function HeroOrbit({
  size,
  rotation,
  orbitDuration,
  spinDuration,
  children,
}: HeroOrbitProps) {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-1/2">
      <div
        className={twMerge(orbitDuration && "animate-spin")}
        style={{ animationDuration: orbitDuration }}
      >
        <div
          className="flex items-start justify-start"
          style={{
            width: size,
            height: size,
            transform: `rotate(${rotation}deg)`,
          }}
        >
          <div
            className={twMerge(spinDuration && "animate-spin")}
            style={{
              animationDuration: spinDuration,
            }}
          >
            <div
              className="inline-flex"
              style={{
                transform: `rotate(${-rotation}deg)`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// function OrbitItem({});
