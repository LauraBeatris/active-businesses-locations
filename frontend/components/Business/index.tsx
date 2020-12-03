import { Badge, Text, Box, VStack } from '@chakra-ui/react'
import { format, parseISO } from 'date-fns'

import { BusinessDataTextProps, BusinessProps } from './types'

const BusinessDataText: React.FC<BusinessDataTextProps> = ({
  label,
  value
}) => {
  if (!value) {
    return null
  }

  return (
    <Text
      isTruncated
      color='gray.600'
    >
      {label}: {value}
    </Text>
  )
}

const Business: React.FC<BusinessProps> = ({
  locationStartDateString,
  locationsNumber,
  badgeText,
  zipCode,
  street,
  name,
  city
}) => (
  <Box
    backgroundColor='white'
    borderRadius={10}
    borderColor='gray.200'
    borderWidth={2}
    position='relative'
    padding={4}
    width='full'
  >
    <Text
      textTransform='uppercase'
      isTruncated
      fontWeight='bold'
      noOfLines={2}
      fontSize='md'
      width='80%'
      color='orange.100'
    >
      {name}
    </Text>

    <VStack
      alignItems='left'
      marginTop={2}
      spacing={0.5}
      width='full'
    >
      <BusinessDataText
        label='City'
        value={city}
      />

      <BusinessDataText
        label='Street'
        value={street}
      />

      <BusinessDataText
        label='Zip Code'
        value={zipCode}
      />

      <BusinessDataText
        label='Number of locations'
        value={locationsNumber}
      />

      {
          locationStartDateString && (
            <BusinessDataText
              label='Location Start Date'
              value={format(parseISO(locationStartDateString), 'MM-dd-yyyy')}
            />
          )
        }

      {
          badgeText && (
            <Badge
              colorScheme='orange'
              position='absolute'
              right={-2}
              top={-2}
            >
              {badgeText}
            </Badge>
          )
        }
    </VStack>
  </Box>
)

export default Business
