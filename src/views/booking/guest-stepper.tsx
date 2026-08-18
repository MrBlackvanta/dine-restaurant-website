import { MinusIcon, PlusIcon } from "@/components/icons";
import { GUEST_MAX, GUEST_MIN } from "@/lib";

const step =
  "-my-2.5 flex h-11 items-center px-4.75 text-accent disabled:opacity-50 sm:px-8";

export default function GuestStepper({
  value,
  onChange,
}: {
  value: number;
  onChange: (guests: number) => void;
}) {
  return (
    <div className="flex items-center justify-between border-b border-rule pb-4">
      <button
        type="button"
        aria-label="Remove a guest"
        disabled={value <= GUEST_MIN}
        onClick={() => onChange(value - 1)}
        className={step}
      >
        <MinusIcon />
      </button>

      <span aria-live="polite" className="text-title font-bold text-ink-strong">
        {value} {value === 1 ? "person" : "people"}
      </span>

      <button
        type="button"
        aria-label="Add a guest"
        disabled={value >= GUEST_MAX}
        onClick={() => onChange(value + 1)}
        className={step}
      >
        <PlusIcon />
      </button>
    </div>
  );
}
