import { ApiException } from '@core/ApiException';
import TenantRepository from '@repositories/TenantRepository';

class TenantService {
  async store(newTenantData) {
    try {
      const { name, cnpj, email } = newTenantData;

      if (!name || !cnpj || !email) {
        throw new ApiException(5000, 'BusinessResponse');
      }
      const tenantExists = await TenantRepository.showByCNPJ(cnpj);

      if (tenantExists) throw new ApiException(5001, 'BusinessResponse');

      return await TenantRepository.store(newTenantData);
    } catch (error) {
      throw new ApiException(error.code, error.type);
    }
  }

  async index() {
    try {
      return await TenantRepository.index();
    } catch (error) {
      throw new ApiException(error.code, error.type);
    }
  }

  async show(id) {
    try {
      const tenant = await TenantRepository.show(id);

      if (!tenant) throw new ApiException(5002, 'BusinessResponse');

      return tenant;
    } catch (error) {
      throw new ApiException(error.code, error.type);
    }
  }

  async update(id, tenantData) {
    try {
      const tenant = await TenantRepository.show(id);

      if (!tenant) throw new ApiException(5002, 'BusinessResponse');

      return await TenantRepository.update(id, tenantData);
    } catch (error) {
      throw new ApiException(error.code, error.type);
    }
  }

  async destroy(id) {
    try {
      const tenant = await TenantRepository.show(id);

      if (!tenant) throw new ApiException(5002, 'BusinessResponse');

      return await TenantRepository.destroy(id);
    } catch (error) {
      throw new ApiException(error.code, error.type);
    }
  }
}

export default new TenantService();
