import { Exception } from '@core/Exception'
import TenantRepository from '@repositories/v1/TenantRepository'

import { NewTenantDTO } from '@dtos'
import BaseRepository from '@repositories/BaseRepository'

class TenantService {
  async store(newTenantData: NewTenantDTO, entity: string) {
    try {
      const { name, cnpj, email } = newTenantData

      if (!name || !cnpj || !email) {
        throw new Exception(6000, 'BusinessResponse')
      }
      const tenantExists = await TenantRepository.showByCNPJ(cnpj)

      if (tenantExists) throw new Exception(6001, 'BusinessResponse')

      return await BaseRepository.store(newTenantData, entity)
    } catch (error: any) {
      throw new Exception(error.code, error.type, error)
    }
  }
}

export default new TenantService()
