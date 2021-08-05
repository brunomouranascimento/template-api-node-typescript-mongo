import { Tenant } from '@interfaces'

export default interface AuthDTO {
  email: string
  password: string
  tenant: string
  isAdmin: boolean
}
