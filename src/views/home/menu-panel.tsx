import { Curve, Picture } from "@/components";
import { dishes } from "@/data";

export default function MenuPanel() {
  return (
    <section
      aria-labelledby="menu-title"
      className="relative mt-25.25 bg-surface-dark pt-18 pb-25.5 text-white sm:mt-29.5 sm:py-24 wide:-mt-20 wide:pt-50 wide:pb-30"
    >
      <div className="v-rail top-0">
        <Curve corner="top-left" className="bottom-0 left-1/2 wide:left-95" />
      </div>
      <div className="v-rail bottom-0">
        <Curve
          corner="top-right"
          className="top-0 right-1/2 wide:right-182.5"
        />
      </div>

      <div className="v-board flex flex-col wide:flex-row wide:gap-x-31.25">
        <div className="flex flex-col items-center text-center sm:mx-auto sm:max-w-111.25 wide:mx-0 wide:w-111.25 wide:items-start wide:text-left">
          <div className="v-divide" />

          <h2
            id="menu-title"
            className="mt-9 text-display-sm font-bold sm:mt-10 sm:text-section wide:mt-14"
          >
            A few highlights from our menu
          </h2>

          <p className="mt-3 text-body-sm sm:mt-7 sm:text-body">
            We cater for all dietary requirements, but here&rsquo;s a glimpse at
            some of our diner&rsquo;s favourites. Our menu is revamped every
            season.
          </p>
        </div>

        <ul className="mt-21.25 divide-y divide-white/15 sm:mx-auto sm:mt-13.5 sm:max-w-143.25 wide:mx-0 wide:mt-13.75 wide:w-135 wide:max-w-none">
          {dishes.map(({ id, title, body, image, alt }) => (
            <li
              key={id}
              className="flex flex-col items-center pt-6.25 pb-13.5 text-center first:pt-0 last:pb-0 sm:flex-row sm:items-start sm:pb-6 sm:text-left"
            >
              <Picture
                {...image}
                alt={alt}
                loading="lazy"
                className="aspect-327/245 w-full object-cover sm:aspect-128/96 sm:h-24 sm:w-32 sm:shrink-0"
              />

              <span className="mt-4.5 hidden h-px w-8 shrink-0 bg-accent sm:block" />

              <div className="mt-9 sm:mt-2 sm:ml-7.5">
                <h3 className="text-title font-bold">{title}</h3>
                <p className="mt-1.5 text-body-sm">{body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
