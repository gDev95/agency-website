import styled from "styled-components";

export const CoverImageContainer = styled.div<{
  isMobileScreen: boolean;
  backgroundImage: string;
}>`
	height:${({ isMobileScreen }) => (isMobileScreen ? "50vh" : "100vh")}
	background-color: black;
	background-image: ${({ backgroundImage }) => `url(${backgroundImage})`}; 
	background-repeat: no-repeat;
	background-size: cover;
  background-attachment: fixed;
	background-position: center;
`;
