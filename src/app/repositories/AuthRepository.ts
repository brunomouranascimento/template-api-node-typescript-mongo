import User from '@models/userModel'
import { Exception } from '@core/Exception'
import { AuthDTO } from '@dtos'

class AuthRepository {
  async findUserWithPassword(authData: AuthDTO) {
    try {
      const { email } = authData

      return await User.findOne({ email }).select('+password').lean().exec()
    } catch (error) {
      console.error(error)
      throw new Exception(1000, 'DataResponse', [error.message])
    }
  }
}

export default new AuthRepository()
