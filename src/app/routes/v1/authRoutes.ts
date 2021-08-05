import { Router } from 'express'

import AuthMiddleware from '@middlewares/authMiddleware'
import AuthController from '@controllers/v1/AuthController'

const authRouter = Router()

authRouter.use(AuthMiddleware)

authRouter.post('/', AuthController.authenticate)

export default authRouter
