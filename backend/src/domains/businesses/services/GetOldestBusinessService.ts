import { isBefore, parseISO } from 'date-fns'

import Business from '@domains/businesses/models/Business'

class GetOldestBusinessService {
  run (businesses: Business[]) {
    const oldestBusiness = businesses.reduce((
      oldestBusiness,
      currentBusiness
    ) => {
      return isBefore(
        parseISO(currentBusiness.location_start_date),
        parseISO(oldestBusiness.location_start_date)
      )
        ? currentBusiness
        : oldestBusiness
    })

    return oldestBusiness
  }
}

export default GetOldestBusinessService
