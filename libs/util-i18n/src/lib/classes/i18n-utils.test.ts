import i18next from '../i18n';
import { I18nUtils } from './i18n-utils';

describe(`I18nUtils`, (): void => {
  describe(`getCurrentLanguage()`, (): void => {
    describe.each`
      currentLocale | expected
      ${`fr-FR`}    | ${`fr-FR`}
      ${`en-GB`}    | ${`en-GB`}
    `(`when the locale is: $currentLocale`, ({ currentLocale, expected }): void => {
      beforeEach((): void => {
        i18next.language = currentLocale;
      });

      it(`should return: ${expected}`, (): void => {
        const currentLanguage = I18nUtils.getCurrentLanguage();

        expect(currentLanguage).toStrictEqual(expected);
      });
    });
  });

  describe(`getCurrentCSLanguage()`, (): void => {
    describe.each`
      currentLocale | expected
      ${`fr-FR`}    | ${`fr`}
      ${`en-GB`}    | ${`en`}
      ${`de-DE`}    | ${`en`}
    `(`when the locale is: $currentLocale`, ({ currentLocale, expected }): void => {
      beforeEach((): void => {
        i18next.language = currentLocale;
      });

      it(`should return: ${expected}`, (): void => {
        const currentLanguage = I18nUtils.getCurrentCSLanguage();

        expect(currentLanguage).toStrictEqual(expected);
      });
    });
  });
});
