import { Router } from 'express'
import swaggerUi from 'swagger-ui-express'

import ApiResponse from '@core/ApiResponse'
import documentation from '@documentation/swagger.json'

import authRoutes from './v1/authRoutes'
import userRoutes from './v1/userRoutes'
import tenantRoutes from './v1/tenantRoutes'

const routes = Router()

routes.use('/v1/auth', authRoutes)
routes.use('/v1/users', userRoutes)
routes.use('/v1/tenants', tenantRoutes)

routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(documentation))

routes.use((req, res) => {
  return ApiResponse.send(404, req, res)
})

export default routes
