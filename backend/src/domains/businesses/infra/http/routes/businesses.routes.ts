import { Router } from 'express'

import BusinessesController from '@domains/businesses/infra/http/controllers/BusinessesController'
import OldestBusinessController from '@domains/businesses/infra/http/controllers/OldestBusinessController'
import BusinessWithMostLocationsController from '@domains/businesses/infra/http/controllers/BusinessWithMostLocationsController'

const businessesRoutes = Router()

const businessesController = new BusinessesController()
const oldestBusinessController = new OldestBusinessController()
const businessesWithMostLocationsController = new BusinessWithMostLocationsController()

businessesRoutes.get('/', businessesController.index)

businessesRoutes.get('/oldest', oldestBusinessController.show)

businessesRoutes.get('/most-locations', businessesWithMostLocationsController.show)

export default businessesRoutes
