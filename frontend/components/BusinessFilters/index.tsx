import { Text, Box, VStack, RadioGroup } from '@chakra-ui/react'

import Radio from 'components/Form/Radio'

import { BusinessFiltersValue, BusinessFiltersProps } from './types'

const BusinessFilters: React.FC<BusinessFiltersProps> = ({
  handleBusinessFilterValueChange,
  businessFilterValue
}) => {
  return (
    <Box
      backgroundColor='white'
      boxShadow='md'
      borderRadius={10}
      padding={4}
      width='full'
    >
      <VStack
        alignItems='left'
        spacing={2}
        width='full'
      >
        <Text
          fontWeight='semibold'
          fontSize='2xl'
          color='gray.600'
        >
          Business Filters
        </Text>

        <RadioGroup
          defaultValue={BusinessFiltersValue.All}
          onChange={handleBusinessFilterValueChange}
          width='full'
          value={businessFilterValue}
        >
          <VStack
            width='full'
            alignItems='left'
          >
            <Radio value={BusinessFiltersValue.MostLocations}>
              Most Locations
            </Radio>
            <Radio value={BusinessFiltersValue.Oldest}>
              Oldest
            </Radio>
            <Radio value={BusinessFiltersValue.All}>
              All
            </Radio>
          </VStack>
        </RadioGroup>
      </VStack>
    </Box>
  )
}

export default BusinessFilters
