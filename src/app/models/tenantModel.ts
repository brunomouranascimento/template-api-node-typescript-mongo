import mongoose from '@database/database'

const TenantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cnpj: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    select: false,
    lowercase: true,
    trim: true,
  },
  address: {
    type: String,
  },
})

const Tenant = mongoose.model('Tenant', TenantSchema)

export default Tenant
