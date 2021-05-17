import styled from "styled-components";
export const ArtistsProfileImage = styled.img<{
  size: number;
}>`
  ${({ size }) =>
    `
      width: ${size}px;
      height: ${size}px;
      border-radius: ${size / 2}px;
      object-fit: cover;
  `}
 
`;
