import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './navbar.component';

const meta: Meta<typeof Navbar> = {
  title: 'Navbar',
  component: Navbar,
};

type Story = StoryObj<typeof Navbar>;

export default meta;

export const Simple: Story = {
  parameters: {
    backgrounds: {
      default: 'primary',
      values: [
        {
          name: 'primary',
          value: '#afafaf',
        },
      ],
    },
  },
  args: {},
};
