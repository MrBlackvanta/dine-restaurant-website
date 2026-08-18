import { cn } from "@/lib";

export const groupErrorId = (name: string) => `${name}-error`;

const labelId = (name: string) => `${name}-label`;

type Props = {
  name: string;
  label: string;
  error?: string;
  children: React.ReactNode;
};

export default function SegmentGroup({ name, label, error, children }: Props) {
  return (
    <div
      role="group"
      aria-labelledby={labelId(name)}
      className="flex flex-col gap-y-2 sm:flex-row sm:items-center sm:justify-between"
    >
      <div>
        <span
          id={labelId(name)}
          className={cn(
            "block text-field",
            error ? "text-error" : "text-ink-strong",
          )}
        >
          {label}
        </span>

        {error && (
          <p
            id={groupErrorId(name)}
            className="text-hint font-medium text-error"
          >
            {error}
          </p>
        )}
      </div>

      <div className="flex w-full justify-between sm:w-72.25">{children}</div>
    </div>
  );
}
