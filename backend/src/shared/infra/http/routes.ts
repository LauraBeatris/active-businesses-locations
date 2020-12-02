import { Router } from 'express'

import businessesRoutes from '@domains/businesses/infra/http/routes/businesses.routes'

const routes = Router()

routes.use('/businesses', businessesRoutes)

export default routes
