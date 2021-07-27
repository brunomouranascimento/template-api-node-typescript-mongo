import bcrypt from 'bcryptjs';

import AuthRepository from '@repositories/AuthRepository';
import UserRepository from '@repositories/UserRepository';
import TenantRepository from '@repositories/TenantRepository';
import { ApiException } from '@core/ApiException';
import { User } from '@interfaces';
import { AuthDTO } from '@dtos';
import { generateToken } from '@utils/util';

class AuthService {
  async authenticate(authData: AuthDTO) {
    try {
      const { email, password, tenant } = authData;

      const userExists = (await AuthRepository.findUserWithPassword(
        authData,
      )) as User;

      if (!userExists) throw new ApiException(4015, 'BusinessResponse');

      if (!tenant && !userExists.isAdmin)
        throw new ApiException(4020, 'BusinessResponse');

      if (!userExists.isAdmin) {
        const tenantExists = await TenantRepository.show(tenant);

        if (!tenantExists) throw new ApiException(5002, 'BusinessResponse');
      }

      if (!(await bcrypt.compare(password, userExists.password))) {
        throw new ApiException(4016, 'BusinessResponse');
      }

      const user = (await UserRepository.showByEmail(email)) as User;

      const tokenData = {
        aud: 'com.template.api',
        user,
        tenant,
      };

      user.token = generateToken(tokenData);

      return user;
    } catch (error) {
      throw new ApiException(error.code, error.type);
    }
  }
}

export default new AuthService();
