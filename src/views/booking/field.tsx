import { cn } from "@/lib";

type Props = {
  name: string;
  label: string;
  error?: string;
  invalid?: boolean;
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<"input">, "id" | "name" | "className">;

export const errorId = (name: string) => `${name}-error`;

export default function Field({
  name,
  label,
  error,
  invalid,
  className,
  ...input
}: Props) {
  const isInvalid = Boolean(error) || Boolean(invalid);

  return (
    <div className={className}>
      <label htmlFor={name} className="sr-only">
        {label}
      </label>

      <input
        id={name}
        name={name}
        type="text"
        aria-invalid={isInvalid || undefined}
        aria-describedby={error ? errorId(name) : undefined}
        className={cn(
          "w-full border-b px-4 pb-3.5 text-field text-ink-strong caret-accent focus:border-ink-strong",
          isInvalid
            ? "border-error text-error placeholder:text-error"
            : "border-rule placeholder:text-ink-muted",
        )}
        {...input}
      />

      <div className="v-collapse" data-open={Boolean(error) || undefined}>
        <p
          id={errorId(name)}
          className="px-4 pt-3 text-hint font-medium text-error"
        >
          {error}
        </p>
      </div>
    </div>
  );
}
