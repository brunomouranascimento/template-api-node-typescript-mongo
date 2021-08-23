import { Request, Response } from 'express'

import ApiResponse from '@core/ApiResponse'
import UserService from '@services/UserService'

import { ResponseData, User } from '@interfaces'

class UserController {
  async store(req: Request, res: Response): Promise<ResponseData<User>> {
    try {
      const data = await UserService.store(req.body)
      return ApiResponse.send(201, req, res, data)
    } catch (error) {
      console.log(error)
      const { code, errors, type } = error
      return ApiResponse.send(code, req, res, null, errors, type)
    }
  }

  async index(req: Request, res: Response): Promise<ResponseData<[User]>> {
    try {
      const data = await UserService.index()
      return ApiResponse.send(200, req, res, data)
    } catch (error) {
      console.log(error)
      const { code, errors, type } = error
      return ApiResponse.send(code, req, res, null, errors, type)
    }
  }

  async show(req: Request, res: Response): Promise<ResponseData<User>> {
    try {
      const data = await UserService.show(req.params.id)
      return ApiResponse.send(200, req, res, data)
    } catch (error) {
      console.log(error)
      const { code, errors, type } = error
      return ApiResponse.send(code, req, res, null, errors, type)
    }
  }

  async update(req: Request, res: Response): Promise<ResponseData<User>> {
    try {
      const data = await UserService.update(req.params.id, req.body)
      return ApiResponse.send(200, req, res, data)
    } catch (error) {
      console.log(error)
      const { code, errors, type } = error
      return ApiResponse.send(code, req, res, null, errors, type)
    }
  }

  async destroy(req: Request, res: Response): Promise<ResponseData<User>> {
    try {
      const data = await UserService.destroy(req.params.id)
      return ApiResponse.send(200, req, res, data)
    } catch (error) {
      console.log(error)
      const { code, errors, type } = error
      return ApiResponse.send(code, req, res, null, errors, type)
    }
  }
}

export default new UserController()
