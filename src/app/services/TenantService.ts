import TenantRepository from '@repositories/TenantRepository'
import { Exception } from '@core/Exception'
import { Tenant } from '@interfaces'
import { NewTenantDTO } from '@dtos'

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
      console.error(error)
      throw new Exception(error.code, error.type, error)
    }
  }

  async index() {
    try {
      return (await TenantRepository.index()) as [Tenant]
    } catch (error) {
      console.error(error)
      throw new Exception(error.code, error.type, error)
    }
  }

  async show(id: string) {
    try {
      const tenant = (await TenantRepository.show(id)) as Tenant

      if (!tenant) throw new Exception(5002, 'BusinessResponse')

      return tenant
    } catch (error) {
      console.error(error)
      throw new Exception(error.code, error.type, error)
    }
  }

  async update(id: string, tenantData: NewTenantDTO) {
    try {
      const tenant = await TenantRepository.show(id)

      if (!tenant) throw new Exception(5002, 'BusinessResponse')

      return await TenantRepository.update(id, tenantData)
    } catch (error) {
      console.error(error)
      throw new Exception(error.code, error.type, error)
    }
  }

  async destroy(id: string) {
    try {
      const tenant = await TenantRepository.show(id)

      if (!tenant) throw new Exception(5002, 'BusinessResponse')

      return await TenantRepository.destroy(id)
    } catch (error) {
      console.error(error)
      throw new Exception(error.code, error.type, error)
    }
  }
}

export default new TenantService()
