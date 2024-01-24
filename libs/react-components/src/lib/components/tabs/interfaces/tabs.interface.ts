import { VitamixId } from '@vtmn/icons/dist/vitamix/font/vitamix';

export interface ITabs {
  readonly id: string;
  readonly titleTranslationKey: string;
  readonly path: string;
  readonly icon?: VitamixId;
  readonly badgeValue?: number;
}
