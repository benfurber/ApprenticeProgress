import ApolloClient from "apollo-boost";
import "isomorphic-fetch";

const client = new ApolloClient({
  uri: "https://apprentice-progress-api.herokuapp.com/",
});

export { client };
