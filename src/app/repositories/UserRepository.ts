import User from '@models/userModel';
import { ApiException } from '@core/ApiException';

class UserRepository {
  async store(newUserData) {
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

  async show(id) {
    try {
      return await User.findById(id).lean().exec();
    } catch (error) {
      throw new ApiException(1000, 'DataResponse', [error.message]);
    }
  }

  async destroy(id) {
    try {
      await User.findByIdAndRemove(id);
    } catch (error) {
      throw new ApiException(1000, 'DataResponse', [error.message]);
    }
  }

  async findUserWithPassword(userData) {
    try {
      const { email } = userData;

      return await User.findOne({ email }).select('+password').lean().exec();
    } catch (error) {
      throw new ApiException(1000, 'DataResponse', [error.message]);
    }
  }

  async showByEmail(email) {
    try {
      return await User.findOne({ email }).lean().exec();
    } catch (error) {
      throw new ApiException(1000, 'DataResponse', [error.message]);
    }
  }
}

export default new UserRepository();
