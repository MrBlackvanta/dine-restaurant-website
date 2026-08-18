import { Logo } from "@/components/icons";
import { cn } from "@/lib";
import Link from "next/link";

export default function SiteHeader({ className }: { className?: string }) {
  return (
    <header className={cn("v-board flex", className)}>
      <Link href="/">
        <Logo className="h-8 w-auto sm:h-10" />
        <span className="sr-only">Dine home</span>
      </Link>
    </header>
  );
}
