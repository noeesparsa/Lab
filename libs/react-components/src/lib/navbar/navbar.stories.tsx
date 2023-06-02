import type { Meta } from '@storybook/react';
import { Navbar } from './navbar';
import appLogo from '../../assets/img.png';
import { VtmnButton } from '@vtmn/react';
import { StoryObj } from '@storybook/react';

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  title: 'Navbar',
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Navbar>;

export default meta;

export const Logo_only: Story = {
  args: {
    logo: appLogo,
    redirection: '/',
  },
};

export const With_actions = {
  args: {
    logo: appLogo,
    redirection: '/',
    actions: [
      <VtmnButton size="small" variant="secondary">
        Action 1
      </VtmnButton>,
      <VtmnButton size="small">Action 2</VtmnButton>,
    ],
  },
};
