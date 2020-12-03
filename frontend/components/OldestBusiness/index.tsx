import { Flex } from '@chakra-ui/react'

import Business from 'components/Business'
import useOldestBusiness from 'hooks/useOldestBusiness'
import QueryHandlerWrapper from 'components/QueryHandlerWrapper'

const OldestBusiness: React.FC = () => {
  const { data, isError, isLoading } = useOldestBusiness()

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
          locationStartDateString={data?.location_start_date}
          badgeText='Oldest'
          zipCode={data?.zip_code}
          street={data?.street_address}
          name={data?.business_name}
          city={data?.city}
          key={data?.location_account}
        />
      </Flex>
    </QueryHandlerWrapper>
  )
}

export default OldestBusiness
