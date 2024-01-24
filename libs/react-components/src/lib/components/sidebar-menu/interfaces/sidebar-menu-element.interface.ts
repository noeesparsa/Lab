import { VitamixId } from '@vtmn/icons/dist/vitamix/font/vitamix';

export interface ISidebarMenuElement {
  readonly key: string;
  readonly text: string;
  readonly title: string;
  readonly icon: VitamixId;
  readonly redirectPath: string;
}
