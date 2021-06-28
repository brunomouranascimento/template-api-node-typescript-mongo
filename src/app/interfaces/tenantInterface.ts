import mongoose from '@database/database';

export default interface Tenant extends mongoose.Document {
  name: string;
  cnpj: string;
  email: string;
  address: string;
}
