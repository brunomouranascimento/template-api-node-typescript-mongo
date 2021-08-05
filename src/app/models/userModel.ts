import bcrypt from 'bcryptjs'

import mongoose from '@database/database'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  tenants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tenant'
    }
  ],
  token: {
    type: String
  },
  passwordResetToken: {
    type: String,
    select: false
  },
  passwordResetExpires: {
    type: Date,
    select: false
  },
  isAdmin: {
    type: Boolean
  }
})

UserSchema.pre<any>('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 10)
  this.password = hash
  next()
})

const User = mongoose.model('User', UserSchema)

export default User
