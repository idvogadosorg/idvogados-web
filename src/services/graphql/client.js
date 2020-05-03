import ApolloClient from 'apollo-boost';
import fetch from 'node-fetch';

const exampleClient = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
  fetch,
});

export default exampleClient;
