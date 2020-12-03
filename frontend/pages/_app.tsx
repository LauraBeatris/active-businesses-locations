import Head from 'next/head'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import theme from 'styles/theme'

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </Head>
    <ChakraProvider theme={theme} resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  </>
)

export default App
