import { Exception } from '@core/Exception'
import User from '@models/userModel'

import { AuthDTO } from '@dtos'
import { Logger } from '@utils/logger'

const log = Logger('ProductService')

class AuthRepository {
  async findUserWithPassword(authData: AuthDTO) {
    try {
      const { email } = authData

      return await User.findOne({ email }).select('+password').lean().exec()
    } catch (error) {
      log('error', error)
      throw new Exception(1000, 'DataResponse', [error.message])
    }
  }
}

export default new AuthRepository()
