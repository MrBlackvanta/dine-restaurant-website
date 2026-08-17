import { cn } from "@/lib";

export default function PatternLines({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute hidden h-19 w-40 v-lines sm:block",
        className,
      )}
    />
  );
}
