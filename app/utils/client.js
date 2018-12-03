import Config from "react-native-config";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";

import { AsyncStorage } from "react-native";

const httpLink = createHttpLink({
  uri: Config.PRODUCTION_API_ENDPOINT,
});

const defaults = {
  isLoggedIn: false,
};

const resolvers = {};

const typeDefs = {};

const authLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem("token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  clientState: {
    defaults,
    resolvers,
    typeDefs,
  },
});

export { client };
