import Link from "next/link";

import { Logo } from "@/components/icons";

import Attribution from "./attribution";

export default function SiteFooter() {
  return (
    <footer className="bg-surface-dark pt-20 pb-0.5 text-white sm:pt-16 wide:pt-19.5">
      <div className="v-board flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left">
        <div className="flex shrink-0 sm:w-58.25 wide:w-74">
          <Link href="/" className="flex">
            <Logo className="h-10 w-auto" />
            <span className="sr-only">Dine home</span>
          </Link>
        </div>

        <div className="mt-10.5 flex w-full flex-col gap-y-8 text-meta sm:mt-0.5 sm:flex-1 wide:flex-row wide:gap-x-31">
          <address className="not-italic wide:w-61">
            Marthwaite, Sedbergh
            <br />
            Cumbria
            <br />
            <a href="tel:+00441234567">+00 44 123 4567</a>
          </address>

          <div className="uppercase wide:flex-1">
            <h2>Open times</h2>
            <p>
              Mon - Fri: 09:00 am - 10:00 pm
              <br />
              Sat - Sun: 09:00 am - 11:30 pm
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 sm:mt-16 wide:mt-19.5">
        <Attribution />
      </div>
    </footer>
  );
}
