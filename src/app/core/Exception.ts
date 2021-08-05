export class Exception extends Error {
  code: number

  type: string

  errors: Array<string> | undefined

  constructor(code: number, type: string, errors?: Array<string>) {
    super()
    this.code = code
    this.type = type
    this.errors = errors
  }
}
