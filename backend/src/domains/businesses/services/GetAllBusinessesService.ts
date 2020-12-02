import axios from 'axios'

import AppError from '@shared/errors/AppError'
import Business from '@domains/businesses/models/Business'

const BUSINESSES_API_ENDPOINT = 'https://data.lacity.org/resource/6rrh-rzua.json'

const LIMIT_PER_PAGE = 10

class GetAllBusinessesService {
  async run (page: number) {
    const offset = (page - 1) * LIMIT_PER_PAGE

    try {
      const businessesResponse = await axios.get<Business[]>(
        `${BUSINESSES_API_ENDPOINT}?$limit=${LIMIT_PER_PAGE}&$offset=${offset}`
      )

      return businessesResponse.data
    } catch (error) {
      throw new AppError(
        'Error while fetching businesses. Try again, please',
        500
      )
    }
  }
}

export default GetAllBusinessesService
