import { VStack } from '@chakra-ui/react'

import Spinner from 'components/Spinner'
import Business from 'components/Business'
import useBusinesses from 'hooks/useBusinesses'

const businessListCss = {
  '@media (min-width: 700px)': {
    'overscroll-behavior': 'contain'
  }
}

const BusinessesList: React.FC = () => {
  const { data, isLoading, isError } = useBusinesses()

  if (isError) {
    return null
  }

  if (isLoading) {
    return (
      <Spinner />
    )
  }

  return (
    <VStack
      paddingBottom={10}
      spacing={5}
      overflow='scroll'
      width='full'
      height='60vh'
      css={businessListCss}
    >
      {
        data.map(business => (
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
  )
}

export default BusinessesList
