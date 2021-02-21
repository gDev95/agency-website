import React, { ReactNode } from "react";
import styled from "styled-components";

const TitleWrapper = styled.div`
  font-size: 28px;
`;
const StyledHorizontalLine = styled.hr`
  width: 30%;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-right: 70%;
`;
type PropsType = { value: ReactNode | string };
export const Title = ({ value }: PropsType) => {
  return (
    <>
      <TitleWrapper>{value}</TitleWrapper>
      <StyledHorizontalLine />
    </>
  );
};
