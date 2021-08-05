import { Tenant } from '@interfaces'

export default interface User {
  _id: string
  name: string
  email: string
  password: string
  tenants: [Tenant]
  token: string
  passwordResetToken: string
  passwordResetExpires: Date
  isAdmin: boolean
}
