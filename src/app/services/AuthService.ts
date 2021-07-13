import bcrypt from 'bcryptjs';

import AuthRepository from '@repositories/AuthRepository';
import UserRepository from '@repositories/UserRepository';
import TenantRepository from '@repositories/TenantRepository';
import { ApiException } from '@core/ApiException';
import { User } from '@interfaces';
import { NewUserDTO } from '@dtos';
import { generateToken } from '@utils/util';

class AuthService {
  async authenticate(userData: NewUserDTO) {
    try {
      const { email, password, tenant } = userData;

      if (!tenant) throw new ApiException(4020, 'BusinessResponse');

      const tenantExists = await TenantRepository.show(tenant);

      if (!tenantExists) throw new ApiException(5002, 'BusinessResponse');

      const userExists = (await AuthRepository.findUserWithPassword(
        userData,
      )) as User;

      if (!userExists) throw new ApiException(4015, 'BusinessResponse');

      if (!(await bcrypt.compare(password, userExists.password))) {
        throw new ApiException(4016, 'BusinessResponse');
      }

      const user = (await UserRepository.showByEmail(email)) as User;

      const tokenData = {
        aud: 'api.com',
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
