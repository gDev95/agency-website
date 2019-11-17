import Head from "next/head";

import { withApollo } from "../lib/apollo";
import Nav from "../components/nav";
import ArtistList from "../components/artist-list";

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
		<ArtistList />
	</div>
);

export default withApollo(Artists);
