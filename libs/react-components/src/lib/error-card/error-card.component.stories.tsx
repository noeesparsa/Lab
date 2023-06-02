import { ErrorCard } from './error-card.component';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ErrorCard> = {
  title: 'Error Card',
  component: ErrorCard,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof ErrorCard>;

export default meta;

export const Simple: Story = {
  args: {
    title: 'This is an error title',
  },
};

export const WithChildren: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Error Card with children.',
      },
    },
  },
  args: {
    title: 'This is an error title',
    children: (
      <>
        <p>This is a first child</p>
        <p>This is a second child</p>
      </>
    ),
  },
};
