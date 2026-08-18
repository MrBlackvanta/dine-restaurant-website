import { ChevronDownIcon } from "@/components/icons";
import { cn, PERIODS, type Period } from "@/lib";
import { useEffect, useRef, useState } from "react";

const LABEL_ID = "period-label";
const VALUE_ID = "period-value";
const optionId = (period: Period) => `period-${period}`;

type Props = {
  value: Period;
  onChange: (period: Period) => void;
  className?: string;
};

export default function PeriodSelect({ value, onChange, className }: Props) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(value);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const list = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (open) list.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const closeOnOutside = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };

    document.addEventListener("pointerdown", closeOnOutside);
    return () => document.removeEventListener("pointerdown", closeOnOutside);
  }, [open]);

  function reveal() {
    setActive(value);
    setOpen(true);
  }

  function select(period: Period) {
    onChange(period);
    setOpen(false);
    trigger.current?.focus();
  }

  function handleTriggerKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    reveal();
  }

  function handleListKeyDown(event: React.KeyboardEvent<HTMLUListElement>) {
    const at = PERIODS.indexOf(active);
    const to = {
      ArrowDown: at + 1,
      ArrowUp: at - 1,
      Home: 0,
      End: PERIODS.length - 1,
    }[event.key];

    if (to !== undefined) {
      event.preventDefault();
      setActive(PERIODS[Math.min(Math.max(to, 0), PERIODS.length - 1)]);
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      select(active);
      return;
    }

    if (event.key === "Escape" || event.key === "Tab") {
      setOpen(false);
      if (event.key === "Escape") trigger.current?.focus();
    }
  }

  return (
    <div ref={root} className={cn("relative", className)}>
      <span id={LABEL_ID} className="sr-only">
        Time of day
      </span>

      <button
        ref={trigger}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={`${LABEL_ID} ${VALUE_ID}`}
        onClick={() => (open ? setOpen(false) : reveal())}
        onKeyDown={handleTriggerKeyDown}
        className="flex w-full items-center justify-between border-b border-rule px-4 pb-3.5 text-field text-ink-strong focus:border-ink-strong"
      >
        <span id={VALUE_ID}>{value}</span>
        <ChevronDownIcon className="text-accent" />
      </button>

      {open && (
        <ul
          ref={list}
          role="listbox"
          tabIndex={-1}
          aria-labelledby={LABEL_ID}
          aria-activedescendant={optionId(active)}
          onKeyDown={handleListKeyDown}
          className="absolute inset-x-0 top-full z-10 mt-2 border border-rule bg-white py-1 focus:outline-none"
        >
          {PERIODS.map((period) => (
            <li
              key={period}
              id={optionId(period)}
              role="option"
              aria-selected={period === value}
              onPointerEnter={() => setActive(period)}
              onClick={() => select(period)}
              className={cn(
                "cursor-pointer px-4 py-1 text-field",
                period === active
                  ? "bg-ink-strong text-white"
                  : "bg-white text-ink-strong",
                period === value && "font-bold",
              )}
            >
              {period}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
