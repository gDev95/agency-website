import Head from "next/head";
import styled from "styled-components";
import { withApollo } from "../lib/apollo";
import Nav from "../components/nav";
import ArtistList from "../components/artist-list";
import gql from "graphql-tag";

const StyledHeader = styled.h2`
	text-align: center;
`;

const StyledOuterContainer = styled.div``;

type Props {
	id: string;
}

export const ARTIST_QUERY = gql`
	query Artists {
		artists {
			id
			basicInformation {
				name
				profileImageUrl
			}
		}
	}
`;

const Artist = ({ id }: Props) => {
	return (
		<div>
			<Head>
				<title>Artists</title>
				<link rel="icon" href="/favicon.ico" />
				<link
					href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<StyledOuterContainer>
				<Nav />
				<StyledHeader>Our Artists</StyledHeader>
				<ArtistList />
			</StyledOuterContainer>
		</div>
	);
};

export default withApollo(Artist);
