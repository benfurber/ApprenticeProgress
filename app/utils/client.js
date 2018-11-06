import Config from "react-native-config";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: Config.PRODUCTION_API_ENDPOINT,
});

export { client };
