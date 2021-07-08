import { Request, Response } from 'express';

import TenantService from '@services/TenantService';
import ApiResponse from '@core/ApiResponse';

import { ResponseData, Tenant } from '@interfaces';

class TenantController {
  async store(req: Request, res: Response): Promise<ResponseData<Tenant>> {
    try {
      const data = await TenantService.store(req.body);
      return ApiResponse.send(201, req, res, data);
    } catch (error) {
      const { code, errors, type } = error;
      return ApiResponse.send(code, req, res, null, errors, type);
    }
  }

  async index(req: Request, res: Response): Promise<ResponseData<[Tenant]>> {
    try {
      const data = await TenantService.index();
      return ApiResponse.send(200, req, res, data);
    } catch (error) {
      const { code, errors, type } = error;
      return ApiResponse.send(code, req, res, null, errors, type);
    }
  }

  async show(req: Request, res: Response): Promise<ResponseData<Tenant>> {
    try {
      const data = await TenantService.show(req.params.id);
      return ApiResponse.send(200, req, res, data);
    } catch (error) {
      const { code, errors, type } = error;
      return ApiResponse.send(code, req, res, null, errors, type);
    }
  }

  async update(req: Request, res: Response): Promise<ResponseData<Tenant>> {
    try {
      const data = await TenantService.update(req.params.id, req.body);
      return ApiResponse.send(200, req, res, data);
    } catch (error) {
      const { code, errors, type } = error;
      return ApiResponse.send(code, req, res, null, errors, type);
    }
  }

  async destroy(req: Request, res: Response): Promise<ResponseData<void>> {
    try {
      const data = await TenantService.destroy(req.params.id);
      return ApiResponse.send(200, req, res, data);
    } catch (error) {
      const { code, errors, type } = error;
      return ApiResponse.send(code, req, res, null, errors, type);
    }
  }
}

export default new TenantController();
