import { createColumnHelper } from '@tanstack/react-table';
import { UiProgressBarCell, UiTableDateCellComponent, UiTableImgCellComponent } from '../custom-cells';
import { IUiTableDemo } from '../interfaces';
import { buildBooleanTagCell } from './build-boolean-tag-cell';
import { STATUS_TAG_CELL } from './build-status-tag-cell';

export function getTableDemoColumnsDef() {
  const columnHelper = createColumnHelper<IUiTableDemo>();

  return [
    columnHelper.accessor('string', {
      header: 'String header',
      cell: info => info.getValue(),
      enableSorting: true,
      sortDescFirst: true,
    }),
    columnHelper.accessor('number', {
      header: 'Number header',
      cell: info => info.getValue(),
      enableSorting: true,
      sortDescFirst: true,
    }),
    columnHelper.accessor('image', {
      header: 'Image header',
      cell: ({ getValue }) => <UiTableImgCellComponent source={getValue()} alt={'this is an image cell'} />,
      enableSorting: false,
    }),
    columnHelper.accessor('date', {
      header: 'Date header',
      cell: ({ getValue }) => <UiTableDateCellComponent date={getValue()} />,
      enableSorting: true,
      sortDescFirst: true,
    }),
    columnHelper.accessor('boolean', {
      header: 'Boolean header',
      cell: ({ getValue }) => buildBooleanTagCell(getValue()),
      enableSorting: true,
      sortDescFirst: true,
    }),
    columnHelper.accessor('status', {
      header: 'Status header',
      cell: ({ getValue }) => STATUS_TAG_CELL[getValue()],
      enableSorting: true,
      sortDescFirst: true,
    }),
    columnHelper.accessor('progressBar', {
      header: 'ProgressBar header',
      cell: ({ getValue }) => <UiProgressBarCell currentValue={getValue().current} maxValue={getValue().max} />,
      enableSorting: true,
      sortDescFirst: true,
    }),
  ];
}
