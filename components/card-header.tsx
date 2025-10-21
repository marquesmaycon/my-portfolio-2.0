import { twMerge } from "tailwind-merge";
import { Star } from "./svgs/star";

type CardHeaderProps = React.ComponentProps<"div"> & {
  title: string;
  description: string;
};

export function CardHeader({
  title,
  description,
  className,
  ...props
}: CardHeaderProps) {
  return (
    <div
      className={twMerge("flex flex-col p-6 md:py-8 md:px-10", className)}
      {...props}
    >
      <div className="inline-flex items-center gap-2">
        <Star className="size-9 text-emerald-300" />
        <h3 className="font-serif text-3xl">{title}</h3>
      </div>
      <p className="text-sm lg:text-base text-white/60 mt-2 max-w-xs">
        {description}
      </p>
    </div>
  );
}
