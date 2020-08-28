import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

import "../main.css";

const Container = styled.div`
	position: relative;
	width: 85%;
	margin: auto;
`;

const StyledCoverImageContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #fff;
	height: 100%;
`;
const StyledHorizontalLine = styled.hr`
	width: 400px;
	color: #fff;
`;
const CoverImageContainer = styled.div<{
	isMobileScreen: boolean;
	backgroundImage: string;
}>`
	height:${({ isMobileScreen }) => (isMobileScreen ? "50vh" : "100vh")}
	background-color: grey;
	background-image: ${({ backgroundImage }) => `url(${backgroundImage})`}; 
	background-repeat: no-repeat
	background-size: cover;
	background-position: center;
`;
const StyledNav = styled(Nav)`
	position: absolute;
	z-index: 1;
`;

const StyledButton = styled.button`
	background-color: transparent;
	border: 1px solid #fff;
	color: #fff;
	height: 50px;
	padding: 0 20px;
	font-size: 17px;
	text-decoration: none;
	cursor: pointer;
	text-transform: uppercase;
	border-radius: 3px;

	&:hover {
		color: #fff;
		border: 1px solid #ccc;
		font-weight: bold;
	}
	&:focus {
		border: 1px solid #aaa;
		outline: 0;
	}
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
			<CoverImageContainer
				isMobileScreen={isMobileScreen}
				backgroundImage="../homepage_cover.png"
			>
				<StyledCoverImageContainer>
					<h2>No Borders Booking</h2>
					<StyledHorizontalLine />
					<h1>OUR MISSION IS TO MAKE YOUR PARTY BETTER</h1>
					<StyledButton>More Info</StyledButton>
				</StyledCoverImageContainer>
			</CoverImageContainer>
		</div>
	);
};

export default Home;
