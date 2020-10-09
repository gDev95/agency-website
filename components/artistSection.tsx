import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";

const StyledSection = styled.section`
	width: 80%;
	display: flex;
	margin: 24px auto;
	font-size: 13px;
	flex-direction: column;
	height: 100%;
`;

const StyledHeader = styled.div``;

export const ArtistOverview = () => {
	return (
		<StyledSection>
			<StyledHeader>
				<h3>
					<FormattedMessage id="Home.Mission.Header" />
				</h3>
			</StyledHeader>
		</StyledSection>
	);
};
