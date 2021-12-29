import { Exception } from '@core/Exception'
import Tenant from '@models/tenantModel'

import { NewTenantDTO, UpdatedTenantDTO } from '@dtos'
import { getModel } from '../utils/util'

class BaseRepository {
  async store(newTenantData: NewTenantDTO) {
    try {
      return await Tenant.create(newTenantData)
    } catch (error: any) {
      throw new Exception(2001, 'DataResponse', [error.message])
    }
  }

  async index(reqUrl: string) {
    try {
      return await getModel(reqUrl).find().lean().exec()
    } catch (error: any) {
      throw new Exception(2000, 'DataResponse', [error.message])
    }
  }

  async show(id: string, reqUrl: string) {
    try {
      return await getModel(reqUrl).findById(id).lean().exec()
    } catch (error: any) {
      throw new Exception(2000, 'DataResponse', [error.message])
    }
  }

  async update(id: string, updatedTenantData: UpdatedTenantDTO) {
    try {
      return Tenant.findByIdAndUpdate(id, updatedTenantData, { new: true })
    } catch (error: any) {
      throw new Exception(2002, 'DataResponse', [error.message])
    }
  }

  async destroy(id: string, reqUrl: string) {
    try {
      await getModel(reqUrl).findByIdAndRemove(id)
    } catch (error: any) {
      throw new Exception(2000, 'DataResponse', [error.message])
    }
  }
}

export default new BaseRepository()
