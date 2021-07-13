import Tenant from '@models/tenantModel';
import { ApiException } from '@core/ApiException';
import { NewTenantDTO } from '@dtos';

class TenantRepository {
  async store(newTenantData: NewTenantDTO) {
    try {
      return await Tenant.create(newTenantData);
    } catch (error) {
      throw new ApiException(2001, 'DataResponse', [error.message]);
    }
  }

  async index() {
    try {
      return await Tenant.find().lean().exec();
    } catch (error) {
      throw new ApiException(2000, 'DataResponse', [error.message]);
    }
  }

  async show(id: string) {
    try {
      return await Tenant.findById(id).lean().exec();
    } catch (error) {
      throw new ApiException(2000, 'DataResponse', [error.message]);
    }
  }

  async update(id: string, tenantData: NewTenantDTO) {
    try {
      const { name, cnpj, email } = tenantData;

      return Tenant.findByIdAndUpdate(id, { name, cnpj, email }, { new: true });
    } catch (error) {
      throw new ApiException(2002, 'DataResponse', [error.message]);
    }
  }

  async destroy(id: string) {
    try {
      await Tenant.findByIdAndRemove(id);
    } catch (error) {
      throw new ApiException(2000, 'DataResponse', [error.message]);
    }
  }

  async showByCNPJ(cnpj: string) {
    try {
      return await Tenant.findOne({ cnpj }).lean().exec();
    } catch (error) {
      throw new ApiException(2000, 'DataResponse', [error.message]);
    }
  }
}

export default new TenantRepository();
