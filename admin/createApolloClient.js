import { ApolloClient, createNetworkInterface } from 'apollo-client';

let apolloClient = null;

function createClient(graphqlEndPoint) {
  return new ApolloClient({
    networkInterface: createNetworkInterface({
      uri: graphqlEndPoint,
    }),
  });
}

export default (graphqlEndPoint) => {
  apolloClient = createClient(graphqlEndPoint);
  return apolloClient;
};
