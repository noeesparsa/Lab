import type { Meta, StoryObj } from '@storybook/react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { IconLink } from './icon-link.component';

const meta: Meta<typeof IconLink> = {
  title: 'Utility/Icon Link',
  component: IconLink,
};

type Story = StoryObj<typeof IconLink>;

export default meta;

export const Simple: Story = {
  args: {
    link: 'https://github.com/Rangoow/Lab',
    iconSize: 'lg',
    icon: faGithub,
  },
};
