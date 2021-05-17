import React from "react";
import Head from "next/head";
import { Nav, Footer } from "../shared/ui";
import { IntlProvider } from "react-intl";
import { useLanguage } from "../helpers";
import { withApollo } from "../lib/apollo";

import "../main.css";
import { useRouter } from "next/router";

function App({ Component, pageProps }: any) {
  const { locale, translations } = useLanguage();
  const { route } = useRouter();
  const isRouteHome = route === "/";
  return (
    <IntlProvider messages={translations} locale={locale} defaultLocale="en">
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
