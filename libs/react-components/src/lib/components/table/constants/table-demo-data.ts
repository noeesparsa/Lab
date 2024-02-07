import { EDemoStatusTag } from '../enums';
import { IUiTableDemo } from '../interfaces';

export const UI_TABLE_DEMO_DATA: IUiTableDemo[] = [
  {
    string: 'string_1',
    number: 1,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    date: '2024-01-01T00:00:00.000+0100',
    boolean: false,
    status: EDemoStatusTag.STATUS1,
    progressBar: {
      current: 50,
      max: 100,
    },
  },
  {
    string: 'string_2',
    number: 2,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    date: '2024-01-02T00:00:00.000+0100',
    boolean: true,
    status: EDemoStatusTag.STATUS2,
    progressBar: {
      current: 50,
      max: 200,
    },
  },
  {
    string: 'string_3',
    number: 3,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    date: '2024-01-03T00:00:00.000+0100',
    boolean: false,
    status: EDemoStatusTag.STATUS3,
    progressBar: {
      current: 150,
      max: 200,
    },
  },
];
