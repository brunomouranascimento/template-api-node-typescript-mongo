import UserRepository from '@repositories/UserRepository'
import { validEmail } from '@utils/util'
import { Exception } from '@core/Exception'
import { User } from '@interfaces'
import { NewUserDTO } from '@dtos'

class UserService {
  async store(newUserData: NewUserDTO) {
    try {
      const { email } = newUserData

      if (!email.match(validEmail)) {
        throw new Exception(4019, 'BusinessResponse')
      }
      const userExists = await UserRepository.showByEmail(email)

      if (userExists) throw new Exception(4018, 'BusinessResponse')

      await UserRepository.store(newUserData)

      return (await UserRepository.showByEmail(email)) as User
    } catch (error) {
      console.error(error)
      throw new Exception(error.code, error.type, error)
    }
  }

  async index() {
    try {
      return (await UserRepository.index()) as [User]
    } catch (error) {
      console.error(error)
      throw new Exception(error.code, error.type, error)
    }
  }

  async show(id: string) {
    try {
      const user = (await UserRepository.show(id)) as User

      if (!user) throw new Exception(4015, 'BusinessResponse')

      return user
    } catch (error) {
      console.error(error)
      throw new Exception(error.code, error.type, error)
    }
  }

  async destroy(id: string) {
    try {
      const user = await UserRepository.show(id)

      if (!user) throw new Exception(4015, 'BusinessResponse')

      return await UserRepository.destroy(id)
    } catch (error) {
      console.error(error)
      throw new Exception(error.code, error.type, error)
    }
  }
}

export default new UserService()
