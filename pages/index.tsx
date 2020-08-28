import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import styled from "styled-components";

const WebsiteContainer = styled.div`
	width: 85%;
	margin: auto;
`;

const Home = () => (
	<WebsiteContainer>
		<Head>
			<title>Home</title>
			<link rel="icon" href="/favicon.ico" />
			<link
				href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
				rel="stylesheet"
			/>
			<link
				href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
				rel="stylesheet"
			></link>
		</Head>

		<Nav />
	</WebsiteContainer>
);

export default Home;
