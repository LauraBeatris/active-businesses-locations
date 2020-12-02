import { chain, map, __ } from 'lodash'

import Business from '@domains/businesses/models/Business'

class GetBusinessWithMostLocations {
  run (businesses: Business[]) {
    const groupBusinessesByName = map(businesses, 'business_name')

    const businessWithMostLocations = chain(groupBusinessesByName)
      .countBy()
      .toPairs()
      .maxBy(([, businessCount]) => businessCount)
      .head()
      .value()

    return businessWithMostLocations
  }
}

export default GetBusinessWithMostLocations
