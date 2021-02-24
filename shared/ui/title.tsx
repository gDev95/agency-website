import React, { ReactNode } from "react";
import styled from "styled-components";

const TitleWrapper = styled.h1`
  font-size: 28px;
`;

type PropsType = { value: ReactNode | string };
export const Title = ({ value, ...otherProps }: PropsType) => {
  return (
    <>
      <TitleWrapper {...otherProps}>{value}</TitleWrapper>
    </>
  );
};
