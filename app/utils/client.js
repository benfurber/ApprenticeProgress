import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://apprentice-progress-api.herokuapp.com/",
});

export { client };
