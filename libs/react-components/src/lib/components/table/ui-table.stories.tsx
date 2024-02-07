import { Meta, StoryObj } from '@storybook/react';
import { UI_TABLE_DEMO_DATA } from './constants';
import { getTableDemoColumnsDef } from './functions';
import { IUiTableDemo } from './interfaces';
import { UiTable } from './ui-table.component';

const meta: Meta<typeof UiTable> = {
  title: 'Data Visualization/Table/Simple',
  component: UiTable,
};

type Story = StoryObj<typeof UiTable>;

const data: IUiTableDemo[] = UI_TABLE_DEMO_DATA;
const columns = getTableDemoColumnsDef();

export default meta;

export const Simple: Story = {
  args: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    columns,
    data,
  },
};
