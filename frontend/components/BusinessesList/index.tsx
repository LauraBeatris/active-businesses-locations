import { Spinner, VStack } from '@chakra-ui/react'

import Business from 'components/Business'
import useBusinesses from 'hooks/useBusinesses'

const businessListCss = {
  'overscroll-behavior': 'contain'
}

const BusinessesList: React.FC = () => {
  const { data, isLoading, isError } = useBusinesses()

  if (isError) {
    return null
  }

  if (isLoading) {
    return (
      <Spinner
        color='orange.100'
        size='lg'
      />
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
            key={business.location_account}
            name={business.business_name}
            city={business.city}
            street={business.street_address}
            zipCode={business.zip_code}
          />
        ))
      }
    </VStack>
  )
}

export default BusinessesList
