import Localize from '@core/Localize'
import businessMessages from '@core/businessMessages'
import dataMessages from '@core/dataMessages'
import { ResponseData } from '@interfaces'

class ApiResponse {
  send(
    responseCode: number,
    req: any,
    res: any,
    data?: any,
    apiErrors?: Array<any>,
    type = 'BusinessResponse'
  ): Promise<ResponseData<any>> {
    const language = Localize.prepareAcceptLanguageHeader(
      req.headers['accept-language']
    )

    interface Response {
      httpCode: number
      message?: any
      notificationLevel: string
      errors?: Array<any>
      data?: any
      BusinessResponse?: number
      DataResponse?: number
    }

    let response: Response = {
      httpCode: 0,
      notificationLevel: '',
      errors: [],
      BusinessResponse: 0,
      DataResponse: 0
    }

    const selectedResponse =
      type && type === 'BusinessResponse'
        ? businessMessages().find((m: any) => m.responseCode === responseCode)
        : dataMessages().find((m: any) => m.responseCode === responseCode)

    if (selectedResponse) {
      if (type === 'BusinessResponse') {
        response.BusinessResponse = responseCode
        delete response.DataResponse
      } else {
        response.DataResponse = responseCode
        delete response.BusinessResponse
      }
      response.message = selectedResponse.message
      response.notificationLevel = selectedResponse.status
      response.httpCode = selectedResponse.httpCode
    }

    response = Localize.localize(response, language, 'en')

    if (apiErrors) response.errors = apiErrors

    if (!apiErrors) delete response.errors

    if (data) response.data = data

    if (!selectedResponse?.httpCode) {
      delete response.DataResponse
      delete response.BusinessResponse
      response.notificationLevel = 'errror'
      response.httpCode = 500
    }

    return res.status(response.httpCode).json(response)
  }
}

export default new ApiResponse()
