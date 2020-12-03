import { useState } from 'react'
import Head from 'next/head'
import { Flex, VStack } from '@chakra-ui/react'

import seoConfig from 'config/seo'
import Header from 'components/Header'

import OldestBusiness from 'components/OldestBusiness'
import BusinessesList from 'components/BusinessesList'
import BusinessFilters from 'components/BusinessFilters'
import MaxWidthContainer from 'components/MaxWidthContainer'
import { BusinessFiltersValue } from 'components/BusinessFilters/types'

const Main = () => {
  const [businessFilterValue, setBusinessFilterValue] = useState(BusinessFiltersValue.All)

  return (
    <Flex
      flexDirection='column'
      maxHeight='100vh'
      width='100vw'
      height='100vh'
    >
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
            spacing={8}
            width='full'
          >
            <BusinessFilters
              handleBusinessFilterValueChange={setBusinessFilterValue}
              businessFilterValue={businessFilterValue}
            />

            {
              businessFilterValue === BusinessFiltersValue.All && (
                <BusinessesList />
              )
            }

            {
              businessFilterValue === BusinessFiltersValue.Oldest && (
                <OldestBusiness />
              )
            }
          </VStack>
        </MaxWidthContainer>
      </Flex>
    </Flex>
  )
}

export default Main
