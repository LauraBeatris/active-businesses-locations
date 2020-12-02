import GetBusinessWithMostLocationsService from '@domains/businesses/services/GetBusinessWithMostLocationsService'
import { fakeBusinesses, fakeBusinessWithMostLocations } from '@domains/businesses/fakes/businesses'

let getBusinessWithMostLocationsService: GetBusinessWithMostLocationsService

describe('GetBusinessWithMostLocations', () => {
  beforeEach(() => {
    getBusinessWithMostLocationsService = new GetBusinessWithMostLocationsService()
  })

  it('should return business with the most locations', () => {
    expect(getBusinessWithMostLocationsService.run(fakeBusinesses))
      .toEqual(fakeBusinessWithMostLocations)
  })
})
