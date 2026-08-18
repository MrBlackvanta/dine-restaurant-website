import { Curve, PatternLines, Picture } from "@/components";
import { stories } from "@/data";
import type { Panel } from "@/data";
import { cn } from "@/lib";

function StoryPanel({
  panel: { id, title, body, image, alt },
  reverse,
  className,
  children,
}: {
  panel: Panel;
  reverse?: boolean;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <section
      aria-labelledby={id}
      className={cn(
        "relative flex flex-col wide:flex-row wide:gap-x-31.25",
        className,
      )}
    >
      <Picture
        {...image}
        alt={alt}
        loading="lazy"
        className={cn(
          "aspect-327/400 w-full object-cover shadow-panel sm:mx-auto sm:aspect-573/360 sm:max-w-143.25 wide:mx-0 wide:aspect-540/720 wide:w-135 wide:max-w-none wide:shrink-0 wide:self-start",
          { "wide:order-last": reverse },
        )}
      />

      <div
        className={cn(
          "mt-12 flex flex-col items-center text-center sm:mx-auto sm:mt-14 sm:max-w-114.25 wide:mx-0 wide:mt-61.5 wide:w-111.25 wide:max-w-none wide:items-start wide:text-left",
          { "wide:mt-0 wide:mb-61.5 wide:self-end": reverse },
        )}
      >
        <div className="v-divide" />

        <h2
          id={id}
          className="mt-9 text-display-sm font-bold whitespace-pre-line text-ink sm:mt-10 sm:text-section wide:mt-14"
        >
          {title}
        </h2>

        <p className="mt-3 text-body-sm text-ink sm:mt-7 sm:text-body">
          {body}
        </p>
      </div>

      {children}
    </section>
  );
}

export default function StoryPanels() {
  const [enjoyable, sourced] = stories;

  return (
    <div className="relative isolate z-10 -mt-18 sm:-mt-24 wide:-mt-17.5">
      <div className="v-board">
        <StoryPanel panel={enjoyable}>
          <Curve
            corner="top-right"
            className="top-49 right-1/2 -z-10 wide:top-80 wide:right-95"
          />
        </StoryPanel>

        <StoryPanel panel={sourced} reverse className="mt-25 sm:mt-30">
          <PatternLines className="top-57 right-0 wide:top-70.5 wide:-right-28.5" />
        </StoryPanel>
      </div>
    </div>
  );
}
