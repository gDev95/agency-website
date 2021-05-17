import styled from "styled-components";
import { Theme } from "../theme";

export const NavLink = styled.a<{ color?: string }>`
  text-decoration: none;
  color: ${({ color }) => (color ? color : Theme.white)};
  cursor: pointer;
`;
