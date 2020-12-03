import { Flex, Spinner } from '@chakra-ui/react'

import Business from 'components/Business'
import useOldestBusiness from 'hooks/useOldestBusiness'

const OldestBusiness: React.FC = () => {
  const { data, isLoading, isError } = useOldestBusiness()

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
    <Flex
      marginBottom={10}
      width='full'
    >
      <Business
        locationStartDateString={data.location_start_date}
        badgeText='Oldest'
        zipCode={data.zip_code}
        street={data.street_address}
        name={data.business_name}
        city={data.city}
        key={data.location_account}
      />
    </Flex>
  )
}

export default OldestBusiness
