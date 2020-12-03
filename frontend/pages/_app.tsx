import Head from 'next/head'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryCache, ReactQueryCacheProvider } from 'react-query'

import ReactQueryConfigProvider from 'providers/ReactQueryConfigProvider'
import theme from 'styles/theme'

const queryCache = new QueryCache()

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </Head>
    <ReactQueryCacheProvider queryCache={queryCache}>
      <ChakraProvider theme={theme} resetCSS>
        <ReactQueryConfigProvider>
          <Component {...pageProps} />
        </ReactQueryConfigProvider>
      </ChakraProvider>
    </ReactQueryCacheProvider>
  </>
)

export default App
