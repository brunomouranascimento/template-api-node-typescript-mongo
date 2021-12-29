import jwt from 'jsonwebtoken'

import UserService from '@services/UserService'
import TenantService from '@services/TenantService'
import User from '@models/userModel'
import Tenant from '@models/tenantModel'

export const validEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

export const generateToken = (params = {}) => {
  return jwt.sign(params, process.env.JWT_SECRET, {
    expiresIn: 86400
  })
}

export const getService = (reqUrl: string): any => {
  switch (reqUrl) {
    case '/v1/users':
      return UserService
    case '/v1/tenants':
      return TenantService
    default:
      break
  }
}

export const getRepository = (reqUrl: string): any => {
  switch (reqUrl) {
    case '/v1/users':
      return UserService
    case '/v1/tenants':
      return TenantService
    default:
      break
  }
}

export const getModel = (reqUrl: string): any => {
  switch (reqUrl?.split('/')[2]) {
    case 'users':
      return User
    case 'tenants':
      return Tenant
    default:
      break
  }
}
