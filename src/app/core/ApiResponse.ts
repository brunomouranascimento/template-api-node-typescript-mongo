import Localize from '@core/Localize';
import { businessMessages } from '@core/businessMessages';
import { dataMessages } from '@core/dataMessages';
import { IResponse } from '@interfaces';

class ApiResponse {
  send(
    responseCode,
    req,
    res,
    data?,
    apiErrors?,
    type = 'BusinessResponse',
  ): Promise<IResponse<any>> {
    const messages =
      type === 'BusinessResponse' ? businessMessages : dataMessages;

    const language = Localize.prepareAcceptLanguageHeader(
      req.headers['accept-language'],
    );

    let response = {
      httpCode: 500,
      message: null,
      notificationLevel: null,
      errors: [],
    };

    const message = messages[responseCode].message;
    if (message) response['message'] = message;

    const status = messages[responseCode].status;
    if (status) response['notificationLevel'] = status;

    const messageHttpCode = messages[responseCode].httpCode;
    if (messageHttpCode) response.httpCode = messageHttpCode;

    response = Localize.localize(response, language, 'en');

    if (apiErrors) response['errors'] = apiErrors;

    if (!apiErrors) delete response['errors'];

    if (data) response['data'] = data;

    response[type] = responseCode;

    return res.status(response.httpCode).json(response);
  }
}

export default new ApiResponse();
