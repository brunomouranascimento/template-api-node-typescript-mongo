import { Exception } from '@core/Exception'
import User from '@models/userModel'

import { NewUserDTO, UpdatedUserDTO } from '@dtos'

class UserRepository {
  async findUserWithPassword(userData: NewUserDTO) {
    try {
      const { email } = userData

      return await User.findOne({ email }).select('+password').lean().exec()
    } catch (error: any) {
      throw new Exception(1000, 'DataResponse', [error.message])
    }
  }

  async showByEmail(email: string) {
    try {
      return await User.findOne({ email }).lean().exec()
    } catch (error: any) {
      throw new Exception(1000, 'DataResponse', [error.message])
    }
  }
}

export default new UserRepository()
