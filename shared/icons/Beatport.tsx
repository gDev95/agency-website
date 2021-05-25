import React from "react";
import { IconPropTypes } from "./types";

export const Beatport = ({
  color = "#000000",
  ...otherProps
}: IconPropTypes) => {
  return (
    <svg
      fill={color}
      width="32"
      height="24"
      viewBox="0 0 32 24"
      {...otherProps}
    >
      <image
        y="3"
        width="32"
        height="19"
        xlinkHref="data:img/png;base64,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"
      />
    </svg>
  );
};
