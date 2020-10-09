import React from "react";
import { useIntl } from "react-intl";
import { Mission } from "../components/mission";
import { Introduction } from "../components/introduction";
import { VideoSection } from "../components/videoSection";
import styled from "styled-components";
import { ArtistOverview } from "../components/artistSection";

const StyledSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: space-between;
`;

export const Home = ({}) => {
	return (
		<StyledSection>
			<Introduction />
			<Mission />
			<VideoSection embeddedVideoUrl="https://www.youtube.com/watch?v=Jb4prVsXkZU&ab_channel=BretCopeland" />
			<ArtistOverview />
		</StyledSection>
	);
};
