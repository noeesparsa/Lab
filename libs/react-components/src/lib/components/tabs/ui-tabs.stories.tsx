import { randNumber } from '@ngneat/falso';
import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { UiTabs } from './ui-tabs.component';

const meta: Meta<typeof UiTabs> = {
  title: 'Structure/Tabs',
  component: UiTabs,
  decorators: [
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Story => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

type Story = StoryObj<typeof UiTabs>;

export default meta;

export const Simple: Story = {
  args: {
    tabs: [
      { titleTranslationKey: 'tab 1', path: 'tab_1', id: 'tab1', badgeValue: randNumber({ min: 1, max: 100 }) },
      { titleTranslationKey: 'tab 2', path: 'tab_2', id: 'tab2' },
      { titleTranslationKey: 'tab 3', path: 'tab_3', id: 'tab3', icon: 'user-line' },
    ],
  },
};
