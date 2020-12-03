import { chain, map } from 'lodash'

import Business from '@domains/businesses/models/Business'

class GetBusinessWithMostLocations {
  run (businesses: Business[]) {
    const groupBusinessesByName = map(businesses, 'business_name')

    const [
      business_name,
      locations_count
    ] = chain(groupBusinessesByName)
      .countBy()
      .toPairs()
      .maxBy(([, businessCount]) => businessCount)
      .value()

    return {
      business_name,
      locations_count
    }
  }
}

export default GetBusinessWithMostLocations
