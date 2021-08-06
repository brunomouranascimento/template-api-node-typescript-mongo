import { Exception } from '@core/Exception'
import User from '@models/userModel'

import { NewUserDTO, UpdatedUserDTO } from '@dtos'
import { Logger } from '@utils/logger'

const log = Logger('ProductService')

class UserRepository {
  async store(newUserData: NewUserDTO) {
    try {
      return await User.create(newUserData)
    } catch (error) {
      log('error', error)
      throw new Exception(1001, 'DataResponse', [error.message])
    }
  }

  async index() {
    try {
      return await User.find().lean().exec()
    } catch (error) {
      log('error', error)
      throw new Exception(1000, 'DataResponse', [error.message])
    }
  }

  async show(id: string) {
    try {
      return await User.findById(id).lean().exec()
    } catch (error) {
      log('error', error)
      throw new Exception(1000, 'DataResponse', [error.message])
    }
  }

  async update(id: string, updatedUserData: UpdatedUserDTO) {
    try {
      return User.findByIdAndUpdate(id, updatedUserData, { new: true })
    } catch (error) {
      log('error', error)
      throw new Exception(2002, 'DataResponse', [error.message])
    }
  }

  async destroy(id: string) {
    try {
      await User.findByIdAndRemove(id)
    } catch (error) {
      log('error', error)
      throw new Exception(1000, 'DataResponse', [error.message])
    }
  }

  async findUserWithPassword(userData: NewUserDTO) {
    try {
      const { email } = userData

      return await User.findOne({ email }).select('+password').lean().exec()
    } catch (error) {
      log('error', error)
      throw new Exception(1000, 'DataResponse', [error.message])
    }
  }

  async showByEmail(email: string) {
    try {
      return await User.findOne({ email }).lean().exec()
    } catch (error) {
      log('error', error)
      throw new Exception(1000, 'DataResponse', [error.message])
    }
  }
}

export default new UserRepository()
