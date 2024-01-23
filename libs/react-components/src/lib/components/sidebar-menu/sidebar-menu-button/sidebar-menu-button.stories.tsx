import { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { SidebarMenuButton } from './sidebar-menu-button.component';

const meta: Meta<typeof SidebarMenuButton> = {
  title: 'Structure/Sidebar Menu Button',
  component: SidebarMenuButton,
  decorators: [
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Story => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

type Story = StoryObj<typeof SidebarMenuButton>;

export default meta;

export const Collapsed: Story = {
  parameters: {
    backgrounds: {
      default: 'primary',
    },
  },
  args: {
    isCollapsed: true,
    icon: 'earth-line',
    text: 'Dashboard',
    title: 'Navigate to requests-dashboard',
    redirectPath: '/toto',
  },
};

export const UnCollapsed: Story = {
  parameters: {
    backgrounds: {
      default: 'primary',
    },
  },
  args: {
    isCollapsed: false,
    icon: 'earth-line',
    text: 'Dashboard',
    title: 'Navigate to requests-dashboard',
    redirectPath: '/toto',
  },
};
