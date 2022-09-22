import bcrypt from 'bcryptjs'

import { Exception } from '@core/Exception'
import AuthRepository from '@repositories/v1/AuthRepository'
import UserRepository from '@repositories/v1/UserRepository'
import BaseRepository from '@repositories/BaseRepository'

import { User } from '@interfaces'
import { AuthDTO } from '@dtos'
import { generateToken } from '@utils/util'

class AuthService {
  async authenticate(authData: AuthDTO) {
    try {
      const { email, password, tenant } = authData

      const userExists = (await AuthRepository.findUserWithPassword(
        authData
      )) as User

      if (!userExists) throw new Exception(5000, 'BusinessResponse')

      if (!tenant && !userExists.isAdmin)
        throw new Exception(4019, 'BusinessResponse')

      if (!userExists.isAdmin) {
        const tenantExists = await BaseRepository.show(tenant, 'tenants')

        if (!tenantExists) throw new Exception(5002, 'BusinessResponse')
      }

      if (!(await bcrypt.compare(password, userExists.password))) {
        throw new Exception(4015, 'BusinessResponse')
      }

      const user = (await UserRepository.showByEmail(email)) as User

      const tokenData = {
        aud: 'com.template.api',
        user,
        tenant
      }

      user.token = generateToken(tokenData)

      return user
    } catch (error: any) {
      throw new Exception(error.code, error.type)
    }
  }
}

export default new AuthService()
