import mongoose from '@database/database';

export default interface User extends mongoose.Document {
  id: mongoose.ObjectId;
  name: string;
  email: string;
  password: string;
  tenants: mongoose.ObjectId;
  token: string;
  passwordResetToken: string;
  passwordResetExpires: Date;
}
