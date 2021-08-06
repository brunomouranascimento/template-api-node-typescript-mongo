import logger from 'logflake'

export const Logger = (type: string) => {
  return logger({
    prefix: type,
    linebreak: false,
    username: false,
    platform: false,
    mainModule: false,
    dateLocale: 'pt-BR'
  })
}
