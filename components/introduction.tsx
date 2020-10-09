import React from "react";
import { Container } from "./shared-ui";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { CSSTransitionGroup } from "react-transition-group";
import { FormattedMessage } from "react-intl";

// https://github.com/microsoft/TypeScript/issues/37597
const SloganContainer = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;

	/* Animations */
	&.mount-fade-in-appear {
		opacity: 0.01;
	}

	&.mount-fade-in-appear-active {
		opacity: 1;
		transition: opacity 1s ease-in;
	}
	background: rgba(0, 0, 0, 0.6);
`;

// https://github.com/microsoft/TypeScript/issues/37597
const SloganWrapper = styled(Container as any)`
	color: #fff;
	display: flex;
	text-align: center;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 12px;
	width: 70%;

	transition: opacity 1s ease-in;
`;
const StyledHorizontalLine = styled.hr<{ isMobileScreen: boolean }>`
	width: 80%;
	color: #fff;
`;
const CoverImageContainer = styled.div<{
	isMobileScreen: boolean;
	backgroundImage: string;
}>`
	height:${({ isMobileScreen }) => (isMobileScreen ? "50vh" : "100vh")}
	background-color: grey;
	background-image: ${({ backgroundImage }) => `url(${backgroundImage})`}; 
	background-repeat: no-repeat
	background-size: cover;
	background-position: center;
`;
const StyledButton = styled.button`
	background-color: transparent;
	border: 1px solid #fff;
	color: #fff;
	height: 50px;
	padding: 0 20px;
	font-size: 17px;
	text-decoration: none;
	cursor: pointer;
	text-transform: uppercase;
	border-radius: 3px;

	&:hover {
		color: #fff;
		border: 1px solid #ccc;
		font-weight: bold;
	}
	&:focus {
		border: 1px solid #aaa;
		outline: 0;
	}
`;

export const Introduction = () => {
	const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });
	return (
		<CoverImageContainer
			isMobileScreen={isMobileScreen}
			backgroundImage="/homepage-cover.png"
		>
			<CSSTransitionGroup
				transitionName="mount-fade-in"
				transitionAppear={true}
				transitionAppearTimeout={1000}
				transitionEnter={false}
				transitionLeave={false}
			>
				<SloganContainer>
					<SloganWrapper>
						<h2>
							<FormattedMessage id="Home.CompanyName" />
						</h2>
						<StyledHorizontalLine isMobileScreen={isMobileScreen} />
						<h1>
							<FormattedMessage id="Home.Slogan" />
						</h1>
						<StyledButton>
							<FormattedMessage id="Home.MoreInfo" />
						</StyledButton>
					</SloganWrapper>
				</SloganContainer>
			</CSSTransitionGroup>
		</CoverImageContainer>
	);
};
