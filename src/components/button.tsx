import Link from "next/link";

import { cn } from "@/lib";

type Variant = "light" | "dark";

const base =
  "v-wipe relative isolate inline-flex h-16 items-center justify-center border px-6 text-eyebrow font-semibold uppercase hover:text-ink-strong focus-visible:text-ink-strong";

const variants: Record<Variant, string> = {
  light: "border-ink-strong bg-ink-strong text-white",
  dark: "border-white text-white",
};

function classes(variant: Variant, className?: string) {
  return cn(base, variants[variant], className);
}

type OwnProps = { variant?: Variant };

export default function Button({
  variant = "light",
  className,
  children,
  ...props
}: OwnProps & React.ComponentPropsWithoutRef<"button">) {
  return (
    <button className={classes(variant, className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "light",
  className,
  children,
  ...props
}: OwnProps & React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link className={classes(variant, className)} {...props}>
      {children}
    </Link>
  );
}
