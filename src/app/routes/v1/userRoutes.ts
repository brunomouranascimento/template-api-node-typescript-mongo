import { Router } from 'express'

import AuthMiddleware from '@middlewares/authMiddleware'
import UserController from '@controllers/v1/UserController'

const userRouter = Router()

userRouter.use(AuthMiddleware)

userRouter.post('/', UserController.store)
userRouter.get('/', UserController.index)
userRouter.get('/:id', UserController.show)
userRouter.get('/:id', UserController.update)
userRouter.delete('/:id', UserController.destroy)
// userRouter.post('/forgot-password', UserController.forgotPassword);
// userRouter.post('/reset-password/:token', UserController.resetPassword);
// userRouter.get('/check-token/:token', UserController.checkToken);

export default userRouter
