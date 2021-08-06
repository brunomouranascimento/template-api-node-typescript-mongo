import User from '@models/userModel'
import { Exception } from '@core/Exception'
import { NewUserDTO, UpdatedUserDTO } from '@dtos'

class UserRepository {
  async store(newUserData: NewUserDTO) {
    try {
      return await User.create(newUserData)
    } catch (error) {
      console.error(error)
      throw new Exception(1001, 'DataResponse', [error.message])
    }
  }

  async index() {
    try {
      return await User.find().lean().exec()
    } catch (error) {
      console.error(error)
      throw new Exception(1000, 'DataResponse', [error.message])
    }
  }

  async show(id: string) {
    try {
      return await User.findById(id).lean().exec()
    } catch (error) {
      console.error(error)
      throw new Exception(1000, 'DataResponse', [error.message])
    }
  }

  async update(id: string, updatedUserData: UpdatedUserDTO) {
    try {
      const { email, tenants, isAdmin } = updatedUserData

      return User.findByIdAndUpdate(
        id,
        { email, tenants, isAdmin },
        { new: true }
      )
    } catch (error) {
      console.error(error)
      throw new Exception(2002, 'DataResponse', [error.message])
    }
  }

  async destroy(id: string) {
    try {
      await User.findByIdAndRemove(id)
    } catch (error) {
      console.error(error)
      throw new Exception(1000, 'DataResponse', [error.message])
    }
  }

  async findUserWithPassword(userData: NewUserDTO) {
    try {
      const { email } = userData

      return await User.findOne({ email }).select('+password').lean().exec()
    } catch (error) {
      console.error(error)
      throw new Exception(1000, 'DataResponse', [error.message])
    }
  }

  async showByEmail(email: string) {
    try {
      return await User.findOne({ email }).lean().exec()
    } catch (error) {
      console.error(error)
      throw new Exception(1000, 'DataResponse', [error.message])
    }
  }
}

export default new UserRepository()
