import { Router } from 'express'

import BusinessesController from '@domains/businesses/infra/http/controllers/BusinessesController'
import OldestBusinessController from '@domains/businesses/infra/http/controllers/OldestBusinessController'
import BusinessWithMostLocationsController from '@domains/businesses/infra/http/controllers/BusinessWithMostLocationsController'
import paginationValidator from '@domains/businesses/infra/http/validators/paginationValidator'

const businessesRoutes = Router()

const businessesController = new BusinessesController()
const oldestBusinessController = new OldestBusinessController()
const businessesWithMostLocationsController = new BusinessWithMostLocationsController()

businessesRoutes.get(
  '/',
  paginationValidator,
  businessesController.index
)

businessesRoutes.get(
  '/oldest',
  paginationValidator,
  oldestBusinessController.show
)

businessesRoutes.get(
  '/most-locations',
  paginationValidator,
  businessesWithMostLocationsController.show
)

export default businessesRoutes
