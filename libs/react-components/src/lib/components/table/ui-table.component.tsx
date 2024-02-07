import {
  ColumnDef,
  SortingState,
  Table,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { VtmnIcon } from '@vtmn/react';
import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './ui-table.module.scss';

interface IProps<T extends object> {
  readonly columns: ColumnDef<T>[];
  readonly data: T[];
}

function getSortIcon(currentSorting: string): React.JSX.Element {
  switch (currentSorting) {
    case 'asc': {
      return <VtmnIcon value="arrow-up-fill" variant={'brand'} />;
    }

    case 'desc': {
      return <VtmnIcon value="arrow-down-fill" variant={'brand'} />;
    }

    default: {
      return <VtmnIcon value={'arrow-up-down-fill'} variant={'brand'} />;
    }
  }
}

export function UiTable<TData extends object>({ columns, data }: IProps<TData>): React.JSX.Element {
  const [sorting, setSorting] = useState<SortingState>([]);
  const table: Table<TData> = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
  });
  const cx = classNames.bind(styles);

  return (
    <table className={cx('ui-table')}>
      <thead className={cx('ui-table__header', 'typo_text-3')}>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th className={cx('ui-table__header__cell')} key={header.id}>
                {header.isPlaceholder ? null : (
                  <button
                    className={
                      header.column.getCanSort()
                        ? cx('ui-table__header__cell__sortable')
                        : cx('ui-table__header__cell__non-sortable')
                    }
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {header.column.getCanSort() ? getSortIcon(header.column.getIsSorted() as string) : null}
                  </button>
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className={cx('ui-table__body')}>
        {table.getRowModel().rows.map(row => (
          <tr className={cx('ui-table__body__row')} key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td className={cx('ui-table__body__cell', 'typo_text-3')} key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
