"use client";

import { useRef, useState } from "react";

import { ButtonLink, PatternLines, Picture } from "@/components";
import { events } from "@/data";
import { cn } from "@/lib";

const tabId = (id: string) => `tab-${id}`;
const panelId = (id: string) => `panel-${id}`;

export default function EventTabs() {
  const [activeId, setActiveId] = useState(events[0].id);
  const tabs = useRef<Record<string, HTMLButtonElement | null>>({});

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    const current = events.findIndex(({ id }) => id === activeId);
    const target = {
      ArrowLeft: current - 1,
      ArrowUp: current - 1,
      ArrowRight: current + 1,
      ArrowDown: current + 1,
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
        <PatternLines className="-top-9.5 left-0 wide:-left-10" />

        <div className="grid w-full sm:mx-auto sm:max-w-143.25 wide:mx-0 wide:w-135 wide:max-w-none wide:shrink-0 wide:self-start">
          {events.map(({ id, image, alt }) => (
            <Picture
              key={id}
              {...image}
              alt={alt}
              loading="lazy"
              className={cn(
                "col-start-1 row-start-1 aspect-327/400 w-full object-cover motion-safe:transition-opacity motion-safe:duration-700 sm:aspect-573/360 wide:aspect-540/600",
                id === activeId ? "opacity-100" : "opacity-0",
              )}
            />
          ))}
        </div>

        <div className="flex w-full flex-col items-center text-center wide:mt-17.5 wide:w-111.25 wide:items-start wide:text-left">
          <div
            role="tablist"
            aria-label="Events"
            onKeyDown={handleKeyDown}
            className="mt-10 flex w-full flex-col items-center sm:mt-12 sm:flex-row wide:order-last wide:mt-20 wide:flex-col wide:items-start wide:gap-y-3"
          >
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
                  "relative py-2 text-eyebrow font-semibold uppercase motion-safe:transition-colors motion-safe:duration-300 sm:flex-1 wide:flex-none wide:py-0",
                  id === activeId
                    ? "text-tab"
                    : "text-ink-muted hover:text-tab",
                )}
              >
                {title}
                <span
                  className={cn(
                    "pointer-events-none absolute bottom-2 left-1/2 h-px w-12 -translate-x-1/2 bg-accent motion-safe:transition-opacity motion-safe:duration-300 sm:bottom-0 wide:top-3.25 wide:right-full wide:bottom-auto wide:left-auto wide:mr-7.5 wide:w-23.75 wide:translate-x-0",
                    id === activeId ? "opacity-100" : "opacity-0",
                  )}
                />
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
              <h2 className="text-display-sm font-bold text-ink sm:text-section">
                {title}
              </h2>

              <p className="mt-3 text-body-sm text-ink sm:mt-5 sm:min-h-30 sm:text-body">
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
