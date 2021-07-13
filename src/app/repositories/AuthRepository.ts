import User from '@models/userModel';
import { ApiException } from '@core/ApiException';
import { NewUserDTO } from '@dtos';

class AuthRepository {
  async findUserWithPassword(userData: NewUserDTO) {
    try {
      const { email } = userData;

      return await User.findOne({ email }).select('+password').lean().exec();
    } catch (error) {
      throw new ApiException(1000, 'DataResponse', [error.message]);
    }
  }
}

export default new AuthRepository();
