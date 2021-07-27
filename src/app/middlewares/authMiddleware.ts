import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import ApiResponse from '@core/ApiResponse';

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    if (
      (req.originalUrl === '/v1/auth' && req.method !== 'GET') ||
      (req.originalUrl === '/v1/users' && req.method !== 'GET') ||
      req.originalUrl === '/v1/users/forgot-password' ||
      req.originalUrl.includes('/v1/users/reset-password') ||
      req.originalUrl.includes('/v1/users/check-token')
    ) {
      return next();
    }

    if (!authHeader) return ApiResponse.send(4011, req, res);

    const parts = authHeader.split(' ');

    if (parts.length !== 2) return ApiResponse.send(4012, req, res);

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
      return ApiResponse.send(4013, req, res);
    }

    jwt.verify(token, process.env.JWT_SECRET, (error: any, decoded: any) => {
      if (error) return ApiResponse.send(401, req, res);
      req.user = decoded.user;
      req.tenant = decoded.tenant;
      return next();
    });
  } catch (error) {
    const { errors, type } = error;
    return ApiResponse.send(4014, req, res, null, errors, type);
  }
};
