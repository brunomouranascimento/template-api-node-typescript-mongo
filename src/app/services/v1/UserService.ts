import { Exception } from '@core/Exception'
import UserRepository from '@repositories/v1/UserRepository'

import { validEmail } from '@utils/util'
import { User } from '@interfaces'
import { NewUserDTO, UpdatedUserDTO } from '@dtos'
import BaseRepository from '@repositories/BaseRepository'

class UserService {
  async store(newUserData: NewUserDTO, entity: string) {
    try {
      const { email } = newUserData

      if (!email.match(validEmail)) {
        throw new Exception(4018, 'BusinessResponse')
      }
      const userExists = await UserRepository.showByEmail(email)

      if (userExists) throw new Exception(4017, 'BusinessResponse')

      await BaseRepository.store(newUserData, entity)

      return (await UserRepository.showByEmail(email)) as User
    } catch (error: any) {
      throw new Exception(error.code, error.type, error)
    }
  }
}

export default new UserService()
