import type { Crop } from "@/components";

export type ResponsiveImage = {
  mobile: Crop;
  tablet: Crop;
  desktop?: Crop;
};

export type Panel = {
  id: string;
  title: string;
  body: string;
  image: ResponsiveImage;
  alt: string;
};
