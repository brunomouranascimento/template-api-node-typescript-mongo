import { Tenant } from '@interfaces'

export default interface NewUserDTO {
  email: string
  password: string
  tenant: [Tenant]
  isAdmin: string
}
