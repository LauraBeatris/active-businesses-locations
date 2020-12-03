import { Flex } from '@chakra-ui/react'

import Business from 'components/Business'
import useBusinessWithMostLocations from 'hooks/useBusinessWithMostLocations'
import QueryHandlerWrapper from 'components/QueryHandlerWrapper'

const BusinessWithMostLocations: React.FC = () => {
  const { data, isError, isLoading } = useBusinessWithMostLocations()

  return (
    <QueryHandlerWrapper
      isLoading={isLoading}
      isError={isError}
    >
      <Flex
        marginBottom={10}
        width='full'
      >
        <Business
          locationsNumber={data?.locations_count}
          badgeText='Most Locations'
          name={data?.business_name}
        />
      </Flex>
    </QueryHandlerWrapper>
  )
}

export default BusinessWithMostLocations
