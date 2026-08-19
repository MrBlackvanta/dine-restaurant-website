import readyDesktop from "@/assets/images/home/ready-bg-desktop.webp";
import readyDesktop2x from "@/assets/images/home/ready-bg-desktop@2x.webp";
import readyMobile from "@/assets/images/home/ready-bg-mobile.webp";
import readyMobile2x from "@/assets/images/home/ready-bg-mobile@2x.webp";
import readyTablet from "@/assets/images/home/ready-bg-tablet.webp";
import readyTablet2x from "@/assets/images/home/ready-bg-tablet@2x.webp";
import { ButtonLink, Picture } from "@/components";

export default function ReservationCta() {
  return (
    <section
      aria-labelledby="reservation-title"
      className="relative isolate mt-31 flex h-82 items-center bg-surface-dark text-white sm:mt-30 sm:h-68 wide:mt-40 wide:h-60"
    >
      <div className="absolute inset-0 -z-10 overflow-clip v-unveil">
        <Picture
          mobile={{ src: readyMobile, src2x: readyMobile2x }}
          tablet={{ src: readyTablet, src2x: readyTablet2x }}
          desktop={{ src: readyDesktop, src2x: readyDesktop2x }}
          alt=""
          loading="lazy"
          className="size-full v-parallax object-cover"
        />
      </div>

      <div className="v-board flex v-reveal flex-col items-center gap-y-5 sm:gap-y-6 wide:flex-row wide:justify-between">
        <h2
          id="reservation-title"
          className="text-center text-display-sm font-bold sm:text-section wide:text-left"
        >
          Ready to make a reservation?
        </h2>

        <ButtonLink href="/booking" variant="dark" className="w-61.25">
          Book a table
        </ButtonLink>
      </div>
    </section>
  );
}
