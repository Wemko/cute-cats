import '@/styles/globals.scss'
import { ApolloProvider } from '@apollo/client'
import client from 'lib/apollo/client/apolloClient';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
