import User from '@models/userModel';
import { ApiException } from '@core/ApiException';
import { AuthDTO } from '@dtos';

class AuthRepository {
  async findUserWithPassword(authData: AuthDTO) {
    try {
      const { email } = authData;

      return await User.findOne({ email }).select('+password').lean().exec();
    } catch (error) {
      throw new ApiException(1000, 'DataResponse', [error.message]);
    }
  }
}

export default new AuthRepository();
