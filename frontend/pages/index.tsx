import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'

import seoConfig from 'config/seo'

const Main = () => (
  <>
    <Head>
      <title>{seoConfig.title}</title>
    </Head>
    <Container
      backgroundColor='orange.100'
      centerContent
      minHeight='100vh'
      maxW='xl'
    />
  </>
)

export default Main
