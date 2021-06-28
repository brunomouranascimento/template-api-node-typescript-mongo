import _ from 'lodash';
import parser from 'accept-language-parser';

class Localize {
  localize(object, languages, defaultLanguage) {
    const selectedLanguage = languages[0]?.code || null;

    return {
      ...object,
      message: object.message
        ? object.message.localizedString[selectedLanguage || defaultLanguage]
        : undefined,
    };
  }

  prepareAcceptLanguageHeader(acceptLanguageHeaders) {
    return _.sortBy(parser.parse(acceptLanguageHeaders), '-quality');
  }
}

export default new Localize();
