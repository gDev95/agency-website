import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React, { useMemo } from "react";
export const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: true,
    uri: "https://agency-grapqhl-api.herokuapp.com/graphql",
    cache: new InMemoryCache()
  });
};

export const initializeApolloClient = (initialState?: {}) => {
  const client = createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = client.extract();

    // Restore the cache using the data passed from
    // getStaticProps/getServerSideProps combined with the existing cached data
    client.cache.restore({ ...existingCache, ...initialState });
  }

  return client;
};

export function useApollo(initialState?: {}) {
  const store = useMemo(() => initializeApolloClient(initialState), [
    initialState
  ]);
  return store;
}

export function withApollo(PageComponent: any = {}, pageProps?: {}) {
  return () => {
    const client = useApollo();
    return (
      <ApolloProvider client={client}>
        <PageComponent {...pageProps} />
      </ApolloProvider>
    );
  };
}
