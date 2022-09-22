import { Exception } from '@core/Exception'
import User from '@models/userModel'

import { AuthDTO } from '@dtos'

class AuthRepository {
  async findUserWithPassword(authData: AuthDTO) {
    try {
      const { email } = authData

      return await User.findOne({ email }).select('+password').lean().exec()
    } catch (error: any) {
      throw new Exception(1000, 'DataResponse', [error.message])
    }
  }
}

export default new AuthRepository()
