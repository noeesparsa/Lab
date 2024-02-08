import { EDemoStatusTag } from '../enums';
import { IUiProgressBar } from './progress-bar.interface';

export interface IUiTableDemo {
  string: string;
  number: number;
  image: string;
  date: string;
  boolean: boolean;
  status: EDemoStatusTag;
  progressBar: IUiProgressBar;
}
