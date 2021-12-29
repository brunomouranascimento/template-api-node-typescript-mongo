import { Exception } from '@core/Exception'
import TenantRepository from '@repositories/TenantRepository'

import { Tenant } from '@interfaces'
import { NewTenantDTO, UpdatedTenantDTO } from '@dtos'
import { getRepository } from '@utils/util'
import BaseRepository from '@repositories/BaseRepository'

class BaseService {
  async index(reqUrl: string) {
    try {
      return await BaseRepository.index(reqUrl)
    } catch (error: any) {
      throw new Exception(error.code, error.type, error)
    }
  }

  async show(id: string, reqUrl: string) {
    try {
      const data = await BaseRepository.show(id, reqUrl)

      if (!data) throw new Exception(5000, 'BusinessResponse')

      return data
    } catch (error: any) {
      throw new Exception(error.code, error.type, error)
    }
  }

  async update(id: string, updatedTenantData: UpdatedTenantDTO) {
    try {
      const tenant = await TenantRepository.show(id)

      if (!tenant) throw new Exception(5002, 'BusinessResponse')

      return await TenantRepository.update(id, updatedTenantData)
    } catch (error: any) {
      throw new Exception(error.code, error.type, error)
    }
  }

  async destroy(id: string, reqUrl: string) {
    try {
      const data = await BaseRepository.show(id, reqUrl)

      if (!data) throw new Exception(5000, 'BusinessResponse')

      return await TenantRepository.destroy(id)
    } catch (error: any) {
      throw new Exception(error.code, error.type, error)
    }
  }
}

export default new BaseService()
