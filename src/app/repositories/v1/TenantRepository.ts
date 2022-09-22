import { Exception } from '@core/Exception'
import Tenant from '@models/tenantModel'

import { NewTenantDTO, UpdatedTenantDTO } from '@dtos'

class TenantRepository {
  async showByCNPJ(cnpj: string) {
    try {
      return await Tenant.findOne({ cnpj }).lean().exec()
    } catch (error: any) {
      throw new Exception(2000, 'DataResponse', [error.message])
    }
  }
}

export default new TenantRepository()
