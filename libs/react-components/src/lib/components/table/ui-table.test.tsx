import { ColumnDef } from '@tanstack/react-table';
import { RenderResult, render, screen } from '@testing-library/react';
import { UI_TABLE_DEMO_DATA } from './constants';
import { EDemoStatusTag } from './enums';
import { getTableDemoColumnsDef } from './functions';
import { IUiTableDemo } from './interfaces';
import { UiTable } from './ui-table.component';

describe('uiTable', (): void => {
  let tableData: IUiTableDemo[];
  let tableColumns: ColumnDef<IUiTableDemo>[];

  beforeEach((): void => {
    tableData = UI_TABLE_DEMO_DATA;
    tableColumns = getTableDemoColumnsDef();
  });

  describe('snapshot testing', (): void => {
    it(`should render correctly and match the snapshot`, (): void => {
      const result: RenderResult = render(<UiTable data={tableData} columns={tableColumns} />);

      expect(result).toMatchSnapshot();
    });
  });

  describe('component testing', (): void => {
    it(`should render the table with correct number of row and columns`, (): void => {
      render(<UiTable data={tableData} columns={tableColumns} />);

      const tableElement: HTMLElement = screen.getByRole('table');
      const numberOfRow: HTMLElement[] = screen.getAllByRole('row');
      const numberOfColumnHeader: HTMLElement[] = screen.getAllByRole('columnheader');

      expect(tableElement).toBeVisible();
      expect(numberOfRow).toHaveLength(tableData.length + 1);
      expect(numberOfColumnHeader).toHaveLength(7);
    });

    it(`should render the string column`, (): void => {
      render(<UiTable data={tableData} columns={tableColumns} />);

      const stringColumnHeaderElement: HTMLElement = screen.getByRole('columnheader', { name: /string header/i });
      const stringCell1: HTMLElement = screen.getByRole('cell', { name: /string_1/i });
      const stringCell2: HTMLElement = screen.getByRole('cell', { name: /string_2/i });
      const stringCell3: HTMLElement = screen.getByRole('cell', { name: /string_3/i });

      expect(stringColumnHeaderElement).toBeVisible();
      expect(stringCell1).toBeVisible();
      expect(stringCell2).toBeVisible();
      expect(stringCell3).toBeVisible();
    });

    it(`should render the number column`, (): void => {
      render(<UiTable data={tableData} columns={tableColumns} />);

      const numberColumnHeaderElement: HTMLElement = screen.getByRole('columnheader', { name: /number header/i });
      const numberCell1: HTMLElement = screen.getByRole('cell', { name: '1' });
      const numberCell2: HTMLElement = screen.getByRole('cell', { name: '2' });
      const numberCell3: HTMLElement = screen.getByRole('cell', { name: '3' });

      expect(numberColumnHeaderElement).toBeVisible();
      expect(numberCell1).toBeVisible();
      expect(numberCell2).toBeVisible();
      expect(numberCell3).toBeVisible();
    });

    it(`should render the image column`, (): void => {
      render(<UiTable data={tableData} columns={tableColumns} />);

      const imageColumnHeaderElement: HTMLElement = screen.getByRole('columnheader', { name: /image header/i });
      const imageCellElements: HTMLElement[] = screen.getAllByRole('img');

      expect(imageColumnHeaderElement).toBeVisible();
      expect(imageCellElements).toHaveLength(3);
    });

    it(`should render the boolean column`, (): void => {
      render(<UiTable data={tableData} columns={tableColumns} />);

      const imageColumnHeaderElement: HTMLElement = screen.getByRole('columnheader', { name: /boolean header/i });
      const activeTagCellElements: HTMLElement[] = screen.getAllByText('TRUE');
      const inactiveTagCellElements: HTMLElement[] = screen.getAllByText('FALSE');

      expect(imageColumnHeaderElement).toBeVisible();
      expect(activeTagCellElements).toHaveLength(1);
      expect(inactiveTagCellElements).toHaveLength(2);
    });

    it(`should render the status tag column`, (): void => {
      render(<UiTable data={tableData} columns={tableColumns} />);

      const imageColumnHeaderElement: HTMLElement = screen.getByRole('columnheader', { name: /status header/i });
      const status1TagCellElements: HTMLElement[] = screen.getAllByText(EDemoStatusTag.STATUS1);
      const status2TagCellElements: HTMLElement[] = screen.getAllByText(EDemoStatusTag.STATUS2);
      const status3TagCellElements: HTMLElement[] = screen.getAllByText(EDemoStatusTag.STATUS3);

      expect(imageColumnHeaderElement).toBeVisible();
      expect(status1TagCellElements).toHaveLength(1);
      expect(status2TagCellElements).toHaveLength(1);
      expect(status3TagCellElements).toHaveLength(1);
    });

    it(`should render the progressbar  column`, (): void => {
      render(<UiTable data={tableData} columns={tableColumns} />);

      const imageColumnHeaderElement: HTMLElement = screen.getByRole('columnheader', { name: /progressbar header/i });
      const progressbarElements: HTMLElement[] = screen.getAllByRole('progressbar');

      expect(imageColumnHeaderElement).toBeVisible();
      expect(progressbarElements).toHaveLength(3);
    });
  });
});
