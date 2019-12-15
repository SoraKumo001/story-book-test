import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { createStore } from "redux";
import { ApolloProvider } from "react-apollo";
import { Provider } from "react-redux";
import React, { ReactNode } from "react";

const store = createStore(() => {});
const cache = new InMemoryCache();
const httpLink = new HttpLink({
  uri: "http://localhost:3000/graphql"
});

const client = new ApolloClient({
  link: httpLink,
  cache,
  // defaultOptions: {
  //   watchQuery: {
  //     fetchPolicy: "cache-and-network"
  //   }
  // }
});

export function Header(props: { children: ReactNode }) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>{props.children}</Provider>
    </ApolloProvider>
  );
}
