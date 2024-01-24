import i18next from '../i18n';

export class I18nUtils {
  public static getCurrentLanguage(): string {
    return i18next.language;
  }

  public static getCurrentCSLanguage(): string {
    return i18next.language === `fr-FR` ? `fr` : `en`;
  }
}
