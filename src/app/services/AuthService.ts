import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import AuthRepository from '@repositories/AuthRepository';
import TenantRepository from '@repositories/TenantRepository';
import { ApiException } from '@core/ApiException';
import { User } from '@interfaces';

const generateToken = (params = {}) => {
  return jwt.sign(params, process.env.JWT_SECRET, {
    expiresIn: 86400,
  });
};

class AuthService {
  async authenticate(userData) {
    try {
      const { password, tenant } = userData;

      if (!tenant) throw new ApiException(4020, 'BusinessResponse');

      const tenantExists = await TenantRepository.show(tenant);

      if (!tenantExists) throw new ApiException(5002, 'BusinessResponse');

      const user = (await AuthRepository.findUserWithPassword(
        userData,
      )) as User;

      if (!user) throw new ApiException(4015, 'BusinessResponse');

      if (!(await bcrypt.compare(password, user.password))) {
        throw new ApiException(4016, 'BusinessResponse');
      }

      const tokenData = {
        aud: 'api.com',
        user,
        tenant,
      };

      delete user.password;
      user.token = generateToken(tokenData);

      return user;
    } catch (error) {
      throw new ApiException(error.code, error.type);
    }
  }
}

export default new AuthService();
