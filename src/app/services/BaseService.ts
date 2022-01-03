import { Exception } from '@core/Exception'

import BaseRepository from '@repositories/BaseRepository'

class BaseService {
  async index(entity: string) {
    try {
      return await BaseRepository.index(entity)
    } catch (error: any) {
      throw new Exception(error.code, error.type, error)
    }
  }

  async show(id: string, entity: string) {
    try {
      const data = await BaseRepository.show(id, entity)

      if (!data) throw new Exception(5000, 'BusinessResponse')

      return data
    } catch (error: any) {
      throw new Exception(error.code, error.type, error)
    }
  }

  async update(id: string, updatedData: any, entity: string) {
    try {
      const data = await BaseRepository.show(id, entity)

      if (!data) throw new Exception(5000, 'BusinessResponse')

      return await BaseRepository.update(id, updatedData, entity)
    } catch (error: any) {
      console.log(error)
      throw new Exception(error.code, error.type, error)
    }
  }

  async destroy(id: string, entity: string) {
    try {
      const data = await BaseRepository.show(id, entity)

      if (!data) throw new Exception(5000, 'BusinessResponse')

      return await BaseRepository.destroy(id, entity)
    } catch (error: any) {
      throw new Exception(error.code, error.type, error)
    }
  }
}

export default new BaseService()
