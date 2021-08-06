export default interface NewUserDTO {
  email: string
  password: string
  tenant: [string]
  isAdmin: boolean
}
