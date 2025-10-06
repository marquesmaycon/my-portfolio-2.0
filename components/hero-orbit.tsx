type HeroOrbitProps = {
  size: number;
  rotation: number;
  children: React.ReactNode;
};

export function HeroOrbit({ size, rotation, children }: HeroOrbitProps) {
  return (
    <div
      className="absolute left-1/2 top-1/2 -translate-1/2 flex items-start justify-start"
      style={{ width: size, height: size, transform: `rotate(${rotation}deg)` }}
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
  );
}

// function OrbitItem({});
