import { Exception } from '@core/Exception'
import Tenant from '@models/tenantModel'

import { NewTenantDTO, UpdatedTenantDTO } from '@dtos'

class TenantRepository {
  async store(newTenantData: NewTenantDTO) {
    try {
      return await Tenant.create(newTenantData)
    } catch (error: any) {
      throw new Exception(2001, 'DataResponse', [error.message])
    }
  }

  async index() {
    try {
      return await Tenant.find().lean().exec()
    } catch (error: any) {
      throw new Exception(2000, 'DataResponse', [error.message])
    }
  }

  async show(id: string) {
    try {
      return await Tenant.findById(id).lean().exec()
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

  async destroy(id: string) {
    try {
      await Tenant.findByIdAndRemove(id)
    } catch (error: any) {
      throw new Exception(2000, 'DataResponse', [error.message])
    }
  }

  async showByCNPJ(cnpj: string) {
    try {
      return await Tenant.findOne({ cnpj }).lean().exec()
    } catch (error: any) {
      throw new Exception(2000, 'DataResponse', [error.message])
    }
  }
}

export default new TenantRepository()
