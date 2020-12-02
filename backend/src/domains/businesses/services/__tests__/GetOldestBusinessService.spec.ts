import { fakeOldestBusiness, fakeBusinesses } from '@domains/businesses/fakes/businesses'
import GetOldestBusinessService from '@domains/businesses/services/GetOldestBusinessService'

let getOldestBusinessService: GetOldestBusinessService

describe('GetOldestBusinessService', () => {
  beforeEach(() => {
    getOldestBusinessService = new GetOldestBusinessService()
  })

  it('should return the oldest business', () => {
    expect(getOldestBusinessService.run(fakeBusinesses)).toEqual(fakeOldestBusiness)
  })
})
