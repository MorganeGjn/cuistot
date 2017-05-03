import ApolloClient, { createNetworkInterface } from 'apollo-client';

const client = new ApolloClient({
  ssrMode: true,
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:3000/graphql',
    opts: {
      credentials: 'same-origin',
    },
    transportBatching: true,
  }),
  reduxRootSelector: (state) => state.get('apollo'),
});

export default client;

export const apolloReducer = client.reducer();
