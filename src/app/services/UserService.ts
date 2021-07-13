import UserRepository from '@repositories/UserRepository';
import { validEmail } from '@utils/util';
import { ApiException } from '@core/ApiException';
import { User } from '@interfaces';
import { NewUserDTO } from '@dtos';

class UserService {
  async store(newUserData: NewUserDTO) {
    try {
      const { email } = newUserData;

      if (!email.match(validEmail)) {
        throw new ApiException(4019, 'BusinessResponse');
      }
      const userExists = await UserRepository.showByEmail(email);

      if (userExists) throw new ApiException(4018, 'BusinessResponse');

      await UserRepository.store(newUserData);

      return (await UserRepository.showByEmail(email)) as User;
    } catch (error) {
      throw new ApiException(error.code, error.type);
    }
  }

  async index() {
    try {
      return (await UserRepository.index()) as [User];
    } catch (error) {
      throw new ApiException(error.code, error.type);
    }
  }

  async show(id: string) {
    try {
      const user = (await UserRepository.show(id)) as User;

      if (!user) throw new ApiException(4015, 'BusinessResponse');

      return user;
    } catch (error) {
      throw new ApiException(error.code, error.type);
    }
  }

  async destroy(id: string) {
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
