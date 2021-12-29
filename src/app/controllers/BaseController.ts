import { Request, Response } from 'express'

import ApiResponse from '@core/ApiResponse'
import UserService from '@services/UserService'
import BaseService from '@services/BaseService'

import { ResponseData } from '@interfaces'
import { getService } from '@utils/util'

class BaseController {
  async store(req: Request, res: Response): Promise<ResponseData<any>> {
    try {
      const data = await getService(req.originalUrl).store(req.body)
      return ApiResponse.send(201, req, res, data)
    } catch (error: any) {
      const { code, errors, type } = error
      return ApiResponse.send(code, req, res, null, errors, type)
    }
  }

  async index(req: Request, res: Response): Promise<ResponseData<Array<any>>> {
    try {
      const data = await BaseService.index(req.originalUrl)
      return ApiResponse.send(200, req, res, data)
    } catch (error: any) {
      const { code, errors, type } = error
      return ApiResponse.send(code, req, res, null, errors, type)
    }
  }

  async show(req: Request, res: Response): Promise<ResponseData<any>> {
    try {
      const data = await BaseService.show(req.params.id, req.originalUrl)
      return ApiResponse.send(200, req, res, data)
    } catch (error: any) {
      const { code, errors, type } = error
      return ApiResponse.send(code, req, res, null, errors, type)
    }
  }

  async update(req: Request, res: Response): Promise<ResponseData<any>> {
    try {
      const data = await getService(req.originalUrl).update(
        req.params.id,
        req.body
      )
      return ApiResponse.send(200, req, res, data)
    } catch (error: any) {
      const { code, errors, type } = error
      return ApiResponse.send(code, req, res, null, errors, type)
    }
  }

  async destroy(req: Request, res: Response): Promise<ResponseData<any>> {
    try {
      const data = await UserService.destroy(req.params.id)
      return ApiResponse.send(200, req, res, data)
    } catch (error: any) {
      const { code, errors, type } = error
      return ApiResponse.send(code, req, res, null, errors, type)
    }
  }
}

export default BaseController
