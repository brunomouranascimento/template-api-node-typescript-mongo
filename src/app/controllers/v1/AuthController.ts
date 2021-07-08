import { Request, Response } from 'express';

import AuthService from '@services/AuthService';
import ApiResponse from '@core/ApiResponse';

import { ResponseData, User } from '@interfaces';

class AuthController {
  async authenticate(req: Request, res: Response): Promise<ResponseData<User>> {
    try {
      const data = await AuthService.authenticate(req.body);
      return ApiResponse.send(200, req, res, data);
    } catch (error) {
      const { code, errors, type } = error;
      return ApiResponse.send(code, req, res, null, errors, type);
    }
  }
}

export default new AuthController();
