import heroDesktop from "@/assets/images/home/hero-bg-desktop.webp";
import heroDesktop2x from "@/assets/images/home/hero-bg-desktop@2x.webp";
import heroMobile from "@/assets/images/home/hero-bg-mobile.webp";
import heroMobile2x from "@/assets/images/home/hero-bg-mobile@2x.webp";
import heroTablet from "@/assets/images/home/hero-bg-tablet.webp";
import heroTablet2x from "@/assets/images/home/hero-bg-tablet@2x.webp";
import { ButtonLink } from "@/components";
import { SiteHeader } from "@/components/layout";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-clip bg-surface-dark pb-38 text-white sm:pb-54 wide:min-h-205 wide:pb-50"
    >
      <picture>
        <source
          media="(min-width: 76rem)"
          srcSet={`${heroDesktop.src} 1x, ${heroDesktop2x.src} 2x`}
        />
        <source
          media="(min-width: 40rem)"
          srcSet={`${heroTablet.src} 1x, ${heroTablet2x.src} 2x`}
        />
        <img
          src={heroMobile.src}
          srcSet={`${heroMobile.src} 1x, ${heroMobile2x.src} 2x`}
          alt=""
          width={heroMobile.width}
          height={heroMobile.height}
          fetchPriority="high"
          className="aspect-375/232 w-full object-cover object-top sm:aspect-768/374 wide:absolute wide:inset-y-0 wide:right-0 wide:-z-10 wide:aspect-auto wide:h-full wide:w-auto wide:max-w-none"
        />
      </picture>

      <SiteHeader className="justify-center wide:justify-start wide:pt-16" />

      <div className="v-board mt-9 flex flex-col items-center text-center sm:mt-10 wide:mt-38 wide:items-start wide:text-left">
        <h1
          id="hero-title"
          className="text-display-sm font-light sm:text-display-md wide:max-w-lg wide:text-display"
        >
          Exquisite dining
          <br />
          since 1989
        </h1>

        <p className="mt-5 text-body-sm sm:max-w-xl sm:text-body wide:mt-2.5 wide:max-w-md">
          Experience our seasonal menu in beautiful country surroundings. Eat
          the freshest produce from the comfort of our farmhouse.
        </p>

        <ButtonLink
          href="/booking"
          variant="dark"
          className="mt-13 w-[245px] wide:mt-10"
        >
          Book a table
        </ButtonLink>
      </div>
    </section>
  );
}
