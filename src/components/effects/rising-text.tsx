import { Fragment, type CSSProperties } from "react";

export default function RisingText({ text }: { text: string }) {
  return text.split("\n").map((line, index) => (
    <span
      key={index}
      className="v-line"
      style={{ "--v-line": index } as CSSProperties}
    >
      {line.split(" ").map((word, position) => (
        <Fragment key={position}>
          {position > 0 && " "}
          <span
            className="v-rise"
            style={{ "--v-word": position } as CSSProperties}
          >
            {word}
          </span>
        </Fragment>
      ))}
    </span>
  ));
}
