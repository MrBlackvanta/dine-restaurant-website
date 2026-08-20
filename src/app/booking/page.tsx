import type { Metadata } from "next";

import { ReservationHero } from "@/views/booking";

export const metadata: Metadata = {
  title: "Reservations — Dine",
  description:
    "Book a table at Dine in Marthwaite, Sedbergh. Pick your date, time and party size, and we will confirm your reservation by email.",
  alternates: { canonical: "/booking" },
};

export default function Booking() {
  return (
    <main className="flex-1 overflow-x-clip">
      <ReservationHero />
    </main>
  );
}
