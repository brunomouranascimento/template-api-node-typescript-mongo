import { Response } from 'express'

export default interface ResponseData<T> extends Response {
  httpCode: number
  message: string
  notificationLevel: string
  BusinessResponse?: number
  DataResponse?: number
  data?: T
}
