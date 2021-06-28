import bcrypt from 'bcryptjs';

import mongoose from '@database/database';
import { IUser } from '@interfaces';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  tenants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tenant',
    },
  ],
  token: {
    type: String,
  },
  passwordResetToken: {
    type: String,
    select: false,
  },
  passwordResetExpires: {
    type: Date,
    select: false,
  },
});

UserSchema.pre<IUser>('save', async function (next) {
  const user = this as IUser;
  const hash = await bcrypt.hash(user.password, 10);
  user.password = hash;
  next();
});

const User = mongoose.model<IUser>('User', UserSchema);

export default User;
