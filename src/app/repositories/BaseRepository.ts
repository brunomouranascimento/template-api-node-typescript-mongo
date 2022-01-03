import { Exception } from '@core/Exception'

import { getModel } from '../utils/util'

class BaseRepository {
  async store(newData: any, entity: string) {
    try {
      return await getModel(entity).create(newData)
    } catch (error: any) {
      throw new Exception(1001, 'DataResponse', [error.message])
    }
  }

  async index(entity: string) {
    try {
      return await getModel(entity).find().lean().exec()
    } catch (error: any) {
      throw new Exception(1000, 'DataResponse', [error.message])
    }
  }

  async show(id: string, entity: string) {
    try {
      return await getModel(entity).findById(id).lean().exec()
    } catch (error: any) {
      throw new Exception(1000, 'DataResponse', [error.message])
    }
  }

  async update(id: string, updatedData: any, entity: string) {
    try {
      return getModel(entity).findByIdAndUpdate(id, updatedData, { new: true })
    } catch (error: any) {
      console.log(error)
      throw new Exception(1003, 'DataResponse', [error.message])
    }
  }

  async destroy(id: string, entity: string) {
    try {
      await getModel(entity).findByIdAndRemove(id)
    } catch (error: any) {
      throw new Exception(1000, 'DataResponse', [error.message])
    }
  }
}

export default new BaseRepository()
