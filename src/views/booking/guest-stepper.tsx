import { MinusIcon, PlusIcon } from "@/components/icons";
import { cn, GUEST_MAX, GUEST_MIN } from "@/lib";

const step =
  "-my-2.5 flex h-11 items-center px-4.75 text-accent sm:px-8 aria-disabled:opacity-50";

export default function GuestStepper({
  value,
  onChange,
}: {
  value: number;
  onChange: (guests: number) => void;
}) {
  const atMin = value <= GUEST_MIN;
  const atMax = value >= GUEST_MAX;

  return (
    <div className="flex items-center justify-between border-b border-rule pb-4">
      <button
        type="button"
        aria-label="Remove a guest"
        aria-disabled={atMin || undefined}
        onClick={() => !atMin && onChange(value - 1)}
        className={cn(step, atMin && "cursor-not-allowed")}
      >
        <MinusIcon />
      </button>

      <span aria-live="polite" className="text-title font-bold text-ink-strong">
        {value} {value === 1 ? "person" : "people"}
      </span>

      <button
        type="button"
        aria-label="Add a guest"
        aria-disabled={atMax || undefined}
        onClick={() => !atMax && onChange(value + 1)}
        className={cn(step, atMax && "cursor-not-allowed")}
      >
        <PlusIcon />
      </button>
    </div>
  );
}
