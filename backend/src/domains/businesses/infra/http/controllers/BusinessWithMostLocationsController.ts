import { Request, Response } from 'express'

import GetAllBusinessesService from '@domains/businesses/services/GetAllBusinessesService'
import GetBusinessWithMostLocationsService from '@domains/businesses/services/GetBusinessWithMostLocationsService'

class BusinessWithMostLocationsController {
  async show (request: Request, response: Response) {
    const { page = 1 } = request.query

    const getAllBusinessesService = new GetAllBusinessesService()
    const getBusinessWithMostLocationsService = new GetBusinessWithMostLocationsService()

    const businesses = await getAllBusinessesService.run(Number(page))
    const businessWithMostLocations = getBusinessWithMostLocationsService.run(businesses)

    return response.json(businessWithMostLocations)
  }
}

export default BusinessWithMostLocationsController
