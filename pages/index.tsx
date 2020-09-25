import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

import "../main.css";
import { Introduction } from "../components/introduction";
import { Mission } from "../components/mission";

const StyledNav = styled(Nav)`
	position: absolute;
	z-index: 1;
`;

const Home = () => {
	const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });
	return (
		<div>
			<Head>
				<title>Nobo Bookings</title>
				<link rel="icon" href="/favicon.ico" />
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<StyledNav />
			<Introduction />
			<Mission />
		</div>
	);
};

export default Home;
