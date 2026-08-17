import enjoyableDesktop from "@/assets/images/home/enjoyable-place-desktop.webp";
import enjoyableDesktop2x from "@/assets/images/home/enjoyable-place-desktop@2x.webp";
import enjoyableMobile from "@/assets/images/home/enjoyable-place-mobile.webp";
import enjoyableMobile2x from "@/assets/images/home/enjoyable-place-mobile@2x.webp";
import enjoyableTablet from "@/assets/images/home/enjoyable-place-tablet.webp";
import enjoyableTablet2x from "@/assets/images/home/enjoyable-place-tablet@2x.webp";
import sourcedDesktop from "@/assets/images/home/locally-sourced-desktop.webp";
import sourcedDesktop2x from "@/assets/images/home/locally-sourced-desktop@2x.webp";
import sourcedMobile from "@/assets/images/home/locally-sourced-mobile.webp";
import sourcedMobile2x from "@/assets/images/home/locally-sourced-mobile@2x.webp";
import sourcedTablet from "@/assets/images/home/locally-sourced-tablet.webp";
import sourcedTablet2x from "@/assets/images/home/locally-sourced-tablet@2x.webp";

import type { Panel } from "./data.types";

export const stories: Panel[] = [
  {
    id: "enjoyable-place",
    title: "Enjoyable place\nfor all the family",
    body: "Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.",
    image: {
      mobile: { src: enjoyableMobile, src2x: enjoyableMobile2x },
      tablet: { src: enjoyableTablet, src2x: enjoyableTablet2x },
      desktop: { src: enjoyableDesktop, src2x: enjoyableDesktop2x },
    },
    alt: "Sheep grazing on the hillside above the farmhouse valley",
  },
  {
    id: "locally-sourced",
    title: "The most locally sourced food",
    body: "All our ingredients come directly from our farm or local fishery. So you can be sure that you're eating the freshest, most sustainable food.",
    image: {
      mobile: { src: sourcedMobile, src2x: sourcedMobile2x },
      tablet: { src: sourcedTablet, src2x: sourcedTablet2x },
      desktop: { src: sourcedDesktop, src2x: sourcedDesktop2x },
    },
    alt: "A chef finishing a dish by hand in the kitchen",
  },
];
