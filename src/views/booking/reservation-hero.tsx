import heroDesktop from "@/assets/images/booking/hero-bg-desktop.webp";
import heroDesktop2x from "@/assets/images/booking/hero-bg-desktop@2x.webp";
import heroMobile from "@/assets/images/booking/hero-bg-mobile.webp";
import heroMobile2x from "@/assets/images/booking/hero-bg-mobile@2x.webp";
import heroTablet from "@/assets/images/booking/hero-bg-tablet.webp";
import heroTablet2x from "@/assets/images/booking/hero-bg-tablet@2x.webp";
import { ButtonLink, Curve, PatternLines, Picture } from "@/components";
import { SiteHeader } from "@/components/layout";

import ReservationForm from "./reservation-form";

export default function ReservationHero() {
  return (
    <section
      aria-labelledby="booking-title"
      className="relative isolate pb-21.5 text-white sm:pb-30 wide:pb-29"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-150 bg-surface-dark">
        <Picture
          mobile={{ src: heroMobile, src2x: heroMobile2x }}
          tablet={{ src: heroTablet, src2x: heroTablet2x }}
          desktop={{ src: heroDesktop, src2x: heroDesktop2x }}
          alt=""
          fetchPriority="high"
          className="size-full object-cover"
        />
      </div>

      <Curve
        corner="bottom-right"
        className="bottom-0 left-0 -z-10 hidden w-248.25 wide:block"
      />

      <SiteHeader className="justify-center pt-14 sm:justify-start wide:pt-16" />

      <div className="v-board mt-11 flex flex-col sm:mt-17.5 wide:mt-38.5 wide:flex-row wide:items-start wide:gap-x-31.25">
        <div className="w-full text-center wide:w-111.25 wide:text-left">
          <h1
            id="booking-title"
            className="text-display-sm font-light sm:text-display-md wide:text-display"
          >
            Reservations
          </h1>

          <p className="mx-auto mt-3.25 text-body-sm sm:mt-3 sm:max-w-143.25 sm:text-body wide:mx-0 wide:mt-4.5 wide:max-w-none">
            We can&rsquo;t wait to host you. If you have any special
            requirements please feel free to call on the phone number below.
            We&rsquo;ll be happy to accommodate you.
          </p>

          <ButtonLink
            href="#reservation-form"
            variant="dark"
            className="mt-4.75 w-61.25 sm:hidden"
          >
            Reserve place
          </ButtonLink>
        </div>

        <div className="relative mt-22.75 w-full sm:mx-auto sm:mt-9.5 sm:w-135 wide:mx-0 wide:mt-0 wide:shrink-0">
          <PatternLines className="-bottom-9.5 -left-20 hidden wide:block" />
          <ReservationForm />
        </div>
      </div>
    </section>
  );
}
