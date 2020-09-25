import React from "react";
import { Container } from "./shared-ui";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const MissionStatement = styled.div`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	font-size: 13px;
`;

const StyledSection = styled.section`
	width: 80%;
	display: flex;
	margin: 24px auto;
	justify-content: space-between;
	height: 100%;
	overflow: hidden;
`;

const ImageContainer = styled.div`
	flex-grow: 1;
	height: 100%;
`;

const StyledImage = styled.img`
	max-width: 100%;
	max-height: 100%;
`;

const StyledHorizontalLine = styled.hr`
	width: 30%;
	margin-top: 0px;
	margin-bottom: 0px;
	margin-right: 70%;
`;

const Styled = styled.span`
	color: #666;
`;

export const Mission = () => {
	const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });
	return (
		<StyledSection>
			<MissionStatement>
				<h3>Our Mission</h3>
				<StyledHorizontalLine />
				<p>
					The world has reached a very critical point. We are seeing acts of
					hate, violence, greed and environmental injustice all over the globe.
					In order for our species to confront and survive this unprecedented
					crisis, we will need to stand together and recover our true self.
				</p>
				{isMobileScreen && (
					<ImageContainer>
						<StyledImage src="../enric-ceo.jpg" />
						<Styled>Enrice - Founder of Nobo Bookings</Styled>
					</ImageContainer>
				)}
				<p>
					At NoBo Bookings we believe that music is the most powerful conductor
					of love, a force that can trump hate and unite all people under an
					umbrella of tolerance and appreciation. That is why we focus on
					finding undiscovered talent and we shed light on them. We want to give
					to all those young passionate artists the chance to share their vision
					with the world. We want to be part of the process of unification and
					share these ravishing vibes with all of you.
				</p>
			</MissionStatement>
			{!isMobileScreen && (
				<ImageContainer>
					<StyledImage src="../enric-ceo.jpg" />
				</ImageContainer>
			)}
		</StyledSection>
	);
};
