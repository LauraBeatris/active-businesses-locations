import { Spinner, VStack } from '@chakra-ui/react'

import Business from 'components/Business'
import useBusinesses from 'hooks/useBusinesses'

const BusinessesList: React.FC = () => {
  const { data, isLoading, isError } = useBusinesses()

  if (isError) {
    return null
  }

  if (isLoading) {
    return (
      <Spinner
        size='lg'
        color='orange.100'
      />
    )
  }

  return (
    <VStack
      paddingBottom={10}
      spacing={5}
      width='full'
      overflow='scroll'
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
