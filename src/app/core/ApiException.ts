export class ApiException extends Error {
  constructor(private code, private type, private errors?) {
    super();
    this.code = code;
    this.type = type;
    this.errors = errors;
  }
}
