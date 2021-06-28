import UserRepository from '@repositories/UserRepository';
import { validEmail } from '@utils/util';
import { ApiException } from '@core/ApiException';

class UserService {
  async store(newUserData) {
    try {
      const { email } = newUserData;

      if (!email.match(validEmail)) {
        throw new ApiException(4019, 'BusinessResponse');
      }
      const userExists = await UserRepository.showByEmail(email);

      if (userExists) throw new ApiException(4018, 'BusinessResponse');

      const newUser = await UserRepository.store(newUserData);

      delete newUser.password;

      return newUser;
    } catch (error) {
      throw new ApiException(error.code, error.type);
    }
  }

  async index() {
    try {
      return await UserRepository.index();
    } catch (error) {
      throw new ApiException(error.code, error.type);
    }
  }

  async show(id) {
    try {
      const user = await UserRepository.show(id);

      if (!user) throw new ApiException(4015, 'BusinessResponse');

      return user;
    } catch (error) {
      throw new ApiException(error.code, error.type);
    }
  }

  async destroy(id) {
    try {
      const user = await UserRepository.show(id);

      if (!user) throw new ApiException(4015, 'BusinessResponse');

      return await UserRepository.destroy(id);
    } catch (error) {
      throw new ApiException(error.code, error.type);
    }
  }
}

export default new UserService();
