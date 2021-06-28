import { Request, Response } from 'express';

import UserService from '@services/UserService';
import ApiResponse from '@core/ApiResponse';

import { IResponse, IUser } from '@interfaces';

class UserController {
  async store(req: Request, res: Response): Promise<IResponse<IUser>> {
    try {
      const data = await UserService.store(req.body);
      return ApiResponse.send(200, req, res, data);
    } catch (error) {
      const { code, errors, type } = error;
      return ApiResponse.send(code, req, res, null, errors, type);
    }
  }

  async index(req: Request, res: Response): Promise<IResponse<IUser[]>> {
    try {
      const data = await UserService.index();
      return ApiResponse.send(200, req, res, data);
    } catch (error) {
      const { code, errors, type } = error;
      return ApiResponse.send(code, req, res, null, errors, type);
    }
  }

  async show(req: Request, res: Response): Promise<IResponse<IUser>> {
    try {
      const data = await UserService.show(req.params.id);
      return ApiResponse.send(200, req, res, data);
    } catch (error) {
      const { code, errors, type } = error;
      return ApiResponse.send(code, req, res, null, errors, type);
    }
  }

  async destroy(req: Request, res: Response): Promise<IResponse<IUser>> {
    try {
      const data = await UserService.destroy(req.params.id);
      return ApiResponse.send(200, req, res, data);
    } catch (error) {
      const { code, errors, type } = error;
      return ApiResponse.send(code, req, res, null, errors, type);
    }
  }
}

export default new UserController();