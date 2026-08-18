import beefDesktop from "@/assets/images/home/beef-desktop-tablet.webp";
import beefDesktop2x from "@/assets/images/home/beef-desktop-tablet@2x.webp";
import beefMobile from "@/assets/images/home/beef-mobile.webp";
import beefMobile2x from "@/assets/images/home/beef-mobile@2x.webp";
import chocolateDesktop from "@/assets/images/home/chocolate-desktop-tablet.webp";
import chocolateDesktop2x from "@/assets/images/home/chocolate-desktop-tablet@2x.webp";
import chocolateMobile from "@/assets/images/home/chocolate-mobile.webp";
import chocolateMobile2x from "@/assets/images/home/chocolate-mobile@2x.webp";
import salmonDesktop from "@/assets/images/home/salmon-desktop-tablet.webp";
import salmonDesktop2x from "@/assets/images/home/salmon-desktop-tablet@2x.webp";
import salmonMobile from "@/assets/images/home/salmon-mobile.webp";
import salmonMobile2x from "@/assets/images/home/salmon-mobile@2x.webp";

import type { Panel } from "./data.types";

export const dishes: Panel[] = [
  {
    id: "seared-salmon-fillet",
    title: "Seared Salmon Fillet",
    body: "Our locally sourced salmon served with a refreshing buckwheat summer salad.",
    image: {
      mobile: { src: salmonMobile, src2x: salmonMobile2x },
      tablet: { src: salmonDesktop, src2x: salmonDesktop2x },
    },
    alt: "",
  },
  {
    id: "rosemary-filet-mignon",
    title: "Rosemary Filet Mignon",
    body: "Our prime beef served to your taste with a delicious choice of seasonal sides.",
    image: {
      mobile: { src: beefMobile, src2x: beefMobile2x },
      tablet: { src: beefDesktop, src2x: beefDesktop2x },
    },
    alt: "",
  },
  {
    id: "summer-fruit-chocolate-mousse",
    title: "Summer Fruit Chocolate Mousse",
    body: "Creamy mousse combined with summer fruits and dark chocolate shavings.",
    image: {
      mobile: { src: chocolateMobile, src2x: chocolateMobile2x },
      tablet: { src: chocolateDesktop, src2x: chocolateDesktop2x },
    },
    alt: "",
  },
];
