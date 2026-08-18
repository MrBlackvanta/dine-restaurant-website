import { cn } from "@/lib";

export default function PatternLines({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute h-19 w-40 v-lines",
        className,
      )}
    />
  );
}
