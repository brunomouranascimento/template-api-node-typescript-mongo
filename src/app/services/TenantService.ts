import { ApiException } from '@core/ApiException';
import { Tenant } from '@interfaces';
import TenantRepository from '@repositories/TenantRepository';
import { NewTenantDTO } from '@dtos';

class TenantService {
  async store(newTenantData: NewTenantDTO) {
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
      return (await TenantRepository.index()) as [Tenant];
    } catch (error) {
      throw new ApiException(error.code, error.type);
    }
  }

  async show(id: string) {
    try {
      const tenant = (await TenantRepository.show(id)) as Tenant;

      if (!tenant) throw new ApiException(5002, 'BusinessResponse');

      return tenant;
    } catch (error) {
      throw new ApiException(error.code, error.type);
    }
  }

  async update(id: string, tenantData: NewTenantDTO) {
    try {
      const tenant = await TenantRepository.show(id);

      if (!tenant) throw new ApiException(5002, 'BusinessResponse');

      return await TenantRepository.update(id, tenantData);
    } catch (error) {
      throw new ApiException(error.code, error.type);
    }
  }

  async destroy(id: string) {
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
