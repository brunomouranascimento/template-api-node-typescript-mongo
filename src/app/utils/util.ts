import jwt from 'jsonwebtoken'

import UserService from '@services/v1/UserService'
import TenantService from '@services/v1/TenantService'
import User from '@models/userModel'
import Tenant from '@models/tenantModel'

export const validEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

export const generateToken = (params = {}) => {
  return jwt.sign(params, process.env.JWT_SECRET, {
    expiresIn: 86400
  })
}

export const getService = (entity: string): any => {
  switch (entity) {
    case 'users':
      return UserService
    case 'tenants':
      return TenantService
    default:
      break
  }
}

export const getRepository = (entity: string): any => {
  switch (entity) {
    case 'users':
      return UserService
    case 'tenants':
      return TenantService
    default:
      break
  }
}

export const getModel = (entity: string): any => {
  switch (entity) {
    case 'users':
      return User
    case 'tenants':
      return Tenant
    default:
      break
  }
}
