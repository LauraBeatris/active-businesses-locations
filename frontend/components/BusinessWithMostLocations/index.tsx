import { Flex } from '@chakra-ui/react'

import Spinner from 'components/Spinner'
import Business from 'components/Business'
import useBusinessWithMostLocations from 'hooks/useBusinessWithMostLocations'

const BusinessWithMostLocations: React.FC = () => {
  const { data, isError, isLoading } = useBusinessWithMostLocations()

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
        locationsNumber={data.locations_count}
        badgeText='Most Locations'
        name={data.business_name}
      />
    </Flex>
  )
}

export default BusinessWithMostLocations
