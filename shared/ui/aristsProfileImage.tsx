import styled from "styled-components";
export const ArtistsProfileImage = styled.img<{
  size: string;
}>`
  ${({ size }) =>
    `
      width: ${size}px;
      height: ${size}px;
  `}
  border-radius: 50px;
`;
