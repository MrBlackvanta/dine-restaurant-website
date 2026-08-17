import type { StaticImageData } from "next/image";

export type Crop = { src: StaticImageData; src2x: StaticImageData };

const srcSet = ({ src, src2x }: Crop) => `${src.src} 1x, ${src2x.src} 2x`;

type Props = {
  mobile: Crop;
  tablet?: Crop;
  desktop?: Crop;
  alt: string;
} & Omit<React.ComponentPropsWithoutRef<"img">, "src" | "srcSet" | "alt">;

export default function Picture({
  mobile,
  tablet,
  desktop,
  alt,
  ...img
}: Props) {
  return (
    <picture className="contents">
      {desktop && (
        <source media="(min-width: 76rem)" srcSet={srcSet(desktop)} />
      )}
      {tablet && <source media="(min-width: 40rem)" srcSet={srcSet(tablet)} />}
      <img
        src={mobile.src.src}
        srcSet={srcSet(mobile)}
        alt={alt}
        width={mobile.src.width}
        height={mobile.src.height}
        {...img}
      />
    </picture>
  );
}
