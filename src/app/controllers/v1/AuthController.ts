import { Request, Response } from 'express'

import ApiResponse from '@core/ApiResponse'
import AuthService from '@services/v1/AuthService'

import { ResponseData, User } from '@interfaces'

class AuthController {
  async authenticate(req: Request, res: Response): Promise<ResponseData<User>> {
    try {
      const data = await AuthService.authenticate(req.body)
      return ApiResponse.send(200, req, res, data)
    } catch (error: any) {
      const { code, errors, type } = error
      return ApiResponse.send(code, req, res, undefined, errors, type)
    }
  }
}

export default new AuthController()
