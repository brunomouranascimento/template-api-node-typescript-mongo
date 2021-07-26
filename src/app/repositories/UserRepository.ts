import User from '@models/userModel';
import { ApiException } from '@core/ApiException';
import { NewUserDTO } from '@dtos';

class UserRepository {
  async store(newUserData: NewUserDTO) {
    try {
      return await User.create(newUserData);
    } catch (error) {
      throw new ApiException(1001, 'DataResponse', [error.message]);
    }
  }

  async index() {
    try {
      return await User.find().lean().exec();
    } catch (error) {
      throw new ApiException(1000, 'DataResponse', [error.message]);
    }
  }

  async show(id: string) {
    try {
      return await User.findById(id).lean().exec();
    } catch (error) {
      throw new ApiException(1000, 'DataResponse', [error.message]);
    }
  }

  async update(id: string, userData: NewUserDTO) {
    try {
      return User.findByIdAndUpdate(id, { userData }, { new: true });
    } catch (error) {
      throw new ApiException(2002, 'DataResponse', [error.message]);
    }
  }

  async destroy(id: string) {
    try {
      await User.findByIdAndRemove(id);
    } catch (error) {
      throw new ApiException(1000, 'DataResponse', [error.message]);
    }
  }

  async findUserWithPassword(userData: NewUserDTO) {
    try {
      const { email } = userData;

      return await User.findOne({ email }).select('+password').lean().exec();
    } catch (error) {
      throw new ApiException(1000, 'DataResponse', [error.message]);
    }
  }

  async showByEmail(email: string) {
    try {
      return await User.findOne({ email }).lean().exec();
    } catch (error) {
      throw new ApiException(1000, 'DataResponse', [error.message]);
    }
  }
}

export default new UserRepository();
