import type { Meta, StoryObj } from '@storybook/react';
import { VtmnButton } from '@vtmn/react';
import { Navbar } from './navbar.component';

const meta: Meta<typeof Navbar> = {
  title: 'Navbar',
  component: Navbar,
};

type Story = StoryObj<typeof Navbar>;

export default meta;

export const Simple: Story = {
  args: {
    logoUrl: '../../../../.storybook/assets/logo.png',
    buttons: [
      <VtmnButton key={1} size={'small'} iconAlone={'heart-line'} />,
      <VtmnButton key={2} size={'small'}>
        toto1
      </VtmnButton>,
    ],
  },
};
