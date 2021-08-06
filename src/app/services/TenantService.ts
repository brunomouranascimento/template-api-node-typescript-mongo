import { Exception } from '@core/Exception'
import TenantRepository from '@repositories/TenantRepository'

import { Tenant } from '@interfaces'
import { NewTenantDTO, UpdatedTenantDTO } from '@dtos'
import { Logger } from '@utils/logger'

const log = Logger('TenantService')

class TenantService {
  async store(newTenantData: NewTenantDTO) {
    try {
      const { name, cnpj, email } = newTenantData

      if (!name || !cnpj || !email) {
        throw new Exception(5000, 'BusinessResponse')
      }
      const tenantExists = await TenantRepository.showByCNPJ(cnpj)

      if (tenantExists) throw new Exception(5001, 'BusinessResponse')

      return await TenantRepository.store(newTenantData)
    } catch (error) {
      log('error', error)
      throw new Exception(error.code, error.type, error)
    }
  }

  async index() {
    try {
      return (await TenantRepository.index()) as [Tenant]
    } catch (error) {
      log('error', error)
      throw new Exception(error.code, error.type, error)
    }
  }

  async show(id: string) {
    try {
      const tenant = (await TenantRepository.show(id)) as Tenant

      if (!tenant) throw new Exception(5002, 'BusinessResponse')

      return tenant
    } catch (error) {
      log('error', error)
      throw new Exception(error.code, error.type, error)
    }
  }

  async update(id: string, updatedTenantData: UpdatedTenantDTO) {
    try {
      const tenant = await TenantRepository.show(id)

      if (!tenant) throw new Exception(5002, 'BusinessResponse')

      return await TenantRepository.update(id, updatedTenantData)
    } catch (error) {
      log('error', error)
      throw new Exception(error.code, error.type, error)
    }
  }

  async destroy(id: string) {
    try {
      const tenant = await TenantRepository.show(id)

      if (!tenant) throw new Exception(5002, 'BusinessResponse')

      return await TenantRepository.destroy(id)
    } catch (error) {
      log('error', error)
      throw new Exception(error.code, error.type, error)
    }
  }
}

export default new TenantService()
