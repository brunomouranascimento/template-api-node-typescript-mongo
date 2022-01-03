import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

import ApiResponse from '@core/ApiResponse'

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const entity = req.originalUrl?.split('/')[2]

    req.entity = entity
    return next()
  } catch (error: any) {
    const { errors, type } = error
    return ApiResponse.send(4014, req, res, null, errors, type)
  }
}
