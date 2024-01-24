import { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { SidebarMenu } from './sidebar-menu.component';

const meta: Meta<typeof SidebarMenu> = {
  title: 'Structure/Sidebar Menu',
  component: SidebarMenu,
  decorators: [
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Story => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

type Story = StoryObj<typeof SidebarMenu>;

export default meta;

export const Simple: Story = {
  args: {
    menuButtonsProperties: [
      {
        key: 'sidebar-menu_dashboard',
        icon: 'home-line',
        text: 'page.requests-dashboard.title',
        title: 'sidebar-menu.requests-dashboard-button',
        redirectPath: 'requests-dashboard',
      },
      {
        key: 'sidebar-menu_admin',
        icon: 'lock-line',
        text: 'page.admin.title',
        title: 'sidebar-menu.admin-button',
        redirectPath: 'admin',
      },
    ],
  },
};
