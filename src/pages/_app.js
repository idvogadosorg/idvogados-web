import React from 'react';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';

import COLORS from '@styles/colors';

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Idvg</title>
    </Head>
    <ThemeProvider theme={COLORS}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default App;
