import React from "react";
import { Container } from "../shared-ui";
import styled, { css } from "styled-components";
import { useMediaQuery } from "react-responsive";
import { FormattedMessage } from "react-intl";

const MissionStatement = styled.div`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	font-size: 20px;
	width:100%;
	margin-right:30px;
`;

const StyledSection = styled.section`
	width: 100%;
	display: flex;
	margin: 24px auto;
	justify-content: center;
	height: 100%;
	overflow: hidden;
`;

const ImageContainer = styled.div`
	flex-grow: 1;
	height: 100%;
	width: 100%;
	display:flex;
	align-items: center;
	justify-content:center;		
	flex-direction: column
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

const Wrapper = styled.div`
	display:flex;
	width: 90%;
	justify-content: space-between;
`
const Styled = styled.span`
	color: #666;
`;

export const Mission = () => {
	const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });
	return (
		<StyledSection>
			<Wrapper>
			<MissionStatement>
				<h3>
					<FormattedMessage id="Home.Mission.Header" />
				</h3>
				<StyledHorizontalLine />
				<p>
					<FormattedMessage id="Home.Mission.Details.Paragraph1" />
				</p>
				{isMobileScreen && (
					<ImageContainer >
						<StyledImage src="/enric-ceo.jpg" />
						<Styled>
							<FormattedMessage id="Home.Mission.FounderImage.Description" />
						</Styled>
					</ImageContainer>
				)}
				<p>
					<FormattedMessage id="Home.Mission.Details.Paragraph2" />
				</p>
			</MissionStatement>
			{!isMobileScreen && (
				<ImageContainer>
					<StyledImage src="/enric-ceo.jpg" />
					<Styled>
						<FormattedMessage id="Home.Mission.FounderImage.Description" />
					</Styled>
				</ImageContainer>
			)}
			</Wrapper>
		</StyledSection>
	);
};
