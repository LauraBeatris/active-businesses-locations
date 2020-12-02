import GetAllBusinessesService from '@domains/businesses/services/GetAllBusinessesService'

let getAllBusinessesService: GetAllBusinessesService

describe('GetAllBusinessesService', () => {
  beforeEach(() => {
    getAllBusinessesService = new GetAllBusinessesService()
  })

  it('should fetch businesses from external source', async () => {
    const businesses = await getAllBusinessesService.run(1)

    expect(businesses.length).toBeGreaterThan(0)
  })

  // This test may fail if the external source changes the data model of businesses
  it('should fetch businesses from external source with valid model data', async () => {
    const businesses = await getAllBusinessesService.run(1)
    const firstBusiness = businesses[0]

    expect(firstBusiness).toHaveProperty('business_name')
    expect(firstBusiness).toHaveProperty('location_start_date')
  })
})
