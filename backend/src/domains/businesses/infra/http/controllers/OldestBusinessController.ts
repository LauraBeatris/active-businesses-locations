import { Request, Response } from 'express'

import GetAllBusinessesService from '@domains/businesses/services/GetAllBusinessesService'
import GetOldestBusinessService from '@domains/businesses/services/GetOldestBusinessService'

class OldestBusinessController {
  async show (request: Request, response: Response) {
    const { page = 1 } = request.query

    const getAllBusinessesService = new GetAllBusinessesService()
    const getOldestBusinessService = new GetOldestBusinessService()

    const businesses = await getAllBusinessesService.run(Number(page))
    const oldestBusiness = getOldestBusinessService.run(businesses)

    return response.json(oldestBusiness)
  }
}

export default OldestBusinessController
