import React from "react";
import { Container } from "./shared-ui";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { FormattedMessage } from "react-intl";

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
				<h3>
					<FormattedMessage id="Home.Mission.Header" />
				</h3>
				<StyledHorizontalLine />
				<p>
					<FormattedMessage id="Home.Mission.Details.Paragraph1" />
				</p>
				{isMobileScreen && (
					<ImageContainer>
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
				</ImageContainer>
			)}
		</StyledSection>
	);
};
