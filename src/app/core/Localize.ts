import _ from 'lodash'
import parser from 'accept-language-parser'

class Localize {
  localize(object: any, languages: any, defaultLanguage: string) {
    const selectedLanguage = languages[0]?.code || null

    return {
      ...object,
      message: object.message
        ? object.message.localizedString[selectedLanguage || defaultLanguage]
        : undefined,
    }
  }

  prepareAcceptLanguageHeader(acceptLanguageHeaders: string) {
    return _.sortBy(parser.parse(acceptLanguageHeaders), '-quality')
  }
}

export default new Localize()
