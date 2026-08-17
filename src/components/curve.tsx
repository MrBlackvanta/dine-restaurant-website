import { cn } from "@/lib";

const corners = {
  "top-left": "rounded-tl-curve",
  "top-right": "rounded-tr-curve",
  "bottom-right": "rounded-br-curve",
} as const;

type Props = {
  corner: keyof typeof corners;
  className?: string;
};

export default function Curve({ corner, className }: Props) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute hidden h-80 w-223.75 bg-veil sm:block",
        corners[corner],
        className,
      )}
    />
  );
}
