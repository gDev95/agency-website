import React from "react";
import styled, { css } from "styled-components";

const StyledLogo = styled.img<{ width: number; height: number }>`
  ${({ width, height }) => css`
    width: ${width}px;
    height: ${height}px;
  `}
`;

type PropsType = {
  width: number;
  height: number;
  src: string;
};

export const NoboBookingsLogo = ({ width, height, src }: PropsType) => {
  return (
    <StyledLogo
      alt="No Borders Bookings Logo"
      src={src}
      width={width}
      height={height}
    />
  );
};
