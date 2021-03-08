import React from "react";
import Head from "next/head";
import { Nav, Footer } from "../shared/ui";
import styled from "styled-components";
import { IntlProvider } from "react-intl";
import { useLanguage } from "../helpers";
import { withApollo } from "../lib/apollo";

import "../main.css";
import { useIsSmallScreen } from "../shared";

function App({ Component, pageProps }: any) {
  const { language, translations } = useLanguage();
  const isMobileScreen = useIsSmallScreen();
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
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </div>
    </IntlProvider>
  );
}

export default withApollo(App);
