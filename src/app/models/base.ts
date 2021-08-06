import mongoose from '@database/database'

export const base = (schema: mongoose.Schema) => {
  schema.set('timestamps', true)

  schema.add({
    deletedAt: {
      type: Date,
      default: null
    }
  })
  schema.add({
    createdAt: {
      type: Date,
      default: null
    }
  })

  schema.pre('find', function (next) {
    this.where('deletedAt', null)
    next()
  })
  schema.pre('findOne', function (next) {
    this.where('deletedAt', null)
    next()
  })
  schema.pre('count', function (next) {
    this.where('deletedAt', null)
    next()
  })
  schema.pre('countDocuments', function (next) {
    this.where('deletedAt', null)
    next()
  })
}
