import heroDesktop from "@/assets/images/home/hero-bg-desktop.webp";
import heroDesktop2x from "@/assets/images/home/hero-bg-desktop@2x.webp";
import heroMobile from "@/assets/images/home/hero-bg-mobile.webp";
import heroMobile2x from "@/assets/images/home/hero-bg-mobile@2x.webp";
import heroTablet from "@/assets/images/home/hero-bg-tablet.webp";
import heroTablet2x from "@/assets/images/home/hero-bg-tablet@2x.webp";
import { ButtonLink, Picture } from "@/components";
import { RisingText } from "@/components/effects";
import { SiteHeader } from "@/components/layout";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-clip bg-surface-dark pb-38 text-white sm:pb-54 wide:min-h-205 wide:pb-50"
    >
      <Picture
        mobile={{ src: heroMobile, src2x: heroMobile2x }}
        tablet={{ src: heroTablet, src2x: heroTablet2x }}
        desktop={{ src: heroDesktop, src2x: heroDesktop2x }}
        alt=""
        fetchPriority="high"
        className="aspect-375/232 w-full object-cover object-top sm:aspect-768/374 wide:absolute wide:inset-y-0 wide:right-0 wide:-z-10 wide:aspect-auto wide:h-full wide:w-auto wide:max-w-none wide:v-settle"
      />

      <SiteHeader className="justify-center v-enter-down wide:justify-start wide:pt-16" />

      <div className="v-board mt-9 flex flex-col items-center text-center sm:mt-10 wide:mt-38 wide:items-start wide:text-left">
        <h1
          id="hero-title"
          className="text-display-sm font-light sm:text-display-md wide:text-display"
        >
          <RisingText text={"Exquisite dining\nsince 1989"} />
        </h1>

        <p className="mt-5 v-enter text-body-sm v-enter-delay-450 sm:max-w-143.25 sm:text-body wide:mt-2.5 wide:max-w-111.25">
          Experience our seasonal menu in beautiful country surroundings. Eat
          the freshest produce from the comfort of our farmhouse.
        </p>

        <ButtonLink
          href="/booking"
          variant="dark"
          className="mt-13 w-61.25 v-enter v-enter-delay-600 wide:mt-10"
        >
          Book a table
        </ButtonLink>
      </div>
    </section>
  );
}
