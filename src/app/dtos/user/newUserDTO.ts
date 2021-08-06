export default interface NewUserDTO {
  email: string
  password: string
  tenants: [string]
  isAdmin: boolean
}
