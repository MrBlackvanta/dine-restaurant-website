import familyDesktop from "@/assets/images/home/family-gathering-desktop.webp";
import familyDesktop2x from "@/assets/images/home/family-gathering-desktop@2x.webp";
import familyMobile from "@/assets/images/home/family-gathering-mobile.webp";
import familyMobile2x from "@/assets/images/home/family-gathering-mobile@2x.webp";
import familyTablet from "@/assets/images/home/family-gathering-tablet.webp";
import familyTablet2x from "@/assets/images/home/family-gathering-tablet@2x.webp";
import socialDesktop from "@/assets/images/home/social-events-desktop.webp";
import socialDesktop2x from "@/assets/images/home/social-events-desktop@2x.webp";
import socialMobile from "@/assets/images/home/social-events-mobile.webp";
import socialMobile2x from "@/assets/images/home/social-events-mobile@2x.webp";
import socialTablet from "@/assets/images/home/social-events-tablet.webp";
import socialTablet2x from "@/assets/images/home/social-events-tablet@2x.webp";
import specialDesktop from "@/assets/images/home/special-events-desktop.webp";
import specialDesktop2x from "@/assets/images/home/special-events-desktop@2x.webp";
import specialMobile from "@/assets/images/home/special-events-mobile.webp";
import specialMobile2x from "@/assets/images/home/special-events-mobile@2x.webp";
import specialTablet from "@/assets/images/home/special-events-tablet.webp";
import specialTablet2x from "@/assets/images/home/special-events-tablet@2x.webp";

import type { Panel } from "./data.types";

export const events: Panel[] = [
  {
    id: "family-gathering",
    title: "Family Gathering",
    body: "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.",
    image: {
      mobile: { src: familyMobile, src2x: familyMobile2x },
      tablet: { src: familyTablet, src2x: familyTablet2x },
      desktop: { src: familyDesktop, src2x: familyDesktop2x },
    },
    alt: "",
  },
  {
    id: "special-events",
    title: "Special Events",
    body: "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.",
    image: {
      mobile: { src: specialMobile, src2x: specialMobile2x },
      tablet: { src: specialTablet, src2x: specialTablet2x },
      desktop: { src: specialDesktop, src2x: specialDesktop2x },
    },
    alt: "",
  },
  {
    id: "social-events",
    title: "Social Events",
    body: "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.",
    image: {
      mobile: { src: socialMobile, src2x: socialMobile2x },
      tablet: { src: socialTablet, src2x: socialTablet2x },
      desktop: { src: socialDesktop, src2x: socialDesktop2x },
    },
    alt: "",
  },
];
