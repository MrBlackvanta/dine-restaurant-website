"use client";

import { useRef, useState, type CSSProperties } from "react";

import { ButtonLink, PatternLines, Picture } from "@/components";
import { events } from "@/data";
import { cn } from "@/lib";

const tabId = (id: string) => `tab-${id}`;
const panelId = (id: string) => `panel-${id}`;

export default function EventTabs() {
  const [activeId, setActiveId] = useState(events[0].id);
  const tabs = useRef<Record<string, HTMLButtonElement | null>>({});
  const activeIndex = events.findIndex(({ id }) => id === activeId);

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    const target = {
      ArrowLeft: activeIndex - 1,
      ArrowUp: activeIndex - 1,
      ArrowRight: activeIndex + 1,
      ArrowDown: activeIndex + 1,
      Home: 0,
      End: events.length - 1,
    }[event.key];

    if (target === undefined) return;

    event.preventDefault();
    const { id } = events[(target + events.length) % events.length];
    setActiveId(id);
    tabs.current[id]?.focus();
  }

  return (
    <div className="v-board mt-20 sm:mt-30 wide:mt-40">
      <section className="relative flex flex-col wide:flex-row wide:gap-x-31.25">
        <PatternLines className="-top-9.5 left-0 hidden sm:block wide:-left-10" />

        <div className="relative aspect-327/400 w-full v-unveil overflow-clip sm:mx-auto sm:aspect-573/360 sm:max-w-143.25 wide:mx-0 wide:aspect-540/600 wide:w-135 wide:max-w-none wide:shrink-0 wide:self-start">
          {events.map(({ id, image, alt }) => (
            <div
              key={id}
              className={cn(
                "absolute inset-0 overflow-clip motion-safe:transition-[opacity,scale] motion-safe:duration-700 motion-safe:ease-out-expo",
                id === activeId
                  ? "scale-100 opacity-100"
                  : "scale-105 opacity-0",
              )}
            >
              <Picture
                {...image}
                alt={alt}
                loading="lazy"
                className="size-full v-parallax object-cover"
              />
            </div>
          ))}
        </div>

        <div className="flex w-full v-reveal flex-col items-center text-center wide:mt-17.5 wide:w-111.25 wide:items-start wide:text-left">
          <div
            role="tablist"
            aria-label="Events"
            onKeyDown={handleKeyDown}
            className="relative mt-10 flex w-full flex-col items-center sm:mt-12 sm:flex-row wide:order-last wide:mt-20 wide:flex-col wide:items-start wide:gap-y-3"
          >
            <span
              aria-hidden="true"
              style={{ "--tab": activeIndex } as CSSProperties}
              className="pointer-events-none absolute top-0 left-0 h-11 w-full translate-y-[calc(var(--tab)*2.75rem)] motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out-expo sm:w-1/3 sm:translate-x-[calc(var(--tab)*100%)] sm:translate-y-0 wide:h-7 wide:w-full wide:translate-x-0 wide:translate-y-[calc(var(--tab)*2.5rem)]"
            >
              <span className="absolute bottom-2 left-1/2 h-px w-12 -translate-x-1/2 bg-accent sm:bottom-0 wide:top-3.25 wide:right-full wide:bottom-auto wide:left-auto wide:mr-7.5 wide:w-23.75 wide:translate-x-0" />
            </span>

            {events.map(({ id, title }) => (
              <button
                key={id}
                ref={(node) => {
                  tabs.current[id] = node;
                }}
                type="button"
                role="tab"
                id={tabId(id)}
                aria-controls={panelId(id)}
                aria-selected={id === activeId}
                tabIndex={id === activeId ? 0 : -1}
                onClick={() => setActiveId(id)}
                className={cn(
                  "py-2 text-eyebrow font-semibold uppercase motion-safe:transition-colors motion-safe:duration-300 sm:flex-1 wide:flex-none wide:py-0",
                  id === activeId
                    ? "text-tab"
                    : "text-ink-muted hover:text-tab",
                )}
              >
                {title}
              </button>
            ))}
          </div>

          {events.map(({ id, title, body }) => (
            <div
              key={id}
              id={panelId(id)}
              role="tabpanel"
              aria-labelledby={tabId(id)}
              hidden={id !== activeId}
              tabIndex={0}
              className="mt-5 w-full sm:mt-12 sm:w-114.25 wide:mt-0 wide:w-full"
            >
              <h2 className="v-swap text-display-sm font-bold text-ink sm:text-section">
                {title}
              </h2>

              <p className="mt-3 v-swap text-body-sm text-ink v-swap-delay-80 sm:mt-5 sm:min-h-30 sm:text-body">
                {body}
              </p>
            </div>
          ))}

          <ButtonLink href="/booking" className="mt-7 w-61.25 sm:mt-7.5">
            Book a table
          </ButtonLink>
        </div>
      </section>
    </div>
  );
}
