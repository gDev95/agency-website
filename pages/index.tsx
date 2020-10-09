import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import styled from "styled-components";
import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";
import { getTranslatedMessages, useLanguage } from "../helpers";

import "../main.css";
import { Home } from "./home";

const StyledNav = styled(Nav)`
	position: absolute;
	z-index: 1;
`;

const App = () => {
	const router = useRouter();
	const { language, translations } = useLanguage();
	console.log(language, translations);
	return (
		<IntlProvider messages={translations} locale={language} defaultLocale="en">
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
				<Home />
			</div>
		</IntlProvider>
	);
};

export default App;
