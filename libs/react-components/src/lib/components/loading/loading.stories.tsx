import type { Meta, StoryObj } from '@storybook/react';
import { Loading } from './loading.component';

const meta: Meta<typeof Loading> = {
  title: 'Utility/Loading',
  component: Loading,
};

type Story = StoryObj<typeof Loading>;

export default meta;

export const Simple: Story = {
  args: {
    title: 'Loading...',
  },
};
