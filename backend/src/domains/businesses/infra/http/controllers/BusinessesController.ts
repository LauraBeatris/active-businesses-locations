import { Request, Response } from 'express'

import GetAllBusinessesService from '@domains/businesses/services/GetAllBusinessesService'

class BusinessesController {
  public async index (request: Request, response: Response) {
    const { page = 1 } = request.query

    const getAllBusinessesService = new GetAllBusinessesService()

    const businesses = await getAllBusinessesService.run(Number(page))

    return response.json(businesses)
  }
}

export default BusinessesController
