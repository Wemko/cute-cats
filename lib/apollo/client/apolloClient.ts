import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
import { GRAPHQL_API_URL } from "../../constants";

const httpLink: ApolloLink = createHttpLink({
    uri: GRAPHQL_API_URL
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;