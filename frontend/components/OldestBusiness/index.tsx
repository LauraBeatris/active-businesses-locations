import { Flex } from '@chakra-ui/react'

import Spinner from 'components/Spinner'
import Business from 'components/Business'
import useOldestBusiness from 'hooks/useOldestBusiness'

const OldestBusiness: React.FC = () => {
  const { data, isError, isLoading } = useOldestBusiness()

  if (isError) {
    return null
  }

  if (isLoading) {
    return (
      <Spinner />
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
