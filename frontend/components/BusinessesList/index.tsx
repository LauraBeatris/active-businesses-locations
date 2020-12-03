import { VStack } from '@chakra-ui/react'

import Business from 'components/Business'
import useBusinesses from 'hooks/useBusinesses'
import QueryHandlerWrapper from 'components/QueryHandlerWrapper'

const businessListCss = {
  '@media (min-width: 700px)': {
    'overscroll-behavior': 'contain'
  }
}

const BusinessesList: React.FC = () => {
  const { data, isError, isLoading } = useBusinesses()

  return (
    <QueryHandlerWrapper
      isLoading={isLoading}
      isError={isError}
    >
      <VStack
        paddingBottom={10}
        spacing={5}
        overflow='scroll'
        height='60vh'
        width='full'
        css={businessListCss}
      >
        {
          data?.map(business => (
            <Business
              locationStartDateString={business.location_start_date}
              zipCode={business.zip_code}
              street={business.street_address}
              name={business.business_name}
              city={business.city}
              key={business.location_account}
            />
          ))
        }
      </VStack>
    </QueryHandlerWrapper>
  )
}

export default BusinessesList
