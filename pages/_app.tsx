import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import "./global.css";
import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>omika</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ChakraProvider>
      <Component {...pageProps} />
      </ChakraProvider>
    </React.Fragment>
  );
}

export default MyApp;
