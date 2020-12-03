import Head from 'next/head'
import { Flex } from '@chakra-ui/react'

import seoConfig from 'config/seo'
import Header from 'components/Header'

import MaxWidthContainer from 'components/MaxWidthContainer'

const Main = () => (
  <>
    <Head>
      <title>{seoConfig.title}</title>
    </Head>
    <Flex
      backgroundColor='orange.100'
      flexDirection='column'
    >
      <MaxWidthContainer>
        <Header />
      </MaxWidthContainer>
    </Flex>
    <Flex
      backgroundColor='white'
      flexDirection='column'
    />
  </>
)

export default Main
