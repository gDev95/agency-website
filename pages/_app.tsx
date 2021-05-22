import React, { useMemo } from "react";
import Head from "next/head";
import { Nav, Footer } from "../shared/ui";
import { IntlProvider } from "react-intl";
import { useLanguage } from "../helpers";
import { withApollo } from "../lib/apollo";

import "../main.css";
import { PageContentContext } from "../shared/pageContent";

function App({ Component, pageProps }: any) {
  const { locale, translations } = useLanguage();
  const pageId = useMemo(() => {
    if (!process.env.NEXT_PUBLIC_CONTENT_PAGE_ID) {
      throw new Error("Expected env CONTENT_PAGE_ID but it did not exist");
    }

    return process.env.NEXT_PUBLIC_CONTENT_PAGE_ID;
  }, []);

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
        <PageContentContext.Provider value={pageId}>
          <Nav />
          <Component {...pageProps} />
          <Footer />
        </PageContentContext.Provider>
      </div>
    </IntlProvider>
  );
}

export default withApollo(App);
