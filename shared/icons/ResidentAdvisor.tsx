import React from "react";
import { IconPropTypes } from "./types";

export const ResidentAdvisor = ({
  color = "#000000",
  ...otherProps
}: IconPropTypes) => {
  return (
    <svg
      fill={color}
      width="32"
      height="15"
      viewBox="0 0 32 15"
      {...otherProps}
    >
      <image
        width="32"
        height="15"
        xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAPCAYAAACFgM0XAAABg0lEQVQ4jaWVzStFYRDGf+cSNtfXgggLeysLG/+ByELZskTdFElW/gElCwsWNkqxkLrZkI9sFCspIUSxsvERUqK5zanj7X3Pe869T83ivPPMzHPmzDsnAB6BZuANN8qAL+Aa2AAWgc8YfogGYBC4AHZdpBfgN6WJmB5P8XagFRgC+uKIxQgIbdSRc0D9C/qcSSrgHdgH9oBDtQNgB7hyiBg38uUM/6ynU/8EnHu43cCzRcRUhHNs8c+7EgYqoFqfZSAnNKhSz8qVJ0P0ADQCp0CLkasXyCtfRHQafhncMV8HfDasMXXAXYS7ZuTMODqxVKoAsRGNq9XbsOlqL3BkiV8xSa9FTH8u0olsjAB0qM341dAZ6D3N6tuY+ADqgWldVlFMAnOe4iHylr2xrksqEZp0QM03mUmaAFi2xG8FKRLIWj0B2ozzMxVX5YirAG61y/2G7ylF/QLkc9yUsDmj9gN0pRUgqAEuSyz+bdkTqSCLa1uTyaDKTfKZ/G2Ffw90FKoBf0zQ1PJeukhIAAAAAElFTkSuQmCC"
      />
    </svg>
  );
};
