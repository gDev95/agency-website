import Head from "next/head";
import styled from "styled-components";
import { withApollo } from "../lib/apollo";
import Nav from "../components/nav";
import ArtistList from "../components/artist-list";

const StyledHeader = styled.h2`
	text-align: center;
`;

const StyledInnerContainer = styled.div`
	width: 80%;
	margin: auto;
`;
const Artists = () => (
	<div>
		<Head>
			<title>Artists</title>
			<link rel="icon" href="/favicon.ico" />
			<link
				href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300&display=swap"
				rel="stylesheet"
			></link>
		</Head>
		<Nav />
		<StyledInnerContainer>
			<StyledHeader>Our Artists</StyledHeader>
			<ArtistList />
		</StyledInnerContainer>
	</div>
);

export default withApollo(Artists);
