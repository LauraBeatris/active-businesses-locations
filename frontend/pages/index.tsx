import { useState } from 'react'
import Head from 'next/head'
import { Flex, VStack } from '@chakra-ui/react'

import seoConfig from 'config/seo'
import Header from 'components/Header'

import MaxWidthContainer from 'components/MaxWidthContainer'
import BusinessFilters from 'components/BusinessFilters'
import { BusinessFiltersValue } from 'components/BusinessFilters/types'

const Main = () => {
  const [businessFilterValue, setBusinessFilterValue] = useState(BusinessFiltersValue.All)

  return (
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
      >
        <MaxWidthContainer>
          <VStack
            marginTop={-5}
            spacing={10}
            width='full'
          >
            <BusinessFilters
              handleBusinessFilterValueChange={setBusinessFilterValue}
              businessFilterValue={businessFilterValue}
            />
          </VStack>
        </MaxWidthContainer>
      </Flex>
    </>
  )
}

export default Main
