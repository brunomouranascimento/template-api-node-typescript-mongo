import Tenant from '@models/tenantModel';
import { ApiException } from '@core/ApiException';

class TenantRepository {
  async store(newTenantData) {
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

  async show(id) {
    try {
      return await Tenant.findById(id).lean().exec();
    } catch (error) {
      throw new ApiException(2000, 'DataResponse', [error.message]);
    }
  }

  async update(id, tenantData) {
    try {
      const { name, cnpj, email } = tenantData;

      return Tenant.findByIdAndUpdate(id, { name, cnpj, email }, { new: true });
    } catch (error) {
      throw new ApiException(2002, 'DataResponse', [error.message]);
    }
  }

  async destroy(id) {
    try {
      await Tenant.findByIdAndRemove(id);
    } catch (error) {
      throw new ApiException(2000, 'DataResponse', [error.message]);
    }
  }

  async showByCNPJ(cnpj) {
    try {
      return await Tenant.findOne({ cnpj }).lean().exec();
    } catch (error) {
      throw new ApiException(2000, 'DataResponse', [error.message]);
    }
  }
}

export default new TenantRepository();
