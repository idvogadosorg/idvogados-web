import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import exampleClient from '../services/graphql';

// eslint-disable-next-line react/prop-types
const App = ({ Component, pageProps }) => (
  <ApolloProvider client={exampleClient}>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </ApolloProvider>
);

export default App;
